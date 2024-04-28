var i = 0;
var color = ['red', 'green', 'blue'];

function change() {
  var doc = document.getElementById("background");
  console.log("called")
  doc.style.backgroundColor = color[i];
  i = i + 1;
  if (i > 2) {
    i = 0;
  }
  a()
}

function a() {
  return setTimeout(change, 1000);
}
a();  
