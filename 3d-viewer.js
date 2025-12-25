// 3D Model Viewer JavaScript
class ModelViewer3D {
    constructor() {
        this.modal = document.getElementById('model-viewer-modal');
        this.viewer = document.getElementById('food-3d-viewer');
        this.selectedItemCard = document.getElementById('selectedItemCard');
        this.backButton = document.getElementById('backToMenu');
        this.arButton = document.getElementById('ar-button');
        this.currentItem = null;
        
        this.init();
    }
    
    init() {
        // Add click listeners to menu items
        this.addMenuItemClickListeners();
        
        // Add back button listener
        this.backButton.addEventListener('click', () => this.closeModal());
        
        // Add AR button listener
        this.arButton.addEventListener('click', () => this.activateAR());
        
        // Close modal on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    addMenuItemClickListeners() {
        // Remove existing listeners to prevent duplicates
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            // Clone the element to remove all event listeners
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
        });
        
        // Add fresh click listeners to all menu items
        const freshMenuItems = document.querySelectorAll('.menu-item');
        freshMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                const itemId = parseInt(item.dataset.id) || this.getItemIdFromTitle(item);
                this.openModal(itemId);
            });
        });
    }
    
    getItemIdFromTitle(itemElement) {
        const title = itemElement.querySelector('.menu-item-title').textContent;
        const currentMenuItems = translations[currentLang].menuItems;
        const foundItem = currentMenuItems.find(menuItem => menuItem.title === title);
        return foundItem ? foundItem.id : null;
    }
    
    openModal(itemId) {
        const currentMenuItems = translations[currentLang].menuItems;
        this.currentItem = currentMenuItems.find(item => item.id === itemId);
        
        if (!this.currentItem) return;
        
        // Reset model loaded state
        this.modelLoaded = false;
        
        // Update AR window texts based on current language
        updateARWindowTexts();
        
        // Update selected item card
        this.updateSelectedItemCard();
        
        // Show modal first
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Hide other menu items
        this.hideOtherMenuItems();
        
        // Load model with delay for better mobile performance
        setTimeout(() => {
            this.update3DModel();
        }, 300);
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear loading timeout
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        
        // Show all menu items again
        this.showAllMenuItems();
        
        // Reset model viewer
        if (this.viewer) {
            this.viewer.showPoster();
            this.viewer.src = '';
            this.modelLoaded = false;
        }
    }
    
    updateSelectedItemCard() {
        if (!this.currentItem) return;
        
        const allergenIcons = this.currentItem.allergens.map(allergen => {
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
        
        this.selectedItemCard.innerHTML = `
            <img src="${this.currentItem.img}" alt="${this.currentItem.title}">
            <div class="selected-item-content">
                <h3 class="selected-item-title">${this.currentItem.title}</h3>
                <p class="selected-item-description">${this.currentItem.desc}</p>
                <div class="selected-item-price">
                    ${this.currentItem.price}
                    <img src="riyal.png" alt="ريال" class="currency-symbol">
                </div>
                <div class="selected-item-calories">
                    <i class="fas fa-fire"></i>
                    <span>${this.currentItem.calories} ${currentLang === 'ar' ? 'سعرة حرارية' : 'calories'}</span>
                </div>
                <div class="selected-item-allergens">
                    ${allergenIcons}
                </div>
            </div>
        `;
        
        // Add horizontal class for transformation
        this.selectedItemCard.classList.add('horizontal');
    }
    
    update3DModel() {
        if (!this.currentItem || !this.viewer) return;
        
        // Clear previous event listeners
        this.viewer.removeEventListener('error', this.handleModelError);
        this.viewer.removeEventListener('load', this.handleModelLoad);
        
        // Detect if iOS device
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        // Choose appropriate model file with correct path
        const modelFile = isIOS && this.currentItem.model3dIos ? 
            this.currentItem.model3dIos : 
            this.currentItem.model3d;
        
        console.log('Loading model:', modelFile);
        console.log('Current item:', this.currentItem);
        
        // Try multiple path formats
        const possiblePaths = [
            modelFile,
            modelFile.replace('./', ''),
            modelFile.replace('./', '/'),
            window.location.origin + '/' + modelFile.replace('./', '')
        ];
        
        // Try first path
        this.viewer.src = possiblePaths[0];
        this.viewer.alt = `3D model of ${this.currentItem.title}`;
        
        console.log('Trying path:', possiblePaths[0]);
        
        // Set iOS-specific AR attributes
        if (isIOS) {
            this.viewer.setAttribute('ios-src', this.currentItem.model3dIos);
            this.viewer.setAttribute('ar', '');
            this.viewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
        }
        
        // Add error handling for model loading
        this.viewer.addEventListener('error', this.handleModelError.bind(this));
        
        // Add loading event listener
        this.viewer.addEventListener('load', this.handleModelLoad.bind(this));
        
        // Add loading timeout
        this.loadingTimeout = setTimeout(() => {
            if (!this.modelLoaded) {
                // Try next path
                if (possiblePaths[1] && this.viewer.src === possiblePaths[0]) {
                    console.log('Trying alternative path:', possiblePaths[1]);
                    this.viewer.src = possiblePaths[1];
                } else if (possiblePaths[2] && this.viewer.src === possiblePaths[1]) {
                    console.log('Trying alternative path:', possiblePaths[2]);
                    this.viewer.src = possiblePaths[2];
                } else if (possiblePaths[3] && this.viewer.src === possiblePaths[2]) {
                    console.log('Trying alternative path:', possiblePaths[3]);
                    this.viewer.src = possiblePaths[3];
                } else {
                    console.log('All paths failed, showing error');
                    this.handleModelError(new Error('Model loading timeout - all paths failed'));
                }
            }
        }, 5000);
    }
    
    handleModelError(error) {
        console.error('Failed to load 3D model:', error);
        
        // Clear loading timeout
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        
        // Show error message to user
        const errorMessage = currentLang === 'ar' ? 
            'فشل تحميل النموذج ثلاثي الأبعاد. يرجى المحاولة مرة أخرى.' :
            'Failed to load 3D model. Please try again.';
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 0, 0.1);
            color: #d32f2f;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 14px;
            z-index: 1000;
            border: 1px solid rgba(255, 0, 0, 0.3);
            max-width: 300px;
        `;
        errorDiv.innerHTML = `
            <div style="margin-bottom: 10px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 24px;"></i>
            </div>
            <div>${errorMessage}</div>
            <div style="margin-top: 10px; font-size: 12px; opacity: 0.8;">
                ${this.currentItem.model3d}
            </div>
            <div style="margin-top: 5px; font-size: 10px; opacity: 0.6;">
                ${window.location.origin}
            </div>
        `;
        
        // Add error message to viewer container
        const viewerContainer = this.viewer.parentElement;
        viewerContainer.appendChild(errorDiv);
        
        // Remove error message after 8 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 8000);
    }
    
    handleModelLoad() {
        console.log('Model loaded successfully');
        this.modelLoaded = true;
        
        // Clear loading timeout
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
        }
        
        // Force dismiss poster and show model
        setTimeout(() => {
            if (this.viewer) {
                console.log('Dismissing poster...');
                this.viewer.dismissPoster();
                
                // Try to reveal model manually
                setTimeout(() => {
                    if (this.viewer) {
                        console.log('Revealing model...');
                        this.viewer.reveal = 'auto';
                        
                        // Add some debugging info
                        console.log('Viewer src:', this.viewer.src);
                        console.log('Viewer loaded:', this.viewer.loaded);
                        console.log('Viewer canLoad:', this.viewer.canLoad);
                        
                        // Try to trigger camera controls
                        if (this.viewer.cameraControls) {
                            console.log('Camera controls available');
                        }
                    }
                }, 1000);
            }
        }, 500);
    }
    
    hideOtherMenuItems() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            if (!this.isCurrentMenuItem(item)) {
                item.style.display = 'none';
            } else {
                // Transform the selected item
                item.classList.add('selected-item-transform');
            }
        });
    }
    
    showAllMenuItems() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.style.display = '';
            item.classList.remove('selected-item-transform');
        });
    }
    
    isCurrentMenuItem(itemElement) {
        const title = itemElement.querySelector('.menu-item-title').textContent;
        return this.currentItem && this.currentItem.title === title;
    }
    
    activateAR() {
        if (!this.currentItem || !this.viewer) return;
        
        // Check if AR is supported
        if (!this.viewer.canActivateAR) {
            alert('AR غير مدعوم على هذا الجهاز أو المتصفح');
            return;
        }
        
        // Activate AR
        try {
            this.viewer.activateAR();
        } catch (error) {
            console.error('AR activation failed:', error);
            
            // Fallback: try to open in AR viewer
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            if (isIOS && this.currentItem.model3dIos) {
                // For iOS, try to open USDZ file directly
                window.open(this.currentItem.model3dIos, '_blank');
            } else {
                alert('لا يمكن تفعيل AR على هذا الجهاز');
            }
        }
    }
}

// Initialize the 3D viewer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for menu items to be rendered
    setTimeout(() => {
        window.modelViewer3D = new ModelViewer3D();
    }, 1000);
});

// Add data-id attributes to menu items for easier identification
function assignDataIds() {
    const currentMenuItems = translations[currentLang].menuItems;
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        // Add data-id attribute
        if (currentMenuItems[index]) {
            item.dataset.id = currentMenuItems[index].id;
        }
        
        // Add cursor pointer
        item.style.cursor = 'pointer';
        
        // Add hover effect
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    assignDataIds();
});
