function a(){
    const arrows=document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(arrow=>{
        arrow.addEventListener("click",()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const next=parent.nextElementSibling;
            console.log("input");
            if(input.type==="text" && validate(input)){
                nextform(parent,next);
            }
            else if(input.type==="email" && check(input)){
                nextform(parent,next);
            }
            else if(input.type==="password" && pass(input)){}
            else{
                parent.style.animation="shake 0.5s ease";
            }
            parent.addEventListener("animationend",()=>{
                parent.style.animation="";
            });
        });
      });
}
a();
function validate(user)
{
    if(user.value.length<6){
        error("rgb(189,87,87)");
    }else{
        error("rgb(87,189,130)");
        localStorage.setItem('username', user.value);
        return true;
    }
}

function nextform(parent,next)
{
    parent.classList.add('fade');
    parent.classList.remove('in');
    next.classList.add("in");
}
function check(user){
    const symbols=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(symbols.test(user.value)){
        error("rgb(87,189,130)");
        localStorage.setItem('email', user.value);
        return true;
    }
    else{
        error("rgb(189,87,87)");
    }
}

function error(color)
{
    document.body.style.backgroundColor=color;
}
function pass(password){
    if(password.value.length<6)
    {
        error("rgb(189,87,87)");
    }
    else{
        error("rgb(87,189,130)");
        window.location.pathname = "./index.html"
        window.localStorage.setItem('password', password.value)
        return true;
    }
}

localStorage.getItem('password')