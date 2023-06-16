import { checkObject } from "../js/helpers.js";
import { createCardInfo } from "../card-info/index.js";

function createCard(element) {
    let { name, info } = checkObject(element);

    return `<div class="card">
        <div class="card__name">${name}</div>
        ${createCardInfo(info)}
    </div>`;
}

export { createCard }