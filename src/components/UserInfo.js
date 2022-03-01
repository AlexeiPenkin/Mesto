import { inputName, inputJob } from '../utils/constants.js'

export default class UserInfo {
  constructor({userName, userJob}) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  // метод возвращает объект с данными пользователя
  getUserInfo() {
    this._inputName = document.querySelector("[name='text_name']");
    this._inputJob = document.querySelector("[name='text_job']");

    this._inputName.value = this._userName.textContent;
    this._inputJob.value = this._userJob.textContent;

    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
  }
  
  // метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo() {
    this._userName.textContent = this._inputName.value;
    this._userJob.textContent = this._inputJob.value;
  }
}