// array literal
var marks1 = [10,2,123,88,420]

document.write("For Loop:<br>")
for(i=0;i<marks1.length;i++) {
    document.write("Mark "+(i+1)+": "+marks1[i]+"<br>")
}

document.write("<br>document.write('arr_name') => <br>Marks: ["+marks1+"]<br>")

// array object constructor
// var marks2 = new Array()
// var n=prompt("enter size:")
// for(i=0; i<n; i++) {
//     marks2[i] = prompt("enter mark "+(i+1))
// }

// document.write("<br>Array Object => Marks: ["+marks2+"]<br>")

// array object constructor
var marks3 = new Array(10,2,123,88,420)
document.write("<br><h1 class='display-3'>Array Object Constructor:</h1><ul><li>Marks: ["+marks3+"]</li>")
document.write("<li>Type: "+typeof(marks3)+"</li>")
// marks3 = marks3.toString()
// document.write(typeof(marks3)+"<br>")
document.write("<li>Element at index 2: "+marks3.at(2)+"</li>")
document.write("<li>Separating by '~': "+marks3.join("~")+"</li>")
document.write("<li>Push (returns size of array): "+marks3.push("abc")+" => "+marks3+"</li>")
document.write("<li>Pop (returns popped element): "+marks3.pop()+" => "+marks3+"</li>")
document.write("<li>Shift (returns shifted element): "+marks3.shift()+" => "+marks3+"</li>")
document.write("<li>Unshift (returns size of array): "+marks3.unshift(69)+" => "+marks3+"</li></ul>")

var fruits = new Array("Watermelon", "blueberry","Tomato","Apple")
document.write("<br>After sorting (direct sort for strings): "+fruits.sort())
document.write("<br>After sorting: "+fruits)
document.write("<br>After sorting reverse: "+fruits.reverse())
document.write("<br>After sorting asc (fxn sort for ints): "+marks3.sort(function(a,b) {
    return a-b
})) //this is an inbuilt fxn
document.write("<br>After sorting desc (fxn sort for ints): "+marks3.sort(function(a,b) {
    return b-a
})) //this is an inbuilt fxn
document.write("<br>After sorting: "+marks3) //this is an inbuilt fxn
document.write("<br>After sorting reverse: "+marks3.reverse()) //this is an inbuilt fxn