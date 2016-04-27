var message = "";
var students;


function print(message){
	document.write("<section>" + message + "</section>"); //this message is the same in line 5 inside the function; local scope
}

for (var i = 0; i<students.length; i++) {
	student = students[i];
	message += '<h1>' + student.name + '</h1>';
}

print(message); //this message is the same as the first line since this is a global scope