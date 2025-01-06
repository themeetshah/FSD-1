var count=0
change= function() {
    var a = document.getElementsByTagName("h1")
    var b = document.getElementsByTagName("img")
    if (count%2==0) {
        a[0].innerText = "Welcome"
        // b[0].src= "imgs/car2.png"
    } else {
        a[0].innerText = "Hello World"
        // b[0].src= "imgs/car1.png"
    }
    if(b[0].getAttribute('src')=="imgs/car1.png") {
        b[0].setAttribute('src', 'imgs/car2.png')
    } else if(b[0].getAttribute('src')=="imgs/car2.png") {
        b[0].setAttribute('src', 'imgs/car1.png')
    }
    count+=1
}