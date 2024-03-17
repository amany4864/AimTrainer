document.querySelector('.Start-btn').addEventListener('click', function() {
    document.querySelector('.time-options').style.display = 'flex';

});

var timeoutID;
var score = 0;

function cancelbtn() {
    clearTimeout(timeoutID);
    displayresult(score);
    score = 0;
    document.querySelector('.time-options').style.display = 'none';
    
}

function thirtysec() {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.btn').style.display='block'
    timeoutID = setTimeout(() => {
        document.querySelector('.time-options').style.display = 'none';
        alert(`Your score is ${score}`);
        score = 0;
    }, 30000);
}

function sixtysec() {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.btn').style.display='block'
    timeoutID = setTimeout(() => {
        document.querySelector('.time-options').style.display = 'none';
        alert(`Your score is ${score}`);
        score = 0;
    }, 60000);
}

function onetwentysec() {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.btn').style.display='block'
    timeoutID = setTimeout(() => {
        document.querySelector('.time-options').style.display = 'none';
        alert(`Your score is ${score}`);
        score = 0;
    }, 120000);
}

function poschange() {
    score += 10;
    var container = document.querySelector('.container');
    var btn = document.querySelector('.btn');
    var x = Math.random() * (container.offsetWidth - btn.offsetWidth);
    var y = Math.random() * (container.offsetHeight - btn.offsetHeight);
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function displayresult(score) {
    alert(`Your Score is ${score}`);
}
