// console.log("hello world");//works!

// form validation
const form = document.querySelector("form");
const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");
const userEmail = document.querySelector(".useremail");

//switching update with email to thank you cards and vice-versa
const firstCard = document.querySelector(".first");
const secondCard = document.querySelector(".second");
const dismissBtn = document.querySelector(".dismiss");

form.addEventListener("submit", validate);
submit.addEventListener("click",validate);
dismissBtn.addEventListener("click", function() {
    location.reload(); //added for glitch, when re-load, page shows normally
    secondCard.style.display = "none"; //no-show
    firstCard.style.display = "block"; //show
})

function validate(e) {
    e.preventDefault();//prevents re-load page
    
    const email = input.value;
    // input.value = ''; //removes input user entered
    console.log(email);//works, whatever inputed shows on console

    
    if (!isEmail(email)) {
        input.value ='';
        errorMsg.style.display = "block"; //if not email(correct email outline, show validation)
        input.style.backgroundColor = "hsl(4.8deg 100% 95.1%)"
        input.style.border = "1px solid hsl(4, 100%, 67%)"
    } else {
        // location.reload();
        firstCard.style.display = "none", //no show
        secondCard.style.display = "block" //show
        userEmail.innerText = input.value + '.';//concatination for perdiod after email
        
    }

}

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

