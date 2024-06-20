

// Translations object
const translations = {
    en: {
        logo: "Nakiese",
        explorer: "Explorer",
        hebergements: "Accommodations",
        restauration: "Dining"
    },
    fr: {
        logo: "Nakiese",
        explorer: "Explorer",
        hebergements: "Hébergements",
        restauration: "Restauration"
    },
    
};

// Function to get the browser language
function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
}

// Function to apply translations
function applyTranslations(lang) {
    const elements = {
        logo: document.getElementById('logo'),
        explorer: document.getElementById('explorer-link'),
        hebergements: document.getElementById('hebergements-link'),
        restauration: document.getElementById('restauration-link')
    };

    if (translations[lang]) {
        elements.logo.textContent = translations[lang].logo;
        elements.explorer.textContent = translations[lang].explorer;
        elements.hebergements.textContent = translations[lang].hebergements;
        elements.restauration.textContent = translations[lang].restauration;
    } else {
        
        applyTranslations('en');
    }
}

// Detect and apply language on page load
document.addEventListener('DOMContentLoaded', () => {
    const browserLanguage = getBrowserLanguage().substring(0, 2); 
    applyTranslations(browserLanguage);
});
