"use strict"

function createP() {
    let func = () => 1 + 1;
    func();
    let p = document.createElement('p');
    p.textContent = 'text';
    document.body.append(p);
}

function name() {
    let p = document.createElement('p');
    p.textContent = 'name';
    document.body.append(p);
}

export { createP, name };