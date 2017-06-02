document.getElementById('statist').addEventListener('click', average, false)


function average() {
var total = 0;
var elements = document.getElementsByClassName('employeeSalary')


for (var i = 1; i < elements.length; i++) {
  var salary = document.getElementById('salary').value
  total  += parseInt(salary)
  console.log(total)
}

var average = Math.round(total / elements.length)


document.getElementById('average').setAttribute('value', 'Average salary = '+average)
}

