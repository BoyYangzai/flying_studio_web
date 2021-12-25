var num = 1;
var d_list = document.getElementById("depart_list");
var prev = document.getElementById("depart_prev");
var next = document.getElementById("depart_next");



next.onclick = function () {
    if (num > 5) {
        num = 0;
        d_list.style.left = 0 + 'vw';
    } else {
        d_list.style.left = -100 * num + 'vw';
    }
    num += 1;
}

prev.onclick = function () {
    num -= 1;
    if (num < 1) {
        num = 7;
        d_list.style.left = -500 + 'vw';
    } else {
        d_list.style.left = -100 * (num - 1) + 'vw';
    }
}