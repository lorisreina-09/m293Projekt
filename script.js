// DATEI 5: script.js

// --- DATEN (10 Produkte) ---
const products = [
    { id: 1, name: "Whey Protein Isolate", category: "supplements", price: 49.90, desc: "Reinstes Protein für maximalen Muskelaufbau. Vanille Geschmack.", img: "https://placehold.co/600x600/333/e0ff00?text=WHEY+PROTEIN" },
    { id: 2, name: "Pre-Workout Booster", category: "supplements", price: 39.90, desc: "Explosive Energie für dein härtestes Training.", img: "https://placehold.co/600x600/333/e0ff00?text=BOOSTER" },
    { id: 3, name: "Creatine Monohydrate", category: "supplements", price: 24.90, desc: "Steigert die körperliche Leistung bei Schnellkrafttraining.", img: "https://placehold.co/600x600/333/e0ff00?text=CREATINE" },
    { id: 4, name: "Pro Lifting Belt", category: "gear", price: 59.90, desc: "Ledergürtel für maximale Stabilität bei Kniebeugen.", img: "https://placehold.co/600x600/333/e0ff00?text=BELT" },
    { id: 5, name: "Handgelenksbandagen", category: "gear", price: 19.90, desc: "Schützt deine Gelenke bei schwerem Bankdrücken.", img: "https://placehold.co/600x600/333/e0ff00?text=WRAPS" },
    { id: 6, name: "Zughilfen (Straps)", category: "gear", price: 14.90, desc: "Für mehr Grip beim Kreuzheben.", img: "https://placehold.co/600x600/333/e0ff00?text=STRAPS" },
    { id: 7, name: "Performance T-Shirt", category: "wear", price: 34.90, desc: "Atmungsaktiv und schweißableitend. Slim Fit.", img: "https://placehold.co/600x600/333/e0ff00?text=SHIRT" },
    { id: 8, name: "Gym Hoodie Black", category: "wear", price: 54.90, desc: "Perfekt für das Warm-up oder den Weg zum Gym.", img: "https://placehold.co/600x600/333/e0ff00?text=HOODIE" },
    { id: 9, name: "Compression Shorts", category: "wear", price: 29.90, desc: "Unterstützt die Durchblutung der Oberschenkel.", img: "https://placehold.co/600x600/333/e0ff00?text=SHORTS" },
    { id: 10, name: "Shaker Bottle", category: "gear", price: 9.90, desc: "Auslaufsicherer Shaker mit Sieb.", img: "https://placehold.co/600x600/333/e0ff00?text=SHAKER" }
];

// --- INITIALISIERUNG ---
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    
    // Nur ausführen, wenn wir auf der Shop-Seite sind (Element existiert)
    if (document.getElementById('product-grid')) {
        renderProducts(products);
        initFilters();
    }

    // Nur ausführen, wenn wir auf der Kontakt-Seite sind (Element existiert)
    if (document.getElementById('contactForm')) {
        initContactForm();
    }
});

// --- PRODUKTE ANZEIGEN ---
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Grid leeren

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Event Listener für Klick auf Produkt (öffnet Modal)
        card.onclick = () => openModal(product);

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <span class="product-cat">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} CHF</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- FILTER FUNKTION ---
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active Klasse setzen
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderProducts(filtered);
            }
        });
    });
}

// --- MODAL LOGIK ---
const modal = document.getElementById('product-modal');
let currentProduct = null;

function openModal(product) {
    if (!modal) return;
    currentProduct = product;

    // Daten ins Modal füllen
    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-category').innerText = product.category.toUpperCase();
    document.getElementById('modal-desc').innerText = product.desc;
    document.getElementById('modal-price').innerText = product.price.toFixed(2) + ' CHF';

    modal.style.display = 'flex';

    // Button Logik
    const btn = document.getElementById('add-to-cart-btn');
    // Alten Event Listener entfernen (um doppeltes Hinzufügen zu vermeiden)
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.onclick = () => {
        addToCart(currentProduct);
        modal.style.display = 'none';
    };
}

// Modal schließen beim Klick auf X oder Hintergrund
if (modal) {
    document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// --- WARENKORB (LOCAL STORAGE) ---
function initCart() {
    updateCartDisplay();
}

function addToCart(product) {
    // Alten Warenkorb laden oder leeres Array
    let cart = JSON.parse(localStorage.getItem('ironforge_cart')) || [];
    
    // Produkt hinzufügen
    cart.push(product);
    
    // Speichern
    localStorage.setItem('ironforge_cart', JSON.stringify(cart));
    
    alert(`${product.name} wurde zum Warenkorb hinzugefügt!`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('ironforge_cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// --- KONTAKTFORMULAR ---
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        
        alert(`Danke ${name}! Deine Anfrage zum Thema "${subject}" wurde gesendet.`);
        form.reset();
    });
}
