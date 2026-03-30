// Mobile Menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Footer Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Forms: Button-Feedback statt Alert
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('[type=submit]');
        const orig = btn.textContent;
        btn.textContent = '✓ Gesendet';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; form.reset(); }, 2500);
    });
});

// Shop Filter (Klick + URL-Parameter von Kategoriekarten auf der Startseite)
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
    const applyFilter = (value) => {
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === value));
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = (value === 'all' || card.dataset.category === value) ? '' : 'none';
        });
    };
    filterBtns.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));
    // URL-Parameter lesen (z.B. shop.html?filter=clothing von der Startseite)
    const urlFilter = new URLSearchParams(location.search).get('filter');
    if (urlFilter) applyFilter(urlFilter);
}

// Produktdetail-Seite: Daten aus eingebettetem JSON lesen
if (location.pathname.includes('product.html')) {
    const dataEl = document.getElementById('products-data');
    const id = new URLSearchParams(location.search).get('id');
    if (dataEl && id) {
        const p = JSON.parse(dataEl.textContent).find(x => x.id == id);
        if (p) {
            document.getElementById('detail-img').src = p.image;
            document.getElementById('detail-title').textContent = p.name;
            document.getElementById('detail-price').textContent = 'CHF ' + p.price;
            document.getElementById('detail-desc').textContent = p.desc;
            document.title = 'LEGACY GYM | ' + p.name;
        } else {
            document.querySelector('main').innerHTML = "<h1>Produkt nicht gefunden</h1><a href='shop.html' class='btn' style='margin-top:1rem;display:inline-block'>Zurück zum Shop</a>";
        }
    }
}
