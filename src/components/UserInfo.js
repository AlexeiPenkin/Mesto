export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector) 
  }

  // метод возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
      avatar: this._avatar.url
    }
  }
  
  //метод принимает новые данные пользователя
  setUserInfo(name, about, avatar) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
    this._avatar.src = avatar;
  }
}