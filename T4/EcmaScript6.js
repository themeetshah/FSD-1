const arr1 = [1,2]
const arr2 = [...arr1,3,4]
console.log(arr2)

// rest:
const add = (a,b) => {return a+b}
console.log(`<br>Addition of 2 nos is ${add(10,20)}`)

const add1 = (...args) => {
    let sum=0
    for (let i=0;i<args.length;i++){
        sum=sum+args[0];
    }
    return sum
}
console.log(`<br>Addition of given nos is ${add1(10,20,30,40)}`)

// defaults:
const mul = (a=5, b=7) => {
    return a*b
}
console.log(`<br>Multiplication is ${mul()}`)
console.log(`<br>Multiplication of 2 nos is ${mul(99,99)}`)

// write es6 fxn to be called on button click
// take one div with some text and no decor initially
// take font size and style as default args and pass bg color and text color while calling the fxn
// div should change style when button is clicked
function task1(bgclr, clr, fntsize="48px", fntstyle="italic") {
    var div = document.getElementsByClassName("task1")[0];
    div.style.backgroundColor=bgclr;
    div.style.color=clr;
    div.style.fontSize=fntsize;
    div.style.fontStyle=fntstyle;
    div.innerHTML="<b>sahi baat hai</b>"
}

// for of loop
let scores = [10,20,30,40,50]
for (let[i,j] of scores.entries()){
    console.log(`score of ${i} is ${j}`)
}
for (let index in scores) {
    console.log(`score in index ${index} is ${scores[index]}`);
}

// maps
let m = new Map()
m.set('sname','MS')
m.set('div','A1')
m.set('rollNo',5)
m.set('marks',20)
console.log(m)
console.log(`Roll no. is ${m.get('rollNo')}`)
console.log(`No. of elements: ${m.size}`)
console.log(m.delete('div'))
console.log(m)
console.log(m.delete('div'))
console.log(m.has('div'))
console.log(m.has('rollNo'))
m.clear()
console.log(m)

// strings:
var s = "This is a laung day"
console.log(s.includes("is",9))
console.log(s.startsWith("is",2))
console.log(s.endsWith("is",7))
var a = "AAA"
var b = "BBB"
console.log(a.localeCompare(b)) //ASCII code -> a=b:0, a>b:1, a<b:-1 (calling:a, comparing:b)
// it is case-insensitive

// write an es6 fxn that takes an array of any number of strings and sorts it in ascending order of str
const sortingg = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i].localeCompare(arr[j]) == 1) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
console.log(sortingg(["banana", "Apple", "cherry", "Date"]));

// Array destructuring
let arr3 = [1,2,3,4];
let [w1,x1,y1,z1] = arr3;
console.log(x1);

const destr = () => {
    return [10,20,30,40];
}
const [w4,x4,y4,z4] = destr();
console.log(x4,z4);

// don't do this when destructuring is asked, just for knw:
let arr4 = [1,2,3];
let [w2,x2,y2,z2] = arr4;
console.log(x2,z2);
let arr5 = [1,2,3,4];
let [w3,x3,y3] = arr5;
console.log(x3, y3);
// ------x------end of don't do this------x------

class Student {
    constructor(f,n) {
        this.fname = f;
        this.marks = n;
    }
    display = () => {
        console.log(`Fname: ${this.fname}, Marks: ${this.marks}`)
    }
}
let s1 = new Student("girgit", 14)
s1.display()

// object destructuring
var s2 = {fname:'abc', roll:5, marks:23}
var {fname:xs2, roll:ys2, marks:zs2} = s2
console.log(xs2)

// calc distance btw 2 pts
// class Point with members x,y,z and fxn distance
// 1st obj is used to call the fxn
// 2nd obj is passed as arg