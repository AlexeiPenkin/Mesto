export class Section {
  constructor({items, renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }
  // метод отрисовки всех элементов
  renderItems() {
    this._items.forEach(data => {
      this._renderer(data, this._container)
    })
  }
  // метод принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element)
  }
}