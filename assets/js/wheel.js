(function() {
    const wheel = document.querySelector('#wheel')
    const startButton = document.querySelector('#spinWheel')
    const betterLuck = document.querySelector('#betterLuck')
    let deg = 0;

    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random() * 7500)
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    });

    
    wheel.addEventListener('transitionend', () => {
        startButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
    
    startButton.addEventListener('click', {
        // HIER KOMT FUNCTIE OM VOLGENDE KEER BETER TE LATEN ZIEN NA 10 SECONDEN (MOET IK NOG VRAGEN)
    });
})();