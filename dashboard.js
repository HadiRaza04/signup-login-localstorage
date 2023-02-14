
let loggedInUser = undefined;

(() => {
    let item = localStorage.getItem("loggedInUser")

    if (item) loggedInUser = JSON.parse(item);
    else {
        window.location.href = "./login.html";
        return;
    }

    document.querySelector("#email").innerText = loggedInUser.email;
    document.querySelector("#name").innerText = `${loggedInUser.firstName} ${loggedInUser.lastName}`;

})()
function dologout() {
    window.location.href = "./login.html";
}