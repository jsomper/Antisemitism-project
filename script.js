window.myfunction = function () {
  var myWindow = window.open("",  "", "width=200, height=100");
  var dd = document.getElementById("dropdown");
  myWindow.document.write(dd.options[dd.selectedIndex].innerHTML);
}
