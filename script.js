


function setTheme(themeName) {
    if (themeName === 'oscuro') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', themeName);
}


function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        
        setTheme('claro');
    }
}


function updateButtonText(theme) {
    const lightButton = document.getElementById('Tema-claro');
    const darkButton = document.getElementById('Tema-oscuro');
    
    if (theme === 'oscuro') {
        lightButton.textContent = ' Claro ☀️';
        darkButton.textContent = ' Oscuro 🌙 (actual)';
    } else {
        lightButton.textContent = ' Claro ☀️ (actual)';
        darkButton.textContent = ' Oscuro 🌙';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    initializeTheme();
    
    
    const lightButton = document.getElementById('Tema-claro');
    const darkButton = document.getElementById('Tema-oscuro');
    
    
    const currentTheme = localStorage.getItem('theme') || 'claro';
    updateButtonText(currentTheme);
    
    
    if (lightButton) {
        lightButton.addEventListener('click', function() {
            setTheme('claro');
            updateButtonText('claro');
        });
    }
    
    if (darkButton) {
        darkButton.addEventListener('click', function() {
            setTheme('oscuro');
            updateButtonText('oscuro');
        });
    }
});