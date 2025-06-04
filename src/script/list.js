let list = document.querySelectorAll("li");

function toggle(e){
    if (!e.target.className){
        e.target.className = "complete";
    }else{
        e.target.className = "";
    }
}

list.forEach((item) => {
    item.addEventListener("click", toggle);
});

