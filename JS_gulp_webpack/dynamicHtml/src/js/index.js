import { createContainer } from "../container/index.js";
import "../scss/style.scss";

let cards = [
    {
        name: 'name 1',
        info: {
            description: 'description 1',
            date: "12.12.2022"
        }
    },
    {
        name: 'name 2',
        info: {
            description: 'description 2',
            date: "10.12.2022"
        }
    },
];

function initApp() {
    let app = document.querySelector('.app');
    let navHtml = createContainer(cards);
    app.insertAdjacentHTML("afterbegin", navHtml);
}

initApp()

