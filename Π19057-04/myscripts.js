function CheckForBlanks()
{
	if(document.getElementById('fname').value == "") {
		alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.");
		document.getElementById('fname').style.borderColor = "red";
		return false; /* Θελω η φορμα να μην στείλει τα στοιχεία NotSubmit, κάτι σαν break operation */
	}
	if(document.getElementById('Telephone').value == "") {
		alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.");
		document.getElementById('Telephone').style.borderColor = "red";
		return false; /* Θελω η φορμα να μην στείλει τα στοιχεία NotSubmit, κάτι σαν break operation */
	}
	if(document.getElementById('email').value == "") {
		alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.");
		document.getElementById('email').style.borderColor = "red";
		return false; /* Θελω η φορμα να μην στείλει τα στοιχεία NotSubmit, κάτι σαν break operation */
	}
	if(document.getElementById('subject').value == "") {
		alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.");
		document.getElementById('subject').style.borderColor = "red";
		return false; /* Θελω η φορμα να μην στείλει τα στοιχεία NotSubmit, κάτι σαν break operation */
	}
}
