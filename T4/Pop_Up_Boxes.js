alert("Welcome to the World!")

var pomp = prompt("Enter your name: ")

var conf = confirm("Are you sure??")
if (conf==true) {
    document.write("<h1 class='display-6'>"+pomp+" is sure!</h1>");
} else {
    document.write("<h1 class='display-6'>"+pomp+" is not sure!</h1>");
}
