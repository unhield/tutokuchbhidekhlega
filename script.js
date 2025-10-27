// UNHIELD Store - Complete JavaScript with Google Analytics Integration
// Real product data and advanced carousel functionality with comprehensive error handling

console.log('🏰 UNHIELD Store - Script loading started');
console.log('Current URL:', window.location.href);
console.log('User Agent:', navigator.userAgent);

// Google Analytics Event Tracking Functions
function trackEvent(eventName, parameters = {}) {
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'ecommerce',
                event_label: parameters.product_name || '',
                value: parameters.price || 0,
                currency: 'INR',
                ...parameters
            });
            console.log('📊 Analytics event tracked:', eventName, parameters);
        } else {
            console.warn('📊 Google Analytics not available');
        }
    } catch (error) {
        console.error('📊 Analytics tracking error:', error);
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

// Real Product Data with all affiliate links and your exact product information
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

console.log('📦 Product data loaded:', products.length, 'products');

// Carousel Management Class
class ProductCarousel {
    constructor(productId) {
        this.productId = productId;
        this.currentIndex = 0;
        this.product = products.find(p => p.id === productId);
        
        if (!this.product) {
            console.error('❌ Product not found for ID:', productId);
            return;
        }
        
        this.images = this.product.images || [];
        
        if (this.images.length === 0) {
            console.warn('⚠️ No images found for product:', productId);
            return;
        }
        
        console.log('🎠 Initializing carousel for product:', productId, 'with', this.images.length, 'images');
        this.init();
    }

    init() {
        try {
            this.container = document.querySelector(`[data-product-id="${this.productId}"] .carousel-images`);
            this.dots = document.querySelectorAll(`[data-product-id="${this.productId}"] .carousel-dot`);
            this.prevBtn = document.querySelector(`[data-product-id="${this.productId}"] .carousel-prev`);
            this.nextBtn = document.querySelector(`[data-product-id="${this.productId}"] .carousel-next`);

            if (!this.container) {
                console.error('❌ Carousel container not found for product:', this.productId);
                return;
            }

            // Add event listeners with error handling
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.prev();
                });
                console.log('✅ Previous button initialized for product:', this.productId);
            }

            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.next();
                });
                console.log('✅ Next button initialized for product:', this.productId);
            }

            // Initialize dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.goTo(index);
                });
            });

            // Touch/Swipe support
            this.addTouchSupport();
            
            // Keyboard support
            this.addKeyboardSupport();
            
            console.log('✅ Carousel fully initialized for product:', this.productId);
        } catch (error) {
            console.error('❌ Error initializing carousel:', error);
        }
    }

    prev() {
        try {
            this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
            this.updateCarousel();
            trackImageInteraction(this.product, this.currentIndex);
            console.log('◀️ Previous image:', this.currentIndex);
        } catch (error) {
            console.error('❌ Error in prev():', error);
        }
    }

    next() {
        try {
            this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
            this.updateCarousel();
            trackImageInteraction(this.product, this.currentIndex);
            console.log('▶️ Next image:', this.currentIndex);
        } catch (error) {
            console.error('❌ Error in next():', error);
        }
    }

    goTo(index) {
        try {
            if (index >= 0 && index < this.images.length) {
                this.currentIndex = index;
                this.updateCarousel();
                trackImageInteraction(this.product, this.currentIndex);
                console.log('🎯 Go to image:', this.currentIndex);
            }
        } catch (error) {
            console.error('❌ Error in goTo():', error);
        }
    }

    updateCarousel() {
        try {
            if (this.container) {
                this.container.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            }

            this.dots.forEach((dot, index) => {
                if (dot) {
                    dot.classList.toggle('active', index === this.currentIndex);
                }
            });
        } catch (error) {
            console.error('❌ Error updating carousel:', error);
        }
    }

    addTouchSupport() {
        try {
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;

            const carousel = document.querySelector(`[data-product-id="${this.productId}"] .image-carousel`);
            if (!carousel) return;

            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, { passive: true });

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
            }, { passive: true });

            console.log('✅ Touch support added for product:', this.productId);
        } catch (error) {
            console.error('❌ Error adding touch support:', error);
        }
    }

    addKeyboardSupport() {
        try {
            const carousel = document.querySelector(`[data-product-id="${this.productId}"] .image-carousel`);
            if (!carousel) return;

            carousel.setAttribute('tabindex', '0');
            carousel.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.prev();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.next();
                        break;
                }
            });

            console.log('✅ Keyboard support added for product:', this.productId);
        } catch (error) {
            console.error('❌ Error adding keyboard support:', error);
        }
    }
}

