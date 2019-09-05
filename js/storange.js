//localstorage
localStorage.setItem('name', 'romdul');
localStorage.setItem('password', '123456');
localStorage.setItem('email', 'rodul@gmail.com');
console.warn(localStorage.getItem('email'));
console.log(localStorage.length);

//session storage
sessionStorage.setItem('username', 'bopha');
sessionStorage.setItem('password', '234');
console.warn(sessionStorage.getItem('username'));
console.log(sessionStorage.length);

//cookies
document.cookie='username=administrator;expires='+ new Date(9999, 0, 1).toString();


//get value from login form

const login = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;
    // document.getElementById('result').innerHTML = username + password;
    const localUser = localStorage.getItem('name');
    const localPass = localStorage.getItem('password');
    if (username == localUser && password == localPass) {
        $.notify("you are login success","success");
        swal("Good job!", "You clicked the button!", "success");
    }else {
        $.notify("you are fial", "error");
    }
}
const btn = document.getElementById('log');
btn.addEventListener('click', login);
