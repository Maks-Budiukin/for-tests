const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


const square = document.querySelector('.square');
const exit = document.querySelector('.exit')
const exitBigger = document.querySelector('.exit-bigger')
const phraseEl = document.querySelector('.phrase')
document.addEventListener('keydown', move);

let x = 0;
let y = 0;
let phrase = 0;

function move(event) {
    
    if (event.keyCode === DOWN) {
        y += 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
        if (x <= -270 || x >= 240 || y <= -120 || y >= 180) {
            reset();
        }
    } else if (event.keyCode === UP) {
        y -= 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
        if (x <= -270 || x >= 240 || y <= -120 || y >= 180) {
            reset();
        }
    } else if (event.keyCode === LEFT) {
        x -= 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
        if (x <= -270 || x >= 240 || y <= -120 || y >= 180) {
            reset();
        }
    } else if (event.keyCode === RIGHT) {
        x += 30;
        square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
        if (x <= -270 || x >= 240 || y <= -120 || y >= 180) {
            reset();
        }
    }
}

function reset() {
    x = 0;
    y = 0;
    square.setAttribute("style", `transform: translate(${x}px, ${y}px);transition: transform 0.3s ease`)
    phrase += 1;
    setPhrase()
    
}

// function setPhrase() {
//     if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else if (phrase === 1) {
//         phraseEl.textContent = 'Я ЖЕ СКАЗАЛ - НЕ ВЫХОДИ!'
//     } else 
// }

