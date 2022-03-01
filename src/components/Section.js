export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // метод отрисовки всех элементов
  setItem() {
    this._items.forEach(item => {
      this.addItem(this._renderer(item));
    })
  }

  // метод принимает DOM-элемент и добавляет его в контейнер
  addItem(item) {
    this._container.prepend(item);
  }
}