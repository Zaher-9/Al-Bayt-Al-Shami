// Translation Data
const translations = {
    ar: {
        // Navigation
        nav: {
            home: 'الرئيسية',
            menu: 'قائمة الطعام',
            about: 'من نحن',
            contact: 'اتصل بنا'
        },
        // Logo
        logo: 'البيت الشامي',
        // Hero Section
        hero: {
            title: 'أهلاً بكم في البيت الشامي',
            description: 'أطعمة ومشروبات شهية ومنعشة',
            browseMenu: 'تصفح القائمة'
        },
        // Menu Section
        menu: {
            title: 'قائمتنا',
            categories: {
                all: 'الكل',
                fatteh: 'الفتة',
                meals: 'وجبات رئيسية',
                appetizers: 'مقبلات',
                drinks: 'مشروبات'
            }
        },
        // About Section
        about: {
            title: 'من نحن',
            description1: 'نحن نقدم أشهى وألذ الأطباق التقليدية بلمسة عصرية. نستخدم أفضل المكونات الطازجة لنقدم لكم تجربة طعام لا تُنسى.',
            description2: 'فريقنا من الطهاة المهرة يعملون باجتهاد لتقديم أفضل ما لديهم من أطباق لذيذة تنال إعجابكم.'
        },
        // Contact Section
        contact: {
            title: 'اتصل بنا',
            address: 'عنوان المطعم، المدينة، الدولة',
            phone: '+961 XX XXX XXX',
            email: 'info@albaytalshami.com',
            form: {
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                phone: 'رقم الهاتف',
                message: 'رسالتك',
                submit: 'إرسال'
            },
            successMessage: 'شكراً لتواصلكم معنا! سنرد عليكم في أقرب وقت ممكن.'
        },
        // Footer
        footer: {
            logo: 'البيت الشامي',
            tagline: 'أطيب الأطعمة وألذ المشروبات',
            quickLinks: 'روابط سريعة',
            hours: 'ساعات العمل',
            hours1: 'السبت - الخميس: 10 صباحاً - 12 منتصف الليل',
            hours2: 'الجمعة: 12 ظهراً - 12 منتصف الليل',
            copyright: '© 2025 البيت الشامي. جميع الحقوق محفوظة.'
        },
        // AR Window
        ar: {
            backToMenu: 'العودة للقائمة',
            viewOnTable: 'عرض على الطاولة'
        },
        // Menu Items
        menuItems: [
            { id: 1, title: 'فتة بالدجاج', category: 'fatteh', price: 25.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'فتة شهية بالدجاج المشوي مع الأرز واللبن والصنوبر المحمص.', allergens: ['so2', 'milk', 'gluten'], calories: 380, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 2, title: 'فتة باللحمة', category: 'fatteh', price: 30.000, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'فتة لذيذة باللحمة المشوية مع الأرز واللبن والصنوبر المحمص.', allergens: ['so2', 'milk', 'gluten'], calories: 420, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 3, title: 'شيش طاووق', category: 'meals', price: 35.000, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'شيش طاووق مشوي على الفحم مع الأرز والسلطة.', allergens: ['so2', 'gluten'], calories: 450, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 4, title: 'كبة مقلية', category: 'appetizers', price: 20.000, img: 'https://picsum.photos/seed/kibbeh-fried/600/400.jpg', desc: 'كبة مقلية مقرمشة مع اللبن.', allergens: ['so2', 'nuts', 'gluten'], calories: 280, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 5, title: 'مشروب العرقسوس', category: 'drinks', price: 8.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'مشروب العرقسوس المنعش.', allergens: [], calories: 120, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 6, title: 'فتة بالحمص', category: 'fatteh', price: 22.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'فتة نباتية بالحمص مع الأرز واللبن والصنوبر المحمص.', allergens: ['so2', 'milk', 'gluten'], calories: 340, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 7, title: 'شاورما دجاج', category: 'meals', price: 28.000, img: 'https://picsum.photos/seed/shawarma-chicken/600/400.jpg', desc: 'شاورما دجاج مشوية مع الثوم والبهارات.', allergens: ['so2', 'gluten'], calories: 380, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 8, title: 'تبولة', category: 'appetizers', price: 15.000, img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'سلطة تبولة طازجة مع البقدونس والبرغل.', allergens: ['gluten'], calories: 180, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 9, title: 'ليمون بالنعناع', category: 'drinks', price: 7.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'عصير ليمون منعش مع أوراق النعناع.', allergens: [], calories: 90, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 10, title: 'حمص', category: 'appetizers', price: 18.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'حمص كريمي مع زيت الزيتون والكمون.', allergens: ['so2'], calories: 160, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 11, title: 'شاورما لحم', category: 'meals', price: 32.000, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'شاورما لحم مشوية مع الخضروات الطازجة.', allergens: ['so2', 'gluten'], calories: 420, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 12, title: 'عصير برتقال', category: 'drinks', price: 6.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'عصير برتقال طبيعي 100%.', allergens: [], calories: 110, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            
        ],
        currency: 'ريال'
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            menu: 'Menu',
            about: 'About Us',
            contact: 'Contact'
        },
        // Logo
        logo: 'Al Bayt Al Shami',
        // Hero Section
        hero: {
            title: 'Welcome to Al Bayt Al Shami',
            description: 'Delicious and refreshing foods and drinks',
            browseMenu: 'Browse Menu'
        },
        // Menu Section
        menu: {
            title: 'Our Menu',
            categories: {
                all: 'All',
                fatteh: 'Fatteh',
                meals: 'Main Meals',
                appetizers: 'Appetizers',
                drinks: 'Drinks'
            }
        },
        // About Section
        about: {
            title: 'About Us',
            description1: 'We offer the most delicious and flavorful traditional dishes with a modern touch. We use the finest fresh ingredients to provide you with an unforgettable dining experience.',
            description2: 'Our team of skilled chefs works diligently to present their best delicious dishes that will win your admiration.'
        },
        // Contact Section
        contact: {
            title: 'Contact Us',
            address: 'Restaurant Address, City, Country',
            phone: '+961 XX XXX XXX',
            email: 'info@albaytalshami.com',
            form: {
                name: 'Full Name',
                email: 'Email Address',
                phone: 'Phone Number',
                message: 'Your Message',
                submit: 'Send'
            },
            successMessage: 'Thank you for contacting us! We will get back to you as soon as possible.'
        },
        // Footer
        footer: {
            logo: 'Al Bayt Al Shami',
            tagline: 'The Best Food and Tastiest Drinks',
            quickLinks: 'Quick Links',
            hours: 'Working Hours',
            hours1: 'Saturday - Thursday: 10 AM - 12 Midnight',
            hours2: 'Friday: 12 PM - 12 Midnight',
            copyright: ' 2025 Al Bayt Al Shami Restaurant. All rights reserved.'
        },
        // AR Window
        ar: {
            backToMenu: 'Back to Menu',
            viewOnTable: 'View on Table'
        },
        // Menu Items
        menuItems: [
            { id: 1, title: 'Chicken Fatteh', category: 'fatteh', price: 25.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Delicious fatteh with grilled chicken, rice, yogurt, and toasted pine nuts.', allergens: ['so2', 'milk', 'gluten'], calories: 380, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 2, title: 'Meat Fatteh', category: 'fatteh', price: 30.000, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Tasty fatteh with grilled meat, rice, yogurt, and toasted pine nuts.', allergens: ['so2', 'milk', 'gluten'], calories: 420, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 3, title: 'Shish Taouk', category: 'meals', price: 35.000, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Charcoal-grilled shish taouk with rice and salad.', allergens: ['so2', 'gluten'], calories: 450, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 4, title: 'Fried Kibbeh', category: 'appetizers', price: 20.000, img: 'https://picsum.photos/seed/kibbeh-fried/600/400.jpg', desc: 'Crispy fried kibbeh with yogurt.', allergens: ['so2', 'nuts', 'gluten'], calories: 280, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 5, title: 'Licorice Drink', category: 'drinks', price: 8.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Refreshing licorice drink.', allergens: [], calories: 120, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 6, title: 'Chickpea Fatteh', category: 'fatteh', price: 22.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Vegetarian fatteh with chickpeas, rice, yogurt, and toasted pine nuts.', allergens: ['so2', 'milk', 'gluten'], calories: 340, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 7, title: 'Chicken Shawarma', category: 'meals', price: 28.000, img: 'https://picsum.photos/seed/shawarma-chicken/600/400.jpg', desc: 'Grilled chicken shawarma with garlic and spices.', allergens: ['so2', 'gluten'], calories: 380, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 8, title: 'Tabbouleh', category: 'appetizers', price: 15.000, img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Fresh tabbouleh salad with parsley and bulgur.', allergens: ['gluten'], calories: 180, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 9, title: 'Lemon Mint', category: 'drinks', price: 7.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Refreshing lemon juice with mint leaves.', allergens: [], calories: 90, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 10, title: 'Hummus', category: 'appetizers', price: 18.000, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Creamy hummus with olive oil and cumin.', allergens: ['so2'], calories: 160, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 11, title: 'Meat Shawarma', category: 'meals', price: 32.000, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Grilled meat shawarma with fresh vegetables.', allergens: ['so2', 'gluten'], calories: 420, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            { id: 12, title: 'Orange Juice', category: 'drinks', price: 6.000, img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: '100% natural orange juice.', allergens: [], calories: 110, model3d: './glass_of_juice.glb', model3dIos: './glass_of_juice.usdz' },
            
        ],
        currency: 'SAR'
    }
};

// Current language state
let currentLang = 'ar';

// Translation Function
function translatePage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update document title
    document.title = lang === 'ar' ? 'البيت الشامي | Al Bayt Al Shami' : 'Al Bayt Al Shami Restaurant | البيت الشامي';
    
    // Update navigation
    document.querySelector('.logo h1').textContent = t.logo;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.menu;
    navLinks[2].textContent = t.nav.about;
    navLinks[3].textContent = t.nav.contact;
    
    // Update language toggle button
    document.getElementById('langToggle').textContent = lang === 'ar' ? 'EN' : 'AR';
    
    // Update hero section
    document.querySelector('.hero h1').textContent = t.hero.title;
    document.querySelector('.hero p').textContent = t.hero.description;
    document.querySelector('.hero .btn').textContent = t.hero.browseMenu;
    
    // Update menu section
    document.querySelector('.menu-section .section-title').textContent = t.menu.title;
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns[0].textContent = t.menu.categories.all;
    categoryBtns[1].textContent = t.menu.categories.fatteh;
    categoryBtns[2].textContent = t.menu.categories.meals;
    categoryBtns[3].textContent = t.menu.categories.appetizers;
    categoryBtns[4].textContent = t.menu.categories.drinks;
    
    // Update about section
    document.querySelector('.about-section .section-title').textContent = t.about.title;
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = t.about.description1;
    aboutTexts[1].textContent = t.about.description2;
    
    // Update contact section
    document.querySelector('.contact-section .section-title').textContent = t.contact.title;
    const contactInfo = document.querySelectorAll('.info-item p');
    contactInfo[0].textContent = t.contact.address;
    contactInfo[1].textContent = t.contact.phone;
    contactInfo[2].textContent = t.contact.email;
    
    
    // Update footer
    document.querySelector('.footer-logo h3').textContent = t.footer.logo;
    document.querySelector('.footer-logo p').textContent = t.footer.tagline;
    document.querySelector('.footer-links h4').textContent = t.footer.quickLinks;
    document.querySelector('.footer-hours h4').textContent = t.footer.hours;
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks[0].textContent = t.nav.home;
    footerLinks[1].textContent = t.nav.menu;
    footerLinks[2].textContent = t.nav.about;
    footerLinks[3].textContent = t.nav.contact;
    
    const footerHours = document.querySelectorAll('.footer-hours p');
    footerHours[0].textContent = t.footer.hours1;
    footerHours[1].textContent = t.footer.hours2;
    
    document.querySelector('.footer-bottom p').textContent = t.footer.copyright;
    
    // Update menu items
    displayMenuItems(t.menuItems);
    
    // Re-assign data IDs and re-attach 3D viewer event listeners after menu items are recreated
    setTimeout(() => {
        assignDataIds();
        if (window.modelViewer3D) {
            window.modelViewer3D.addMenuItemClickListeners();
        }
        updateARWindowTexts();
    }, 100);
    
    // Store language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Language toggle functionality
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    translatePage(newLang);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle active class on hamburger and nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate nav links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navLinksItems.forEach(item => {
            item.style.animation = '';
        });
    });
});

