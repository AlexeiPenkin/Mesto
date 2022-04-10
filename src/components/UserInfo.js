export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
<<<<<<< HEAD
    this._avatar = document.querySelector(profileAvatarSelector) 
  }

=======
<<<<<<< HEAD
    this._avatar = document.querySelector(profileAvatarSelector) 
  }

=======
    this._avatar = document.querySelector(profileAvatarSelector);
  }
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  // метод возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
<<<<<<< HEAD
      about: this._jobElement.textContent,
      avatar: this._avatar.url
    }
=======
<<<<<<< HEAD
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
=======
      job: this._jobElement.textContent,
    };
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
  }
  
  //метод принимает новые данные пользователя
  setUserInfo(name, about, avatar) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
    this._avatar.src = avatar;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 8dd07bf7c8019ef1f30e8549f9de877ca235a1a6
>>>>>>> 8f2d5e0bfda83508788e583874b064efe5cec55b
