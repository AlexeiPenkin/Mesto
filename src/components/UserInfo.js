export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) { // добавить третий аргумент 'profileAvatarSelector'
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    // this._avatar = document.querySelector(profileAvatarSelector);
  }
  // метод возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
  }
  //метод принимает новые данные пользователя
  setUserInfo({ title, job, avatar }) { // добавить третий аргумент 'avatar' и выставить его src
    this._nameElement.textContent = title;
    this._jobElement.textContent = job;
    this._avatar.src = avatar; // примерный код обновления аватара
  }
}