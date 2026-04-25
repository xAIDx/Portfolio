document.querySelectorAll('.copy').forEach(el => {
    el.addEventListener('click', () => {
        const text = el.querySelector('span').innerText.trim();
        navigator.clipboard.writeText(text);
        
        const tooltip = document.createElement('div');
        tooltip.innerText = 'Copied!';
        tooltip.style.cssText = `
        position: absolute;
        background: #a855f7;
        color: white;
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 12px;
        pointer-events: none;
        z-index: 999;
        animation: fadeIn 0.3s ease;
        top: -30px;
        left: 0;
        `
    el.style.position = 'relative';
    el.appendChild(tooltip);

    setTimeout(() => tooltip.remove(), 1000);
    });
});