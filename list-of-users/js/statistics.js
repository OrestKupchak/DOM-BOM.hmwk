document.getElementById('statist').addEventListener('click', average, false)


function average() {

var salaryList = document.getElementsByClassName('employeeSalary')
var total = 0;
if (salaryList.length === 0) {
	alert('No salaries to count')
} else if (salaryList.length === 1) {
	var total = parseInt(document.getElementsByClassName('employeeSalary')[0].innerText)
} else {

for (var i = 1; i <= salaryList.length; ++i) {
	total += parseInt(document.getElementsByClassName('employeeSalary')[i-1].innerText)
}
}
var average = total/salaryList.length

document.getElementById('average').setAttribute('value', average + ' - avarage salary')
}