// Display menu items
const menuContainer = document.querySelector('.menu-items');
const filterBtns = document.querySelectorAll('.category-btn');

// Load items
window.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    translatePage(savedLang);
    
    // Display menu items
    displayMenuItems(translations[currentLang].menuItems);
});

// Filter items
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        const currentMenuItems = translations[currentLang].menuItems;
        const menuCategory = currentMenuItems.filter(menuItem => {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        
        if (category === 'all') {
            displayMenuItems(currentMenuItems);
        } else {
            displayMenuItems(menuCategory);
        }
        
        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
    });
});

function displayMenuItems(menuItems) {
    const t = translations[currentLang];
    
    let displayMenu = menuItems.map(item => {
        // Generate allergen icons
        const allergenIcons = item.allergens.map(allergen => {
            const iconMap = {
                'so2': '<img src="allergens/Icons without allergens - colour_So2.png" alt="SO2" />',
                'milk': '<img src="allergens/Icons without allergens - colour_milk.png" alt="Milk" />',
                'gluten': '<img src="allergens/Icons without allergens - colour_Gluten.png" alt="Gluten" />',
                'nuts': '<img src="allergens/Icons without allergens - colour_Treenuts.png" alt="Nuts" />',
                'egg': '<img src="allergens/Icons without allergens - colour_egg.png" alt="Egg" />'
            };
            const tooltipMap = {
                'ar': {
                    'so2': 'مادة حافظة SO2',
                    'milk': 'الحليب ومنتجات الألبان',
                    'gluten': 'جلوتين',
                    'nuts': 'مكسرات',
                    'egg': 'بيض'
                },
                'en': {
                    'so2': 'SO2 preservative',
                    'milk': 'Milk and Dairy Products',
                    'gluten': 'Gluten',
                    'nuts': 'Nuts',
                    'egg': 'Egg'
                }
            };
            return `<div class="allergen-icon" data-allergen="${allergen}" data-allergen-tooltip="${tooltipMap[currentLang][allergen]}">${iconMap[allergen] || ''}</div>`;
        }).join('');
        
        return `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.img}" alt="${item.title}" class="menu-item-img">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.title}</h3>
                        <span class="menu-item-price">
                            ${item.price}
                            <img src="riyal.png" alt="ريال" class="currency-symbol">
                        </span>
                    </div>
                    <p class="menu-item-description">${item.desc}</p>
                    <div class="menu-item-footer">
                        <div class="calories-info">
                            <i class="fas fa-fire"></i>
                            <span>${item.calories} ${currentLang === 'ar' ? 'سعرة حرارية' : 'calories'}</span>
                        </div>
                        <div class="allergen-icons">
                            ${allergenIcons}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    displayMenu = displayMenu.join('');
    menuContainer.innerHTML = displayMenu;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});


// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .about-content, .contact-content > div');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.menu-item, .about-content, .contact-content > div');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger animation on load
    setTimeout(animateOnScroll, 500);
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Add animation for menu items when they come into view
const menuItemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-item').forEach(item => {
    menuItemObserver.observe(item);
});

// Update AR window texts based on current language
function updateARWindowTexts() {
    const t = translations[currentLang];
    
    // Update back button text and icon
    const backButton = document.getElementById('backToMenu');
    if (backButton) {
        backButton.innerHTML = currentLang === 'ar' ? 
            '<i class="fas fa-arrow-right"></i> ' + t.ar.backToMenu :
            '<i class="fas fa-arrow-left"></i> ' + t.ar.backToMenu;
    }
    
    // Update AR button text
    const arButton = document.getElementById('ar-button');
    if (arButton) {
        arButton.innerHTML = '<i class="fas fa-cube"></i> ' + t.ar.viewOnTable;
    }
}
