import { createCard } from "../card/index.js";

function createContainer(cards) {
    return `<div class=container>
        ${
            cards.map(element => createCard(element))
        }
    </div>`
}

export { createContainer }