document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRODUKT DATENBANK (Simuliert) ---
    const products = [
        {
            id: 1,
            name: "Oversized Pump Cover",
            price: "34.90",
            category: "clothing",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Oversized+Tee",
            desc: "Das ultimative Shirt für dein Training. Versteckt den Pump bis zum Reveal. 100% Baumwolle, schwerer Stoff."
        },
        {
            id: 2,
            name: "Pure Creatine Monohydrate",
            price: "24.90",
            category: "supplements",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Creatine",
            desc: "Erhöhe deine körperliche Leistung bei Schnellkrafttraining. 100% reines Creapure ohne Zusatzstoffe."
        },
        {
            id: 3,
            name: "Pro Lifting Straps",
            price: "14.90",
            category: "equipment",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Straps",
            desc: "Lass nicht zu, dass deine Griffkraft dein Rückentraining limitiert. Robuste Baumwolle mit Neopren-Polsterung."
        },
        {
            id: 4,
            name: "CBUM Pre-Workout",
            price: "49.90",
            category: "supplements",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Pre-Workout",
            desc: "Maximaler Fokus und Pump. Entwickelt von Chris Bumstead. Geschmack: Blackberry Lemonade."
        },
        {
            id: 5,
            name: "Leder Gewichthebergürtel",
            price: "59.90",
            category: "equipment",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Lifting+Belt",
            desc: "Schütze deinen unteren Rücken bei schweren Squats und Deadlifts. 10mm dickes Echtleder."
        },
        {
            id: 6,
            name: "Gym Hoodie Black",
            price: "59.90",
            category: "clothing",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Hoodie",
            desc: "Perfekt für den Weg zum Gym oder das Warm-up. Weiches Innenfleece und athletischer Schnitt."
        },
        {
            id: 7,
            name: "Whey Isolate",
            price: "39.90",
            category: "supplements",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Whey",
            desc: "Schnelle Proteinversorgung nach dem Training. Wenig Fett, wenig Zucker, maximaler Muskelaufbau."
        },
        {
            id: 8,
            name: "Squat Shorts",
            price: "29.90",
            category: "clothing",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Shorts",
            desc: "Kurze Hosen für Beinfreiheit beim Beintraining. Zeig, wofür du gearbeitet hast."
        },
        {
            id: 9,
            name: "Kniebandagen (Sleeves)",
            price: "34.90",
            category: "equipment",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Knee+Sleeves",
            desc: "Wärme und Kompression für deine Kniegelenke. 7mm Neopren für Stabilität."
        },
        {
            id: 10,
            name: "Shaker Bottle 700ml",
            price: "9.90",
            category: "equipment",
            image: "https://placehold.co/600x600/1a1a1a/e31b23?text=Shaker",
            desc: "Auslaufsicherer Shaker mit Sieb für klumpenfreie Shakes. BPA-frei."
        }
    ];

    // --- 2. LOGIK FÜR DETAILSEITE (product.html) ---
    // Wir prüfen, ob wir auf der Produktseite sind
    if (window.location.pathname.includes('product.html')) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id'); // Holt ?id=X aus der URL

        const product = products.find(p => p.id == productId);

        if (product) {
            // Inhalte in die HTML Elemente füllen
            document.getElementById('detail-img').src = product.image;
            document.getElementById('detail-title').textContent = product.name;
            document.getElementById('detail-price').textContent = 'CHF ' + product.price;
            document.getElementById('detail-desc').textContent = product.desc;
            document.title = "LEGACY GYM | " + product.name;
        } else {
            // Fallback, falls keine ID da ist
            document.querySelector('main').innerHTML = "<h1>Produkt nicht gefunden</h1><a href='shop.html' class='btn'>Zurück zum Shop</a>";
        }
    }

    // --- 3. LOGIK FÜR SHOP SEITE (shop.html) ---
    // Wenn wir auf der Shop Seite sind, generieren wir die Karten automatisch (Optional, aber sauberer)
    // Da du den HTML Code aber im File hast, lassen wir die Filter-Logik hier:
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');

                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- 4. MOBILE MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 5. FORMULARE ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Aktion erfolgreich simuliert!');
            form.reset();
        });
    });
});
