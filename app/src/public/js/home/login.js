"use strict"

const id = document.querySelector("#id"), 
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

function login() {

    const req = {
        id : id.value,
        password : password.value,
    };

    fetch("/login", {
        method : "POST",
        headers : {
            "content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else { 
                alert(res.msg);  
            }
        })
        .catch((err) => {
            console.error(("로그인중 에러"));
        })
}

loginBtn.addEventListener("click",login)