// function hello() {
//     document.getElementById('example').innerHTML='Привет,мир!'
// }
// function reset() {
//     document.getElementById('example').innerHTML=''
// }

// function set_text(id , text ) {
//     document.getElementById(id).innerHTML= text
// }

function submit() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status')

    if (name == '') {
        status.innerHTML = 'Заполните поле "ФИО"'
    } else if (email == '') {
        status.innerHTML = 'Заполните поле "EMAIL"'
    } else if (phone == '') {
        status.innerHTML = 'Заполните поле "телефон"'
    } else {
        status.innerHTML = `Регистрация прошла успешно. Ваши данные на сайте: ФИО-${name} email: ${email} телефон: ${phone}`;
    }
}




function set_body_color_1(color) {
    document.body.style.backgroundColor = color
}

function set_body_color_2(color) {
    document.body.style.backgroundColor = color
}

function set_body_color_3(color) {
    document.body.style.backgroundColor = color
}

function set_body_color_4(color) {
    document.body.style.backgroundColor = color
}

function set_body_color(color) {
    document.body.style.backgroundColor = color;
}

function input_color() {

    var input_color = document.getElementById('color').value;

    set_body_color(input_color)
}

function lampOn() {
    document.getElementById('lamp').src = 'images/pic_bulbon.gif'

    document.getElementById('main').style.backgroundColor = "#fff"
    document.getElementById('main').style.color = "#000"




}

function lampOff() {
    document.getElementById('lamp').src = 'images/pic_bulboff.gif'

    document.getElementById('main').style.backgroundColor = "#000"

    document.getElementById('main').style.color = "#fff"
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'новая кнопка'
    document.getElementById("buttonList").appendChild(btn)
}

function createP() {
    var p = document.createElement('P');
    p.innerHTML = 'новый абзац'
    document.getElementById("paragraphList").appendChild(p)
}

//Создание объекта
var person = new Object();

//Добавление свойств со значениями
person.name = 'Вася'
person.surname = 'Пупукин'
person.age = '88'
person.weight = '50'
person.fullName = function () {
    return this.name + ' ' + this.surname
}



function showperson() {
    document.getElementById('person').innerHTML = person.fullName() + person.age
}

var avto = new Object();

avto.brand = 'Audi'
avto.model = 'a6'
avto.year = '2020'
avto.color = 'черный'



function showAvto() {
    document.getElementById('avto').innerHTML = 'Марка:' + avto.brand + '<br>' + 'Модель:' + avto.model + '<br>' + 'Год:' + avto.year + '<br>' + 'Цвет:' + avto.color + '<br>'
}

let cat = {
    poroda: 'Sphinx',
    color: 'Black',
    age: '3 y.o.'
}

cat.eyes = 'green'
cat.showInfo = function () {
    document.getElementById('cat').innerHTML = `Порода: ${cat.poroda} <br>` +
        `цвет: ${cat.color} <br>` +
        `возраст: ${cat.age} <br>` +
        `цвет глаз: ${cat.eyes} <br>`
}

const questions = [{
        question: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '1'
    },
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, testContainer, resultButton, resultContainer) {
    let out = [];
    let answers;

    for (let i = 0; i < questions.length; i++) {
        answers = [];
        for (let ans_text in questions[i].answer) {
            answers.push(
                `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text} ) ${questions[i].answers[ans_text]} </label>`
            );
        }
        out.push(
            `<div class="question"> ${questions[i].question} </div><div class="answers"> ${answers.join('')} </div>`
        )
    }
    testContainer.innerHTML = out.join('');
}

generateTest(questions, testContainer, resultButton, resultContainer);

function showResults(questions, testContainer, resultContainer) {
    let answerContainers = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswerNum = 0;

    for (let i = 0; i < questions.length; i++) {

    }
}