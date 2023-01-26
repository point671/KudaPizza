// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




const otherElem = document.querySelector('.item-pizza-menu-main-other');



document.addEventListener('click', otherOnOff)




function otherOnOff(e) {

    if (e.target.closest(".popup-show")) {

    }


    console.log('клик');
    if (e.target.closest(".main-menu-pizza__item_other")) {
        otherElem.classList.toggle('_active-other');
        console.log('переключить');
    }
    if (!e.target.closest(".main-menu-pizza__item_other")) {
        otherElem.classList.remove('_active-other');
        console.log('Удалить');
    }
}




//Валидация форм



$(document).ready(function () {
    $("#form-your-order-id").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
            },
            name: {
                required: true,
            },
        },
        messages: {
            email: {
                required: "Введите адресс почты",
                email: "Введите правильный формат адреса электронной почты"
            },
            name: {
                required: "Введите адресс почты",
            },
            tel: {
                required: "Введите номер телефона",
            }
        }
    });
});





const button = document.querySelector('.popup_show');


document.addEventListener('click', buttonClick);


function buttonClick(e) {
    if (e.target.closest('.popup-show')) {
        const delShow = document.querySelector("._header-show")
        if (delShow) {
            delShow.classList.remove('_header-show')
        }
    }
}



//Верификация кода



const form = document.querySelector('.form-control')
const inputs = form.querySelectorAll('input')
const KEYBOARDS = {
    backspace: 8,
    arrowLeft: 37,
    arrowRight: 39,
}

function handleInput(e) {
    const input = e.target
    const nextInput = input.nextElementSibling
    if (nextInput && input.value) {
        nextInput.focus()
        if (nextInput.value) {
            nextInput.select()
        }
    }
}

function handlePaste(e) {
    e.preventDefault()
    const paste = e.clipboardData.getData('text')
    inputs.forEach((input, i) => {
        input.value = paste[i] || ''
    })
}

function handleBackspace(e) {
    const input = e.target
    if (input.value) {
        input.value = ''
        return
    }

    input.previousElementSibling.focus()
}

function handleArrowLeft(e) {
    const previousInput = e.target.previousElementSibling
    if (!previousInput) return
    previousInput.focus()
}

function handleArrowRight(e) {
    const nextInput = e.target.nextElementSibling
    if (!nextInput) return
    nextInput.focus()
}

form.addEventListener('input', handleInput)
inputs[0].addEventListener('paste', handlePaste)

inputs.forEach(input => {
    input.addEventListener('focus', e => {
        setTimeout(() => {
            e.target.select()
        }, 0)
    })

    input.addEventListener('keydown', e => {
        switch (e.keyCode) {
            case KEYBOARDS.backspace:
                handleBackspace(e)
                break
            case KEYBOARDS.arrowLeft:
                handleArrowLeft(e)
                break
            case KEYBOARDS.arrowRight:
                handleArrowRight(e)
                break
            default:
        }
    })
})
