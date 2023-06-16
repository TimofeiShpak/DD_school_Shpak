import Img from '@/assets/images/img.jpeg';
import createElement from './helpers.js';
import '@/scss/index.scss';
import '@/js/register.js';

createElement('div', {textContent: 'text', className: 'image'});
let templateText = document.querySelector('.template-text');
templateText.textContent = 'template html'

createElement('img', {src: Img});

// createElement('div', {className: 'anonim icon'});

document.body.insertAdjacentHTML('beforeend', `<div class="icon">
    <svg>
    <use xlink:href="#anonim" />
    </svg>
</div>`)