function r() {
    return Math.floor(Math.random() * 255)
}

let elem_1 = document.getElementById("p_elem");
let elem_2 = document.querySelector(".h4_elem");

function change_color(elem) {
    elem.style.color = 'rgb(' + r() + "," + r() + "," + r() + ')';
    elem.style.background = 'rgb(' + r() + "," + r() + "," + r() + ')';
}

let add = document.getElementById("add");
add.addEventListener("click", function add_picture(){
    let new_div = document.createElement("div");

    document.getElementById("old_div").appendChild(new_div);
    new_div.id = "new_elem";

    new_div.innerHTML = "<img src='https://wiki.cuspu.edu.ua/images/thumb/b/b3/Ukraine-Kiev-Cool-Mac-HD-Wallpapers.jpg/200px-Ukraine-Kiev-Cool-Mac-HD-Wallpapers.jpg' id='new_picture' alt='picture'>";
}, {once: true});

let inc = document.getElementById("zoom+");
inc.addEventListener("click", function inc_picture(){
    let pic = document.getElementById("new_picture");

    let maxsize = "400";
    pic.height = maxsize;
}, {once: true});

let dec = document.getElementById("zoom-");
dec.addEventListener("click", function dec_picture(){
    let pic = document.getElementById("new_picture");

    let minsize = "90";
    pic.height = minsize;
}, {once: true});

let del = document.getElementById("delete");
del.addEventListener("click", function del_picture(){
    let new_div = document.getElementById("new_elem");

    new_div.innerHTML = "";
}, {once: true});


