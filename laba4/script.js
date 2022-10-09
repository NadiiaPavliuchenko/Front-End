function r() {
    return Math.floor(Math.random() * 255)
}

let elem_1 = document.getElementById("p_elem");
let elem_2 = document.querySelector(".h4_elem");

function change_color(elem) {
    elem.style.color = 'rgb(' + r() + "," + r() + "," + r() + ')';
    elem.style.background = 'rgb(' + r() + "," + r() + "," + r() + ')';
}