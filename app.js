// Question 1


var main_content = document.getElementById("main-content");
var allchild =main_content.parentNode;
var render = main_content.parentNode.children[2].innerHTML;
var input = document.getElementById("first-name");
var input2 = document.getElementById("last-name");
var input3 = document.getElementById("email");
input.value = "Huzaifa";
input2.value = "Siddiqui";
input3.value = "siddiquihuzaifa68@gmail.com";


console.log(main_content)
console.log(allchild)
console.log(render)


// Question 2

var getNode1= document.getElementById("form-content");
var getNode2= document.getElementById("last-name");
console.log( getNode1.nodeType);
console.log(getNode2.nodeType);
console.log(getNode2.childNodes[0])
getNode2.replaceChildren("hey", getNode2.childNodes[0])
console.log(getNode2)
console.log(getNode1.firstElementChild)
console.log(getNode1.lastElementChild)
console.log(getNode2.nextElementSibling)
console.log(getNode2.previousElementSibling)
var parent = document.getElementById("email");
console.log(parent.parentNode)
console.log(parent.nodeType)





