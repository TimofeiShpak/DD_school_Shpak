function createElement(tag, options) {
    let elem = document.createElement(tag);
    Object.keys(options).forEach(key => {
        elem[key] = options[key]
    });
    document.body.append(elem);
}

export default createElement;