export class Section {
  constructor({items, renderer}, containerSelector) {
<<<<<<< HEAD
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
  addItem(element) {
    this._container.prepend(element);
=======
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
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
  }
}