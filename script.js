let signUpBtn = document.querySelector('.signUpBtn');
let signIpBtn = document.querySelector('.signInBtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');




signIpBtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signIpBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions!';
    signUpBtn.classList.remove('disable');
    signIpBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});


function func1() {
    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(user == 'jas' && email == 'jas' && pass == 'jas'){
        window.location.assign("appear.html");
        alert("successful!");
    }else{
        alert("unsuccessful!");
    }

}

function func() {
    // let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(email == 'jas' && pass == 'jas'){
        window.location.assign("appear.html");
        alert("successful!")
    }else{
        alert("unsuccessful!")
    }

}