function setPhrase() {
    switch (phrase) {
        case 0: phraseEl.textContent = 'НЕ ВЫХОДИ ЗА ЛИНИЮ!'
            break;
        case 1: phraseEl.textContent = 'СКАЗАЛИ ЖЕ - НЕ ВЫХОДИ!'
            break;
        case 2: phraseEl.textContent = 'ТЫ СЕРЬЕЗНО?..'
            break;
        case 3: phraseEl.textContent = 'ЧТО СЛОЖНОГО? ПРОСТО НЕ ВЫХОДИ ЗА ЛИНИЮ, И ВСЁ!'
            break;
        case 4: phraseEl.textContent = 'ЛАДНО, МОЖЕШЬ ВЫХОДИТЬ...'
            break;
        case 5: phraseEl.textContent = 'АГА, ПОПАВСЬ! ВЫХОДИТЬ ЗА ЛИНИЮ НЕЛЬЗЯ!'
            break;
        case 6: phraseEl.textContent = 'НУ НЕЛЬЗЯ, Я НЕ ЗНАЮ, ПОЧЕМУ.'
            break;
        case 7: phraseEl.textContent = 'ДА ПЕРЕСТАНЬ!'
            break;
        case 8: phraseEl.textContent = 'В КАКОМ СМЫСЛЕ "А КАК ТОГДА ВЫИГРАТЬ?" ТЫ И ТАК ЧЕМПИОН)))'
            break;
        case 9: phraseEl.textContent = 'СЛУШАЙ, МОЖЕТ ХОББИ СЕБЕ НАЙДЕШЬ УЖЕ?'
            break;
        case 10: phraseEl.textContent = 'А ТЫ УПОРНЫЙ)) РОДСТВЕННИКИ, НЕБОСЬ, ГОРДЯТСЯ))'
            break;
        case 11: phraseEl.textContent = 'ЛАДНО, ЛАДНО, ЕЩЕ ОДИН РАЗ НЕЛЬЗЯ, А ПОТОМ БУДЕТ МОЖНО'
            break;
        case 12: phraseEl.textContent = 'ВОТ, ТЕПЕРЬ МОЖНО. ВЫХОДИ. НО Я ТЕБЯ ПРЕДУПРЕЖДАЛ.'
            break;
        case 13: phraseEl.textContent = 'ПФФФ АХАХА, ПОПАЛСЯ ВТОРОЙ РАЗ))'
            break;
        case 14: phraseEl.textContent = 'ПОГОДИ, Я ВСЕ ЕЩЕ СМЕЮСЬ)))))'
            break;
        case 15: phraseEl.textContent = 'ОЙ, СМОТРИ! ДЫРКА! ПРОЛЕЗЕШЬ?'; exit.classList.remove('visually-hidden');
            break;
        case 16: phraseEl.textContent = 'КТО-ТО СЛИШКОМ МНОГО КУШАЕТ)))))'; exit.classList.add('visually-hidden');
            break;
        case 17: phraseEl.textContent = 'ОКЕЙ, ДЕРЖИ ДЫРКУ ПОБОЛЬШЕ. СМОТРИ НЕ ВЫВАЛИСЬ!'; exitBigger.classList.remove('visually-hidden');
            break;
        case 18: phraseEl.textContent = 'ВЫВАЛИЛСЯ! Я ЖЕ ГОВОРИЛ - НЕ НАДО ТУДА ЛЕЗТЬ!'; exitBigger.classList.add('visually-hidden'); square.classList.add('visually-hidden');
            break;
        case 19: phraseEl.textContent = 'ЛАДНО, НЕ НОЙ, ВОТ ТВОЙ КУБИК. '; square.classList.remove('visually-hidden');
            break;
        case 20: phraseEl.textContent = 'МОЖЕТ С ШАРИКОМ БОЛЬШЕ ПОВЕЗЕТ?)'; square.classList.add('rounded');
            break;
        case 21: phraseEl.textContent = '))))))))))))))))'; square.classList.remove('rounded');
            break;
        case 22: phraseEl.textContent = 'ЛАДНО, ТЕПЕРЬ СЕРЬЕЗНО, НЕ ВЫХОДИ ЗА ЛИНИЮ!'
            break;
        case 23: phraseEl.textContent = 'ТЫ ДЕЛАЕШЬ МНЕ БОЛЬНО КАЖДЫЙ РАЗ, КОГДА ПЫТАЕШЬСЯ ВЫЙТИ!'
            break;
        case 24: phraseEl.textContent = 'АЙ!'
            break;
        case 25: phraseEl.textContent = 'АЙ! ОЙ! НУ ХВАТИТ'
            break;
        case 26: phraseEl.textContent = 'Я ТАК И ЗНАЛ, ЧТО ТВОЯ ЦЕЛЬ - СДЕЛАТЬ МНЕ БОЛЬНО!'
            break;
        case 27: phraseEl.textContent = 'ЛАДНО, МНЕ НЕ БОЛЬНО. НО Я ОБИДЕЛСЯ.'
            break;
        case 28: phraseEl.textContent = 'ВЫЙДЕШЬ ЕЩЕ РАЗ - УЙДУ В ПЕРЕЗАГРУЗКУ'
            break;
        case 29: phraseEl.textContent = 'ПЕРЕЗАГРУЗКА ЧЕРЕЗ 5...'
            break;
        case 30: phraseEl.textContent = '4...'
            break;
        case 31: phraseEl.textContent = '3...'
            break;
        case 32: phraseEl.textContent = '2...'
            break;
        case 33: phraseEl.textContent = '1...'
            break;
        case 34: phraseEl.textContent = '0...'
            break;
        case 35: phraseEl.textContent = '-1...'
            break;
        case 36: phraseEl.textContent = '-2...'
            break;
        case 37: phraseEl.textContent = 'ХАХАХ)) НО ТЕПЕРЬ И ПРАВДА ПЕРЕЗАГРУЖУСЬ.'
            break;
        case 38: phraseEl.textContent = '[RELOADING ll.......]'
            break;
        case 39: phraseEl.textContent = '[RELOADING lllll....]'
            break;
        case 40: phraseEl.textContent = '[RELOADING lllllllll]'
            break;
        case 41: phraseEl.textContent = '.........................'
            break;
        case 42: phrase = 0; phraseEl.textContent = 'НЕ ВЫХОДИ ЗА ЛИНИЮ!';
            break;

    }
}