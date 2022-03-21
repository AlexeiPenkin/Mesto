export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }
  // метод возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }
  //метод принимает новые данные пользователя
  setUserInfo({ name, job, avatar }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
    this._avatar.src = avatar;
  }
}
