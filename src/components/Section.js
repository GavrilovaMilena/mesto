export default class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    //обход массива
    renderItems(items) {
        items.forEach(item => {this._renderer(item)});
    }
    //добавляет элемент
    addItem(element) {
        this._container.prepend(element);
    }
}
