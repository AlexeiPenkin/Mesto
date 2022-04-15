export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // метод отрисовки всех элементов
  renderItems(items) {
    items.forEach(data => {
      this.addItem(this._renderer(data));
    })
  }

  // метод принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}