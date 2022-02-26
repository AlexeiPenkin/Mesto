// export default class PopupWithForm extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);

    
//   }

//   // собирает данные всех полей формы
//   _getInputValues() {

//   }

//   // не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
//   _setEventListeners() {
//     super(setEventListeners);

//     this._popup.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains(this._popupOpenClass)) {
//         this.close();
//       }
//       if (evt.target.classList.contains(this._popupCloseButtonClass)) {
//         this.close();
//       }
//     })
//   }

//   // при закрытии попапа форма должна ещё и сбрасываться
//   close() {
//     super(open);

//   }

// }


// // Для каждого попапа создавайте свой экземпляр класса `PopupWithForm`.