'use strict';

const promise1 = new Promise((resolve, reject) => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', ()=> {
        resolve();
    })
});

promise1.then(
    () => {
        const divSuccess = document.createElement('div');
        divSuccess.classList.add('message');
        divSuccess.textContent = 'Promise was resolved!';
        document.body.appendChild(divSuccess);
    },

    () => {
        const divError = document.createElement('div');
        divError.classList.add('message');
        divError.classList.add('error-message');
        divError.textContent = 'Promise was rejected!';
        document.body.appendChild(divError);
    }
)

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
})

promise2.then(
    () => {
        const divSuccess = document.createElement('div');
        divSuccess.classList.add('message');
        divSuccess.textContent = 'Promise was resolved!';
        document.body.appendChild(divSuccess);
    },

    () => {
        const divError = document.createElement('div');
        divError.classList.add('message');
        divError.classList.add('error-message');
        divError.textContent = 'Promise was rejected!';
        document.body.appendChild(divError);
    }
)
