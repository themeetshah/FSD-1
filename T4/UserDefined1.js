var stud = new Object()
stud.name = "MeetS"
stud.roll = 5
stud.marks = 90.5

stud.display=function() {
    document.write("Name: "+stud.name+"<br>Roll: "+stud.roll+"<br>Marks: "+stud.marks)
}

var s1={
    rollno:5, 
    marks:48, 
    name:"MS", display:function(){
        document.write("<br><br>Roll No: "+s1.rollno+"<br>Marks: "+s1.marks+"<br>Name: "+s1.name)
    }
}

stud.display()
s1.display()