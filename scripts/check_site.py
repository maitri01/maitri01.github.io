"""Check generated routes, shared navigation, landmarks, and local assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1] / 'public'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.refs, self.ids, self.nav = [], set(), []
        self.h1 = self.main = 0
        self.in_nav = False
        self.redirect = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'meta' and a.get('http-equiv') == 'refresh': self.redirect = True
        if tag == 'nav' and a.get('aria-label') == 'Main navigation': self.in_nav = True
        if tag == 'a' and self.in_nav: self.nav.append(a.get('href'))
        if tag == 'img': assert a.get('alt'), 'Image is missing alternative text'
        if tag in ('a', 'link') and a.get('href'): self.refs.append(a['href'])
        if tag in ('img', 'script') and a.get('src'): self.refs.append(a['src'])

    def handle_endtag(self, tag):
        if tag == 'nav': self.in_nav = False

expected = ['/', '/research/', '/projects/', '/experience/', '/contact/', '/assets/pdf/Maitri_Shah_CV.pdf']
pages = {f: Page(f.read_text(encoding='utf-8')) for f in ROOT.rglob('*.html')}
count = 0
for file, page in pages.items():
    if page.redirect: continue
    assert page.h1 == 1, f'{file}: expected one h1, found {page.h1}'
    assert page.main == 1, f'{file}: missing main landmark'
    assert page.nav == expected, f'{file}: inconsistent main navigation'
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc: continue
        path = unquote(url.path)
        target = ROOT / path.lstrip('/') if path.startswith('/') else file.parent / path
        if not path: target = file
        if target.is_dir(): target = target / 'index.html'
        assert target.is_file(), f'{file.relative_to(ROOT)}: broken reference {ref}'
        if url.fragment and target.suffix == '.html':
            assert unquote(url.fragment) in pages[target].ids, f'{file}: missing anchor {ref}'
    count += 1
pdf = ROOT / 'assets/pdf/Maitri_Shah_CV.pdf'
assert pdf.read_bytes().startswith(b'%PDF'), 'CV download is not a PDF'
print(f'Passed: {count} pages, shared navigation, landmarks, image alternatives, internal links and assets, CV PDF')