// Format currency for Indian market
function formatCurrency(amount) {
    try {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    } catch (error) {
        console.error('❌ Error formatting currency:', error);
        return `₹${amount}`;
    }
}

// Generate star rating
function generateStars(rating) {
    try {
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
    } catch (error) {
        console.error('❌ Error generating stars:', error);
        return '★★★★★';
    }
}

// Create product card HTML
function createProductCard(product) {
    try {
        const discountBadge = product.discount > 0 
            ? `<span class="discount-badge">${product.discount}% OFF</span>` 
            : '';

        const originalPriceDisplay = product.originalPrice > product.price 
            ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` 
            : '';

        const imageCarousel = product.images && product.images.length > 0 
            ? `
                <div class="carousel-images">
                    ${product.images.map((image, index) => 
                        `<img src="${image}" alt="${product.name} - Image ${index + 1}" class="carousel-image" loading="lazy" onerror="this.style.display='none'">`
                    ).join('')}
                </div>
                
                ${product.images.length > 1 ? `
                    <button class="carousel-nav carousel-prev" aria-label="Previous image">‹</button>
                    <button class="carousel-nav carousel-next" aria-label="Next image">›</button>
                    
                    <div class="carousel-dots">
                        ${product.images.map((_, index) => 
                            `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="View image ${index + 1}"></span>`
                        ).join('')}
                    </div>
                ` : ''}
            `
            : `<div class="no-image">No image available</div>`;

        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="image-carousel">
                    ${imageCarousel}
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
    } catch (error) {
        console.error('❌ Error creating product card:', error);
        return `<div class="product-card error">Error loading product</div>`;
    }
}

// Initialize carousels for all products
function initializeCarousels() {
    try {
        console.log('🎠 Initializing carousels for all products...');
        products.forEach(product => {
            if (product.images && product.images.length > 1) {
                new ProductCarousel(product.id);
            }
        });
        console.log('✅ All carousels initialized');
    } catch (error) {
        console.error('❌ Error initializing carousels:', error);
    }
}

// Add click tracking to buy buttons
function addBuyButtonTracking() {
    try {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-btn')) {
                const productId = parseInt(e.target.dataset.productId);
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    trackPurchaseIntent(product);
                    console.log('🛒 Purchase intent tracked for product:', productId);
                    
                    // Small delay to ensure tracking fires before redirect
                    setTimeout(() => {
                        window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
                    }, 100);
                    
                    e.preventDefault();
                    return false;
                } else {
                    console.error('❌ Product not found for purchase tracking:', productId);
                }
            }
        });
        console.log('✅ Buy button tracking added');
    } catch (error) {
        console.error('❌ Error adding buy button tracking:', error);
    }
}

// Add product view tracking using Intersection Observer
function trackProductViews() {
    try {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const productId = parseInt(entry.target.dataset.productId);
                        const product = products.find(p => p.id === productId);
                        
                        if (product) {
                            trackProductView(product);
                            observer.unobserve(entry.target); // Only track once per session
                            console.log('👀 Product view tracked for:', productId);
                        }
                    }
                });
            }, { threshold: 0.5 });

            // Observe all product cards
            setTimeout(() => {
                document.querySelectorAll('.product-card').forEach(card => {
                    observer.observe(card);
                });
            }, 1000);
            
            console.log('✅ Product view tracking initialized');
        } else {
            console.warn('⚠️ IntersectionObserver not supported');
        }
    } catch (error) {
        console.error('❌ Error setting up product view tracking:', error);
    }
}

// Error handling for images
function handleImageErrors() {
    try {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG' && e.target.classList.contains('carousel-image')) {
                e.target.style.display = 'none';
                console.warn('⚠️ Failed to load image:', e.target.src);
                
                // Track image loading errors
                trackEvent('image_error', {
                    event_category: 'error',
                    event_label: 'image_load_failed',
                    custom_parameter_1: e.target.src
                });
            }
        }, true);
        console.log('✅ Image error handling initialized');
    } catch (error) {
        console.error('❌ Error setting up image error handling:', error);
    }
}

// Main initialization function
function initializeStore() {
    console.log('🏪 Initializing UNHIELD store...');
    
    const productsGrid = document.getElementById('productsGrid');
    const loading = document.getElementById('loading');
    
    if (!productsGrid) {
        console.error('❌ Products grid container not found');
        return;
    }

    try {
        // Show loading state
        if (loading) {
            loading.style.display = 'flex';
        }

        console.log('📦 Generating product cards for', products.length, 'products');
        
        // Generate product cards
        const productCards = products.map(product => {
            console.log('🏷️ Creating card for product:', product.id, product.name.substring(0, 50) + '...');
            return createProductCard(product);
        });
        
        productsGrid.innerHTML = productCards.join('');
        
        console.log('✅ Product cards generated successfully');
        
        // Hide loading, show products
        if (loading) {
            loading.style.display = 'none';
        }
        productsGrid.style.display = 'grid';
        
        console.log('✅ Products grid displayed');
        
        // Initialize features with delay to ensure DOM is ready
        setTimeout(() => {
            console.log('🔧 Initializing advanced features...');
            
            initializeCarousels();
            addBuyButtonTracking();
            trackProductViews();
            handleImageErrors();
            
            // Track successful page load
            trackEvent('page_view', {
                event_category: 'engagement',
                event_label: 'store_loaded',
                custom_parameter_1: products.length
            });
            
            console.log('🎉 UNHIELD store fully initialized!');
        }, 500);
        
    } catch (error) {
        console.error('❌ Error initializing store:', error);
        
        if (loading) {
            loading.innerHTML = `
                <div style="text-align: center;">
                    <h3>❌ Error Loading Products</h3>
                    <p>Sorry, there was an error loading the product catalog.</p>
                    <button onclick="location.reload()" style="margin-top: 16px; padding: 8px 16px; background: #1e3a8a; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        🔄 Reload Page
                    </button>
                </div>
            `;
        }
        
        // Track initialization errors
        trackEvent('initialization_error', {
            event_category: 'error',
            event_label: 'store_init_failed',
            custom_parameter_1: error.message
        });
    }
}

// Performance monitoring
function trackPerformance() {
    try {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
                        console.log('⏱️ Page load time:', loadTime + 'ms');
                        
                        trackEvent('timing_complete', {
                            event_category: 'performance',
                            event_label: 'page_load_time',
                            value: loadTime
                        });
                    }
                }, 1000);
            });
        }
    } catch (error) {
        console.error('❌ Error tracking performance:', error);
    }
}

// Service Worker registration for PWA capabilities (optional)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ SW registered:', registration);
                })
                .catch(registrationError => {
                    console.log('⚠️ SW registration failed:', registrationError);
                });
        });
    }
}

// Initialize when DOM is ready
console.log('📋 DOM ready state:', document.readyState);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🚀 DOM Content Loaded - Initializing store');
        initializeStore();
    });
} else {
    console.log('🚀 DOM already loaded - Initializing store immediately');
    initializeStore();
}

// Track performance
trackPerformance();

// Register service worker (optional)
registerServiceWorker();

// Global error handling
window.addEventListener('error', (e) => {
    console.error('🌍 Global error:', e.error);
    
    trackEvent('javascript_error', {
        event_category: 'error',
        event_label: 'global_error',
        custom_parameter_1: e.message,
        custom_parameter_2: e.filename,
        custom_parameter_3: e.lineno
    });
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('🌍 Unhandled promise rejection:', e.reason);
    
    trackEvent('promise_rejection', {
        event_category: 'error',
        event_label: 'unhandled_promise',
        custom_parameter_1: e.reason
    });
});

console.log('✅ UNHIELD Store script fully loaded and ready!');
console.log('🏰 Welcome to UNHIELD - Having Adult Money? Check These Out!');