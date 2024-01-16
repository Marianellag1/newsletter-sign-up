// console.log("hello world");//works!

const form = document.querySelector("form");
const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();//prevents re-load page

    const email = input.value;
    input.value = ''; //removes input user entered
    console.log(email);//works, whatever inputed shows on console

    if (!isEmail(email)) {
        errorMsg.style.display = "block"; //if not email(correct email outline, show validation)
        input.style.backgroundColor = "hsl(4.8deg 100% 95.1%)"
        input.style.border = "1px solid hsl(4, 100%, 67%)"
    } else {
        errorMsg.style.display = "none";
        input.style.backgroundColor = "hsl(231, 7%, 60%)";
        input.style.border = "1px solid hsl(4, 100%, 67%)"
    }
}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

