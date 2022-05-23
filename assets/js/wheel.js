const startButton = document.querySelector('#spinWheel');
const tokenAlert = document.querySelector('#tokenalert');
const numberofspins = document.querySelector('#numberofspins');

function onload(){
    var userID = sessionStorage.getItem("userID")

    fetch("assets/API/get_user_tokens.php?userID="+userID)
    .then(function (response){
        return response.json();
    })
    .then(function  (data){
        sessionStorage.setItem('remainingTokens', data[0].user_tokens)

        if (data[0].user_tokens <= 0)
        {
            tokenAlert.style.visibility = "visible";
            startButton.remove();
        }
    });

};
onload();

setTimeout(function(){
    var tokens = sessionStorage.getItem("remainingTokens");
    numberofspins.innerHTML = tokens;
}, 100);



(function() {
    const wheel = document.querySelector('#wheel')
    const startButton = document.querySelector('#spinWheel')
    const betterLuck = document.querySelector('#betterLuck')
    const winner = document.querySelector('#winner')
    let deg = 0;

    startButton.addEventListener('click', () => {
        
        var userID = sessionStorage.getItem("userID")
        
        fetch("assets/API/spin_token.php?userID="+userID)
        .then(function (response){
            return response.json();
        })
        .then(function  (data){
            
        });

        startButton.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random() * 7500)
        
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    });

    
    wheel.addEventListener('transitionend', () => {
        startButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        
    
        if (actualDeg >40&&actualDeg<45){
            winner.style.visibility = 'visible';
            setTimeout(function(){
                winner.style.visibility = 'hidden';
            }, 2000);
            
        }
        if (actualDeg >225&&actualDeg<230){
            winner.style.visibility = 'visible';
            setTimeout(function(){
                winner.style.visibility = 'hidden';
            }, 2000);
            
        }
        else{
            
            betterLuck.style.visibility = 'visible';
            setTimeout(function(){
                betterLuck.style.visibility = 'hidden';
            }, 2000);
        }
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        onload();

        setTimeout(function(){
            var tokens = sessionStorage.getItem("remainingTokens");
            numberofspins.innerHTML = tokens;
        }, 1000);
    });
})();