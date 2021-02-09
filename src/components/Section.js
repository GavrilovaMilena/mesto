export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initial = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    //обход массива
    renderItems() {
        this._initial.forEach(item => this._renderer(item));
    }
    //добавляет элемент
    addItem(element) {
        this._container.prepend(element);
    }
}
