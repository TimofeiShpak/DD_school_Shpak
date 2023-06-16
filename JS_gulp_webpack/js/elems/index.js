function display(key, value) {
    console.log(`${key}: `, value);
    console.log('');
}

// Получение элемента из DOM

let textElem = document.getElementById("text-elem");
display('textElem', textElem);

let firstDiv = document.querySelector("div");
display('firstDiv', firstDiv);

let allDivs = document.querySelectorAll("div");
display('allDivs', allDivs);

let allDivsActual = document.getElementsByTagName('div');
display('allDivs', allDivs);

let parentTextElem = textElem.closest("div");
display('parentTextElem', parentTextElem);

let elemsP = firstDiv.getElementsByTagName('p');
display('elemP', elemsP);

let divWithClassContainer = document.getElementsByClassName('div-with-class');
display('divWithClassContainer', divWithClassContainer);




// Свойства узлов

display('textElem.parentNode: ', textElem.parentElement);
display('firstDiv.childNodes: ', firstDiv.children);
display('firstDiv.firstChild: ', firstDiv.firstElementChild);
display('firstDiv.lastChild: ', firstDiv.lastElementChild);
display('firstDiv.previousSibling: ', parentTextElem.previousElementSibling);
display('firstDiv.nextElementSibling: ', firstDiv.nextElementSibling);
display('textElem.textContent: ', firstDiv.textContent);

let firstDivWithClass = divWithClassContainer[0]
display('firstDivWithClass.className: ', firstDivWithClass.className);

// textElem.innerHTML = '<div>div child</div>'
// textElem.outerHTML = '<p>p child</p>'
// elemP[0].hidden = true
// firstDivWithClass.className = 'first-divs-with-class'
// firstDivWithClass.classList.add('class')




// Изменение документа

let newDiv = document.createElement('div');
let copyDiv = firstDiv.cloneNode();
let deepCopyDiv = firstDiv.cloneNode(true);

// newDiv.textContent = 'newDiv'
// document.body.append(newDiv);
// document.body.prepend(newDiv);

// firstDiv.before(copyDiv);
// firstDiv.after(deepCopyDiv);
// newDiv.remove()




// Браузерные события

function onClick(event) {
    console.log('event: ', event);
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
}
// debugger
firstDiv.addEventListener('click', onClick);
// firstDiv.removeEventListener('click', onClick);

// [...allDivsActual].map(elem => elem.addEventListener('click', onClick));
