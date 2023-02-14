let users = [];
 (() => {
    let item = localStorage.getItem('users');
    if (item) users = JSON.parse(item);

    let loggedInUser = localStorage.getItem("loggedInUser")
            if (loggedInUser) {
                window.location.href = "./dashboard.html";
                return;
            } 
 })();
function submitLoginForm(e) {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let isFound = false;
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            isFound = true;
            if(users[i].password === password){
                    document.querySelector("#result").innerText = "LogIn Successful";
                    // console.log("Login Successful")
                    localStorage.setItem("loggedInUser", JSON.stringify(users[i]));
                    window.location.href = "./dashboard.html";
                    break;
                }
            else {
                document.querySelector("#error").innerText = "Incorrect Password";
            }
        }
    }
    if(!isFound){
        document.querySelector("#error").innerText = "User Not Found";
    }
    setTimeout(() => {
        document.querySelector("#result").innerText =  "";
        document.querySelector("#error").innerText =  "";
    },5000 );
    e.target.reset();
}