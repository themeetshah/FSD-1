function clk(a) {
    a.innerText="I'm clicked"
}

function task1(a) {
    a.style.transform="scale(1.2)"
    // a.style.width = "240px"; // Increase width by 1.2x
    // a.style.height = "240px"; // Increase height by 1.2x
}

function task2(a) {
    a.style.backgroundColor="black"
}

function task3(a) {
    a.style.textTransform="uppercase"
}

function task4(a,e) {
    if (e.button==0) {
        a.innerText="Left"
    } else if (e.button==1) {
        a.innerText="Wheel"
    } else if (e.button==2) {
        a.innerText="Right"
    }
}

function task5(a,e) {
    a.innerText="X: "+e.clientX+", Y: "+e.clientY
}

function task6_enter(a) {
    a.innerText="Entered"
}

function task6_leave(a) {
    a.innerText="Left"
}

function task7(a,e) {
    document.addEventListener('mousemove', function(e){
        // a.style.position="fixed"
        a.style.left=e.clientX+"px"
        a.style.top=e.clientY+"px"
    })
}