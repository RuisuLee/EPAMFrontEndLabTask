class UserService {
    constructor() {
        this.API = "https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture";
        this.usersList = [];
        this.sortingType = -1;
    }

    async getUsersFromExternalService() {
        if(this.usersList.length !== 0){
            return;
        }

        let response = await fetch(this.API);
        if (await  response.status === 200){
            let data = await response.json();
            this.usersList = data.results;
        }else{
            alert(`HTTP Error: ${await response.status}`);
        }

    }

    setSortingType(type){
        if(type !== "0" && type !== "1"){
            console.log("Invalid argument")
        }

        this.sortingType = type;
    }

    sortUsersList(){
        let asc = (this.sortingType === "1");
        this.usersList.sort((a,b) => {
            let concatedNameA = a.name.first + a.name.last;
            let concatedNameB = b.name.first + b.name.last;

            if (!asc){
                if(concatedNameA < concatedNameB) return -1;
                if(concatedNameA > concatedNameB) return 1;
            } else{
                if(concatedNameA > concatedNameB) return -1;
                if(concatedNameA < concatedNameB) return 1;
            }
            return 0;
        });
    }

    renderUsersList(){
        if(this.usersList.length === 0){
            console.log("usersList is empty");
            return;
        }

        let container = document.createElement("div");
        container.classList.add("user-list");

        for (let user of this.usersList){
            let shortUserInfo = this.getUserInfoTemplate(user);
            container.appendChild(shortUserInfo);
        }

        return  container;
    }

    getUserInfoTemplate(userInfo) {
        let userHTMLTempale = new UserHTMLTemplate(userInfo);
        let userHTMLContainer = userHTMLTempale.getUserHTMLTemplate();
        return userHTMLContainer;
    }

    removeUserListContainer () {
        let removeElement = document.getElementsByClassName("user-list");

        for (let e of removeElement){
            e.remove();
        }
    }
}


