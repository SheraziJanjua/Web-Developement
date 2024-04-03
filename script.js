var istatus = document.querySelector("h2");
var add = document.querySelector("#a");
var check = 0;
add.addEventListener("click", function () {
    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        add.innerHTML = "Remove Friend"
        add.style.width = "120px"


         
        check = 1;
    }
    else{
        istatus.innerHTML = "Stranger";

        istatus.style.color = "rgb(129, 7, 7)";
        add.innerHTML = "Add Friend"
        add.style.width = "100px"
        check = 0 ;
    }

 
});

var remove = document.querySelector("#r"); // Use the correct selector for id
remove.addEventListener("click", function () {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "rgb(129, 7, 7)";
  
    }
);
