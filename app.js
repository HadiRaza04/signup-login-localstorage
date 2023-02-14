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
function submitForm(e) {
    e.preventDefault();
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let gender = document.querySelector("#gender").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            document.querySelector("#error").innerText = "Email already exists";
            return;
        }
    }
    if(password !== confirmPassword){
        document.querySelector("#error").innerText = "Passwords do not match";
        return;
    }
    let newUser = {
        firstName,
        lastName,
        gender,
        email,
        password,
        confirmPassword
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    document.querySelector("#result").innerText =  "SignUp successful";
    setTimeout(() => {
        document.querySelector("#result").innerText =  "";
        document.querySelector("#error").innerText =  "";
    },5000 );
    e.target.reset();
}