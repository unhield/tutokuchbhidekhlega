// UNHIELD Store - Complete JavaScript with Google Analytics Integration
// Real product data and advanced carousel functionality

// Google Analytics Event Tracking Functions
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            event_category: 'ecommerce',
            event_label: parameters.product_name || '',
            value: parameters.price || 0,
            currency: 'INR',
            ...parameters
        });
    }
}

function trackProductView(product) {
    trackEvent('view_item', {
        event_category: 'ecommerce',
        event_label: 'product_view',
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        currency: 'INR'
    });
}

function trackProductClick(product) {
    trackEvent('select_content', {
        event_category: 'ecommerce',
        event_label: 'product_click',
        content_type: 'product',
        item_id: product.id,
        item_name: product.name,
        price: product.price
    });
}

function trackPurchaseIntent(product) {
    trackEvent('begin_checkout', {
        event_category: 'ecommerce',
        event_label: 'purchase_intent',
        item_id: product.id,
        item_name: product.name,
        value: product.price,
        currency: 'INR'
    });
}

function trackImageInteraction(product, imageIndex) {
    trackEvent('image_interaction', {
        event_category: 'engagement',
        event_label: 'carousel_navigation',
        item_id: product.id,
        custom_parameter_1: imageIndex
    });
}

// Real Product Data with all affiliate links
const products = [
    {
        id: 1,
        name: "AUGEN 3D Skull Drinking Mug GOT Winter is Coming Double Wall Stainless Steel Resin Gothic Helmet Coffee Mugs Skull Bone Knight King Tankard Dragon Wolf Cup (10015D)",
        price: 1199,
        originalPrice: 2499,
        description: "Experience the power of Westeros with this iconic 3D skull drinking mug inspired by Game of Thrones. Features double-wall stainless steel construction with intricate resin detailing.",
        features: [
            "3D Skull Gothic Design",
            "Double Wall Stainless Steel",
            "Game of Thrones Inspired",
            "Resin Gothic Helmet Style",
            "Knight King Tankard Design"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_1_6.jpg"
        ],
        affiliateLink: "https://amzn.to/4ob0EtB",
        category: "Gothic Drinkware",
        discount: 52,
        rating: 4.3,
        reviews: 287
    },
    {
        id: 2,
        name: "AUGEN 3D Skull Drinking Mug Double Wall Stainless Steel Resin Gothic Helmet Coffee Mugs Skull Bone Knight King Tankard Dragon Wolf Cup (3476E72)",
        price: 799,
        originalPrice: 1599,
        description: "Unleash your inner warrior with this stunning 3D skull mug featuring double-wall stainless steel construction and detailed Gothic helmet design.",
        features: [
            "3D Skull Bone Design",
            "Double Wall Construction",
            "Gothic Helmet Style",
            "Dragon Wolf Cup Design",
            "Premium Resin Detailing"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_2_6.jpg"
        ],
        affiliateLink: "https://amzn.to/3LeqbmN",
        category: "Gothic Drinkware",
        discount: 50,
        rating: 4.2,
        reviews: 156
    },
    {
        id: 3,
        name: "READAEER Small Size Human Skull Resin Statue Head Sculptures Skull Collectible Figurines (Black & Golden)",
        price: 2443,
        originalPrice: 5700,
        description: "Add a touch of mystery to your space with this intricately crafted human skull resin statue. Perfect for collectors and Gothic decor enthusiasts.",
        features: [
            "Premium Resin Construction",
            "Black & Golden Finish",
            "Collectible Figurine",
            "Detailed Skull Sculpture",
            "Perfect for Gothic Decor"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_3_6.jpg"
        ],
        affiliateLink: "https://amzn.to/431nJGx",
        category: "Gothic Collectibles",
        discount: 57,
        rating: 4.5,
        reviews: 89
    },
    {
        id: 4,
        name: "Pure Source India Oil Burner for Home, Office, with 1 Tea Light Candle, Made by Porcelain (Black)",
        price: 280,
        originalPrice: 599,
        description: "Create a mystical ambiance with this elegant porcelain oil burner. Perfect for aromatherapy and creating a Gothic atmosphere in your space.",
        features: [
            "Premium Porcelain Material",
            "Includes Tea Light Candle",
            "Perfect for Aromatherapy",
            "Elegant Black Design",
            "Home & Office Use"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_4_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_4_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_4_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_4_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_4_5.jpg"
        ],
        affiliateLink: "https://amzn.to/43xxaxv",
        category: "Gothic Accessories",
        discount: 53,
        rating: 4.1,
        reviews: 234
    },
    {
        id: 5,
        name: "BonZeal Grenade Shaped Coffee Mug with Lid & Handle | 280 ml Black Ceramic Mug for Tea, Coffee, Milk | Unique Gift for Army, Men, Boys, Husband, Brother, Office & Home Use",
        price: 499,
        originalPrice: 1399,
        description: "Make a bold statement with this unique grenade-shaped coffee mug. Perfect for military enthusiasts and those who appreciate edgy drinkware design.",
        features: [
            "Unique Grenade Shape",
            "280ml Capacity",
            "Black Ceramic Material",
            "Includes Lid & Handle",
            "Perfect Military Gift"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_5_6.jpg"
        ],
        affiliateLink: "https://amzn.to/4ob1hTZ",
        category: "Tactical Drinkware",
        discount: 64,
        rating: 4.4,
        reviews: 445
    },
    {
        id: 6,
        name: "Emerge Medieval Dragon Tankard with Jeweled Handle, Stainless Steel and Pewter Design, Gothic Style Beer Mug",
        price: 1299,
        originalPrice: 2599,
        description: "Channel medieval royalty with this majestic dragon tankard featuring jeweled handle and pewter design. Perfect for ceremonial drinks and Gothic collections.",
        features: [
            "Medieval Dragon Design",
            "Jeweled Handle",
            "Stainless Steel & Pewter",
            "Gothic Style Beer Mug",
            "Premium Craftsmanship"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_6_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_6_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_6_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_6_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_6_5.jpg"
        ],
        affiliateLink: "https://amzn.to/4qv4peQ",
        category: "Medieval Drinkware",
        discount: 50,
        rating: 4.6,
        reviews: 178
    },
    {
        id: 7,
        name: "alikiki Medieval Flame Dragon Wine Goblet - Fantasy Dungeons and Dragons Wine Chalice Goblet- 7oz Stainless Steel Cup Drinking Vessel - Ideal Novelty Gothic Father Day Gift Party Idea",
        price: 4808,
        originalPrice: 5769,
        description: "Elevate your drinking experience with this stunning flame dragon wine goblet. Perfect for D&D enthusiasts and medieval fantasy lovers.",
        features: [
            "Medieval Flame Dragon Design",
            "7oz Stainless Steel Cup",
            "D&D Fantasy Theme",
            "Gothic Wine Chalice",
            "Perfect Gift Idea"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_7_6.jpg"
        ],
        affiliateLink: "https://amzn.to/43sICdO",
        category: "Fantasy Goblets",
        discount: 17,
        rating: 4.7,
        reviews: 92
    },
    {
        id: 8,
        name: "alikiki Medieval Fantasy Blue Dragon Goblet - Dungeons and Dragons Gifts Party Decoration D&D Game Chalice Cup of Thrones Merchandise 7oz Stainless Steel Gothic Drinking Cups",
        price: 9044,
        originalPrice: 9044,
        description: "Immerse yourself in fantasy with this magnificent blue dragon goblet. Essential for any D&D collection and medieval themed parties.",
        features: [
            "Blue Dragon Fantasy Design",
            "7oz Stainless Steel",
            "D&D Game Merchandise",
            "Gothic Drinking Cup",
            "Party Decoration Piece"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_8_6.jpg"
        ],
        affiliateLink: "https://amzn.to/3LegK6S",
        category: "Fantasy Goblets",
        discount: 0,
        rating: 4.8,
        reviews: 67
    },
    {
        id: 9,
        name: "Medieval Blue Dragon Wine Goblet - Large Dungeons and Dragons Fantasy Chalice Cup - 14oz Stainless Steel Insert Beer Coffee Drinking Vessel - Ideal Novelty Gothic Gift Party Idea Celtic",
        price: 6368,
        originalPrice: 9099,
        description: "Command attention with this large blue dragon wine goblet featuring 14oz capacity. Perfect for those who appreciate Celtic and medieval aesthetics.",
        features: [
            "Large 14oz Capacity",
            "Blue Dragon Design",
            "Stainless Steel Insert",
            "Celtic Gothic Style",
            "Dungeons & Dragons Theme"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_9_6.jpg"
        ],
        affiliateLink: "https://amzn.to/3L7aHRG",
        category: "Fantasy Goblets",
        discount: 30,
        rating: 4.5,
        reviews: 134
    },
    {
        id: 10,
        name: "Stainless Steel The Eye of The Dragon Wine Goblet Chalice,Dungeons and Dragons Medieval DragonWine Cups 7oz.Men's Gift (Yellow Eyes)",
        price: 5583,
        originalPrice: 11625,
        description: "Unleash the power of the dragon with this mesmerizing eye of the dragon wine goblet. Features striking yellow eyes and premium stainless steel construction.",
        features: [
            "Eye of Dragon Design",
            "Yellow Eyes Detail",
            "7oz Wine Chalice",
            "Medieval Dragon Theme",
            "Premium Men's Gift"
        ],
        images: [
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_1.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_2.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_3.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_4.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_5.jpg",
            "https://raw.githubusercontent.com/unhield/tutokuchbhidekhlega/main/Product_10_6.jpg"
        ],
        affiliateLink: "https://amzn.to/4qM7R55",
        category: "Fantasy Goblets",
        discount: 52,
        rating: 4.9,
        reviews: 45
    }
];

