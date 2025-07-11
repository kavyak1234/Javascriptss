const totalLength = document.getElementsByTagName("h1") .length;
console.log(totalLength);
document.getElementsByTagName("h1")[totalLength -1].innerHTML =
"<u>kavya kannan</u>";
document.getElementsByTagName("button")[0].style.backgroundColor = "blue";
document.getElementsByTagName("button")[0].style.color = "white";
document.getElementsByTagName("button")[0].style.padding = "10px";
document.getElementsByTagName("button")[0].style.border = "none";