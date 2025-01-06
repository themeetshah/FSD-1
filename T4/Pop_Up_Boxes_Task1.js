num1 = parseInt(prompt("enter num1:"))
num2 = parseInt(prompt("enter num2:"))
operation = prompt("enter operation (+,-,*,/):")
if (operation=='+') {
    alert(num1+" "+operation+" "+num2+" = "+(num1+num2))
    document.write(num1+" "+operation+" "+num2+" = "+(num1+num2))
} else if (operation=='-') {
    alert(num1+" "+operation+" "+num2+" = "+(num1-num2))
    document.write(num1+" "+operation+" "+num2+" = "+(num1-num2))
} else if (operation=='*') {
    alert(num1+" "+operation+" "+num2+" = "+(num1*num2))
    document.write(num1+" "+operation+" "+num2+" = "+(num1*num2))
} else if (operation=='/') {
    alert(num1+" "+operation+" "+num2+" = "+(num1/num2))
    document.write(num1+" "+operation+" "+num2+" = "+(num1/num2))
}

var bday = new Date()
bday.setDate(parseInt(prompt("enter bday date:")))
bday.setMonth(parseInt(prompt("enter bday month:"))-1)

var today = new Date()
bday.setFullYear(today.getFullYear())

// days left for ur bday
if (((bday.getMonth()<=today.getMonth()) && (bday.getDate()<today.getDate()))) {
    bday.setFullYear(bday.getFullYear()+1)
}

document.write("<br>bday: "+bday.toDateString())
document.write("<br>today: "+today.toDateString())
left = Math.ceil((bday.getTime()-today.getTime())/(24*60*60*1000))
document.write("<br>days left for ur bday: "+left+" days")