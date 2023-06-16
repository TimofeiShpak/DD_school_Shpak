"use strict"

import { createP, name } from './do.js';

function createDiv() {
    let div = document.createElement('div');
    div.textContent = 'text';
    document.body.append(div);
}

createP();
createDiv();
name();