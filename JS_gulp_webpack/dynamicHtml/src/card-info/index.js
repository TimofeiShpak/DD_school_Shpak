import { checkObject } from "../js/helpers.js";

function createCardInfo(element) {
    let { date, description } = checkObject(element);

    return `<div class="card__description description">
        <div class="description__text">${description}</div>
        <div class="description__date">${date}</div>
    </div>`;
}

export { createCardInfo }