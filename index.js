function changeImage(image, source) {
  document.getElementById(image).src = source;
}

function goTo(id) {
  if (id == 1) {
    window.scrollTo(0, 0);
  }
  else {
    var height = banner.offsetHeight;
    for (var i = 1; i < id; i++) {
      height = height + document.getElementById("content" + i).offsetHeight;
    }
    window.scrollTo(0, height);
  }
}

//Event listeners
document.getElementById("item1").addEventListener("click", function() {
  goTo(1);
});

document.getElementById("item2").addEventListener("click", function() {
  goTo(2);
});

document.getElementById("item3").addEventListener("click", function() {
  goTo(3);
});

document.getElementById("code1").addEventListener("click", function() {
  goTo(5);
});

document.getElementById("code2").addEventListener("click", function() {
  goTo(6);
});

document.getElementById("code3").addEventListener("click", function() {
  goTo(7);
});

document.getElementById("code4").addEventListener("click", function() {
  goTo(4);
});

document.getElementById("item4").addEventListener("click", function() {
  goTo(8);
});
