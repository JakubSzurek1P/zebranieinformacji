"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const forms = [...document.getElementsByTagName('form')];
let poprawneOdpowiedzi = 0;
function waitForEvent(element, eventName) {
    return new Promise((resolve) => {
        element.addEventListener(eventName, (event) => {
            resolve(event);
        }, { once: true });
    });
}
function checkIfCorrect(form) {
    const prawidlowaOdpowiedz = form.querySelector('.correct');
    const odpowiedz = form.querySelector('input[name="odpowiedz"]:checked');
    return prawidlowaOdpowiedz == odpowiedz;
}
function isBlank(form) {
    const odpowiedz = form.querySelector('input[name="odpowiedz"]:checked');
    return !odpowiedz;
}
forms.forEach((form) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    while (true) {
        const e = yield waitForEvent(form, 'submit');
        if (!isBlank(form))
            break;
    }
    poprawneOdpowiedzi += Number(checkIfCorrect(form));
    if ((_a = form.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling) {
        form.style.display = 'none';
        form.parentElement.nextElementSibling.style.display = 'block';
        if (!((_c = (_b = form.parentElement) === null || _b === void 0 ? void 0 : _b.nextElementSibling) === null || _c === void 0 ? void 0 : _c.classList.contains('pytanie')) && document.getElementById('liczbaPunktow')) {
            document.getElementById('liczbaPunktow').textContent = String(poprawneOdpowiedzi);
            ((_d = document.getElementById('liczbaPunktow')) === null || _d === void 0 ? void 0 : _d.parentElement).style.color = `hsl(${(poprawneOdpowiedzi / 10) * 120}, 100%, 50%)`;
        }
    }
}));
