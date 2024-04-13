let log_btn = document.getElementById('Login-btn')
let first_page = document.querySelector('.First-page')
let remember_btn = document.getElementById('Check')
let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');
let ErrorEmail = document.querySelector('.ErrorEmail')
let ErrorPassword = document.querySelector('.ErrorPassword')
let loading = document.querySelector('.loading-svg')
let loading_bg = document.querySelector('.background-loading')
let eyeClose = document.querySelector('.eyeClose')
let eyeOpen = document.querySelector('.eyeOpen')
let REMEMBER = false;
let checkEmail = false;
let checkPassword = false;
// thuc hien remember
if ( localStorage.getItem('remember') ) {
    remember_btn.checked = JSON.parse( localStorage.getItem('remember') )
}
if ( remember_btn.checked ) {
    if ( localStorage.getItem('email') && localStorage.getItem('password') ) {
        document.getElementById("Email-login-input").value = JSON.parse( localStorage.getItem('email') )
        document.getElementById("Password-login-input").value = JSON.parse( localStorage.getItem('password') )
    }
}


// lay input login
function getLogin() {
    let email_log = document.getElementById('Email-login-input').value
    let password_log = document.getElementById('Password-login-input').value
    let Login = {
        login: email_log,
        password: password_log
    }
    return Login
}

emailInput.addEventListener('input', ()=>{
    if ( emailInput.value === '' ) {
        emailInput.style.border ='1px solid rgb(245, 89, 89)'
        ErrorEmail.classList.add('active')
    } else {
        emailInput.style.border ='1px solid #ccc'
        ErrorEmail.classList.remove('active')
    }
})
passwordInput.addEventListener('input', ()=>{
    if ( passwordInput.value === '' ) {
        eyeClose.classList.remove('active')
        passwordInput.style.border ='1px solid rgb(245, 89, 89)'
        ErrorPassword.classList.add('active')
    } else {
        eyeClose.classList.add('active')
        eyeOpen.classList.remove('active')
        passwordInput.style.border ='1px solid #ccc'
        ErrorPassword.classList.remove('active')
    }
})

if ( passwordInput.value !== '' ) {
    eyeClose.classList.add('active')
}

eyeClose.addEventListener('click', ()=>{
    eyeClose.classList.remove('active')
    eyeOpen.classList.add('active')
    passwordInput.type = 'text'
})
eyeOpen.addEventListener('click', ()=>{
    eyeClose.classList.add('active')
    eyeOpen.classList.remove('active')
    passwordInput.type = 'password'
})

// xu li dummy call api
log_btn.addEventListener('click', ()=>{
    // console.log( remember_btn.checked )
    let Login = getLogin()
    if ( Login.login === '' ) {
        emailInput.style.border ='1px solid rgb(245, 89, 89)'
        ErrorEmail.classList.add('active')
    } else {
        ErrorEmail.classList.remove('active')
        checkEmail = true;
    }
    if ( Login.password === '' ) {
        passwordInput.style.border ='1px solid rgb(245, 89, 89)'
        ErrorPassword.classList.add('active')
    } else {
        ErrorPassword.classList.remove('active')
        checkPassword = true;
    }
    if ( checkEmail && checkPassword ) {
        loading_bg.style.display = 'block';
        loading.style.display = 'block';
    }
    fetch("https://recruitment-api.pyt1.stg.jmr.pl/login", {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify( Login )
})
.then( (reponse) => {
    if ( !reponse.ok ) // ( reponse.status !== 200 )
    {
        throw new Error('Network response was not ok');
    } else {
        return reponse.json();
    }
})
.then( (reponse) => {
    if ( reponse.status === "ok" ) {
        // first_page.style.display = 'none';
        // window.location.href ="http://127.0.0.1:5500/todolist.html"
        window.location.href = "https://vancuong1808.github.io/Sgroup_Final_FrontEnd_Period/todolist.html"
        emailInput.style.border ='1px solid green'
        passwordInput.style.border ='1px solid green'
        if ( remember_btn.checked ) {
            localStorage.setItem('email', JSON.stringify(Login.login));
            localStorage.setItem('password', JSON.stringify(Login.password));
            REMEMBER = true;
            localStorage.setItem('remember', REMEMBER);
        } else {
            REMEMBER = false;
            localStorage.setItem('remember', REMEMBER);
        }
    } else {
        loading_bg.style.display = 'none';
        loading.style.display = 'none';
        emailInput.style.border ='1px solid rgb(245, 89, 89)'
        passwordInput.style.border ='1px solid rgb(245, 89, 89)'
        throw new Error('Login response was not ok');
    }
})
.catch( (error) => {
    console.log( 'loi', error );
})
})


// xu li input null
