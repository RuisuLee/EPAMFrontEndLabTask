class UserHTMLTemplate{
    constructor(userInfo){
        this.userInfo = userInfo;
        this.pictureMedium = userInfo.picture.medium;
        this.pictureLarge = userInfo.picture.large;
        this.title = userInfo.name.title;
        this.firstName = userInfo.name.first;
        this.lastName = userInfo.name.last;
        this.email = userInfo.email;
        this.phone = userInfo.phone;
        this.street = userInfo.location.street;
        this.city = userInfo.location.city;
        this.state = userInfo.location.state;
    }

    getUserHTMLTemplate(){
        let user = this.getUserContainer();

        let userImage = this.getUserImageContainer();

        let userNameWrapper = this.getUserNameContainer();

        user.appendChild(userImage);
        user.appendChild(userNameWrapper);

        return user;
    }

    getUserContainer(){
        let user = document.createElement("div");
        user.classList.add("user");
        user.addEventListener("click", function () {
            let fullUserName = this.firstName+" "+this.lastName;
            console.log(fullUserName);

            let fullUserLocation = this.state+", "+this.city+", "+this.street;

            let userName = USER_CARD.getElementsByClassName("user-card-name")[0];
            userName.innerHTML = fullUserName;

            let userPicture = USER_CARD.getElementsByClassName("image__large")[0];
            userPicture.src = this.pictureLarge;

            let userAdress = USER_CARD.getElementsByClassName("address")[0];
            userAdress.innerHTML = fullUserLocation;

            let userEmail = USER_CARD.getElementsByClassName("email")[0];
            userEmail.innerHTML = this.email;

            let userPhone = USER_CARD.getElementsByClassName("phone-number")[0];
            userPhone.innerHTML = this.phone;

            USER_CARD.style.visibility = 'visible';
        }.bind(this));
        return user;
    }

    getUserImageContainer(){
        let userImage = document.createElement("div");
        userImage.classList.add("user-image");

        let image = document.createElement("img");
        image.src = this.pictureMedium;
        image.classList.add("image__medium");

        userImage.appendChild(image);

        return userImage;
    }

    getUserNameContainer(){
        let userNameWrapper = document.createElement("div");
        userNameWrapper.classList.add("user-name");

        let userName = document.createElement("p");
        let fullUserName = `${this.title}.`+" "+this.firstName+" "+this.lastName;
        userName.innerHTML = fullUserName;

        userNameWrapper.appendChild(userName);

        return userNameWrapper;
    }
}