var elements = document.getElementsByClassName("column");

var i;

function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 100%";
    }
}

function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 50%";
    }
}

function three() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 33%";
    }
}

function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 25%";
    }
}

function five() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 20%";
    }
}

function six() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 16.6%";
    }
}

function seven() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 14.2%";
    }
}

function eight() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 12.5%";
    }
}

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}