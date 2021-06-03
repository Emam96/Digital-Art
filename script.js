
var userName = prompt("Enter your name ? ");
var gender = prompt("Gender?,  you can answer by male or female only ")

if (gender == "male") {document.write("<p style='color:#3d84b8;'> Hello " + userName + " ! </p>")
 
}
else if (gender == "female") {document.write("<p style='color:#e93b81;'> Hello " + userName + " ! </p>")
  
}
else if (gender != "female") {document.write("<p style='color:white;'> Hello user ! </p>")
}

else if (gender != "male") {document.write("<p style='color:white;'> Hello user ! </p>")
}


// document.write("<p style='color:white;'> Hello " + userName + " ! </p>")
// document.write("<p style='color:white;'> Hello user ! </p>")