export default class UserInfo {
  constructor({userName, userJob}) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

    //метод возвращает объект с данными пользователя
    getUserInfo() {
      const dataUser = {};
      dataUser.text_name = this._userName.textContent;
      dataUser.text_job = this._userJob.textContent;
      return dataUser;
    }

    //метод принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ text_name, text_job }) {
      this._userName.textContent = text_name;
      this._userJob.textContent = text_job;
    }
}