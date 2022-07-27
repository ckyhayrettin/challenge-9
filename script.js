const buttonDaily = document.querySelector('#daily');
const buttonWeekly = document.querySelector('#weekly');
const buttonMonthly = document.querySelector('#monthly');
const work = document.querySelector('.work');
const gamepad = document.querySelector('.gamepad');
const book = document.querySelector('.book')
const falling = document.querySelector('.falling');
const comment = document.querySelector('.comment');
const heart = document.querySelector('.heart');

buttonDaily.addEventListener('click', function () {
    work.textContent = '32hrs'
    gamepad.textContent = '10hrs'
    book.textContent = '4hrs'
    falling.textContent = '4hrs'
    comment.textContent = '5hrs'
    heart.textContent = '2hrs'
})

buttonWeekly.addEventListener('click', function () {
    work.textContent = '192hrs'
    gamepad.textContent = '60hrs'
    book.textContent = '24hrs'
    falling.textContent = '24hrs'
    comment.textContent = '30hrs'
    heart.textContent = '12hrs'
})

buttonMonthly.addEventListener('click', function () {
    work.textContent = '768hrs'
    gamepad.textContent = '240hrs'
    book.textContent = '96hrs'
    falling.textContent = '96hrs'
    comment.textContent = '120hrs'
    heart.textContent = '48hrs'
})