// Carousel Management
class ProductCarousel {
    constructor(productId) {
        this.productId = productId;
        this.currentIndex = 0;
        this.product = products.find(p => p.id === productId);
        this.images = this.product.images;
        this.init();
    }

    init() {
        this.container = document.querySelector(`[data-product-id="${this.productId}"] .carousel-images`);
        this.dots = document.querySelectorAll(`[data-product-id="${this.productId}"] .carousel-dot`);
        this.prevBtn = document.querySelector(`[data-product-id="${this.productId}"] .carousel-prev`);
        this.nextBtn = document.querySelector(`[data-product-id="${this.productId}"] .carousel-next`);

        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        // Touch/Swipe support
        this.addTouchSupport();
        
        // Auto-play (optional)
        // this.startAutoPlay();
    }

    prev() {
        this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
        this.updateCarousel();
        trackImageInteraction(this.product, this.currentIndex);
    }

    next() {
        this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
        this.updateCarousel();
        trackImageInteraction(this.product, this.currentIndex);
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
        trackImageInteraction(this.product, this.currentIndex);
    }

    updateCarousel() {
        if (this.container) {
            this.container.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        const carousel = document.querySelector(`[data-product-id="${this.productId}"] .image-carousel`);
        if (!carousel) return;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            const deltaX = startX - endX;
            const deltaY = Math.abs(startY - endY);

            // Only process horizontal swipes
            if (Math.abs(deltaX) > 50 && deltaY < 100) {
                if (deltaX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }

    startAutoPlay(interval = 5000) {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, interval);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Format currency for Indian market
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '☆';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }

    return stars;
}

// Create product card HTML
function createProductCard(product) {
    const discountBadge = product.discount > 0 
        ? `<span class="discount-badge">${product.discount}% OFF</span>` 
        : '';

    const originalPriceDisplay = product.originalPrice > product.price 
        ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` 
        : '';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="image-carousel">
                <div class="carousel-images">
                    ${product.images.map(image => 
                        `<img src="${image}" alt="${product.name}" class="carousel-image" loading="lazy">`
                    ).join('')}
                </div>
                
                ${product.images.length > 1 ? `
                    <button class="carousel-nav carousel-prev" aria-label="Previous image">‹</button>
                    <button class="carousel-nav carousel-next" aria-label="Next image">›</button>
                    
                    <div class="carousel-dots">
                        ${product.images.map((_, index) => 
                            `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
                        ).join('')}
                    </div>
                ` : ''}
            </div>
            
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="price-container">
                    <span class="current-price">${formatCurrency(product.price)}</span>
                    ${originalPriceDisplay}
                    ${discountBadge}
                </div>
                
                <div class="rating-container">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-text">${product.rating} (${product.reviews.toLocaleString('en-IN')} reviews)</span>
                </div>
                
                <ul class="features-list">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <a href="${product.affiliateLink}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="buy-btn" 
                   data-product-id="${product.id}"
                   aria-label="Buy ${product.name}">
                    Buy Now - ${formatCurrency(product.price)}
                </a>
            </div>
        </div>
    `;
}

// Initialize carousels for all products
function initializeCarousels() {
    products.forEach(product => {
        if (product.images.length > 1) {
            new ProductCarousel(product.id);
        }
    });
}

// Add click tracking to buy buttons
function addBuyButtonTracking() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                trackPurchaseIntent(product);
                
                // Small delay to ensure tracking fires before redirect
                setTimeout(() => {
                    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
                }, 100);
                
                e.preventDefault();
                return false;
            }
        }
    });
}

// Add product view tracking
function trackProductViews() {
    // Use Intersection Observer to track when products come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const productId = parseInt(entry.target.dataset.productId);
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    trackProductView(product);
                    observer.unobserve(entry.target); // Only track once per session
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe all product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Error handling for images
function handleImageErrors() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('carousel-image')) {
            e.target.style.display = 'none';
            console.warn('Failed to load image:', e.target.src);
        }
    }, true);
}

// Main initialization function
function initializeStore() {
    const productsGrid = document.getElementById('productsGrid');
    const loading = document.getElementById('loading');
    
    if (!productsGrid) {
        console.error('Products grid container not found');
        return;
    }

    try {
        // Generate product cards
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
        
        // Hide loading, show products
        if (loading) loading.style.display = 'none';
        productsGrid.style.display = 'grid';
        
        // Initialize features
        setTimeout(() => {
            initializeCarousels();
            addBuyButtonTracking();
            trackProductViews();
            handleImageErrors();
            
            // Track page view
            trackEvent('page_view', {
                event_category: 'engagement',
                event_label: 'store_loaded',
                custom_parameter_1: products.length
            });
        }, 100);
        
    } catch (error) {
        console.error('Error initializing store:', error);
        if (loading) {
            loading.innerHTML = '<p>Error loading products. Please refresh the page.</p>';
        }
    }
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    trackEvent('timing_complete', {
                        event_category: 'performance',
                        event_label: 'page_load_time',
                        value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
                    });
                }
            }, 0);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeStore);
} else {
    initializeStore();
}

// Track performance
trackPerformance();

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}