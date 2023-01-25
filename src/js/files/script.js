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



