score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==38){
        car = document.querySelector('.car');
        car.classList.add('animatecar');
        setInterval(() => {
            car.classList.remove('animatecar')
        }, 700);
    }
    if(e.keyCode==39){
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = carX + 112+ "px";
    }
    if(e.keyCode==37){
        car = document.querySelector('.car');
        carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = (carX - 112) + "px";
    }
    
}

setInterval(() => {
    car = document.querySelector('.car');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    

    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(cx-ox);
    offsetY = Math.abs(cy-oy);
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your score: " + score
}