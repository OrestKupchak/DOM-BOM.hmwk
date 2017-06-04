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

document.getElementById('average').setAttribute('value', 'Average salary = '+average)
}


/*
function getAverageSalary() {

  var keys = employeeKeys;
  var salarySum = 0;

  if (localStorage) {
    if (keys && keys.length) {
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var employeeArr = JSON.parse(localStorage.getItem('employee-' + key));

        salarySum += employeeArr
            .map(function(el) {if(el.salary) {return parseInt(el.salary)}})
            .filter(function(el) {return el;})[0];
      }
      return parseInt(salarySum/keys.length);
    }
  }
}
*/