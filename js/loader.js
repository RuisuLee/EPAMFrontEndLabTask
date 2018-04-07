const USER_CARD = document.getElementsByClassName("user-card")[0];
function loader() {
    var userService = new UserService();
    loadUsersInformation(userService);

    addEventToSelect(userService);

    addEventToCloseButton();

    USER_CARD.style.visibility = 'hidden';
}

function addEventToSelect(userService) {
    let select = document.getElementsByClassName("sorting-select")[0];
    select.addEventListener("change", function () {
        if(this.value === userService.sortingType)
            return;
        userService.setSortingType(this.value);
        userService.removeUserListContainer();
        userService.sortUsersList();
        let userListWrapper = document.getElementsByClassName("user-list-wrapper")[0];
        userListWrapper.appendChild(userService.renderUsersList());
    });
}

function addEventToCloseButton() {
    let closeButton = USER_CARD.getElementsByClassName("close-button")[0];
    closeButton.addEventListener("click", function () {
        USER_CARD.style.visibility = 'hidden';
    });
}

function loadUsersInformation(userService) {
    userService.getUsersFromExternalService().then(() =>{
        let userListWrapper = document.getElementsByClassName("user-list-wrapper")[0];
        userListWrapper.appendChild(userService.renderUsersList());
    });
}