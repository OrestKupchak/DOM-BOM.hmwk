function addNew() {
    //debugger

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var salary = document.getElementById('salary').value;
    var position = document.getElementById('position').value;
    var limit = document.getElementById('limit').value;
    var average = document.getElementById('average').value;


    var list = document.getElementsByClassName("employeeList")[0];
    var newEmployee = document.createElement('li')


    var employeeFirstName = document.createElement('span')
    employeeFirstName.className = 'employeeFirstName'
    employeeFirstName.innerText = firstName + ' ';
    var employeeLastName = document.createElement('span')
    employeeLastName.className = 'employeeLastName'
    employeeLastName.innerText = lastName + ' ';
    var employeeSalary = document.createElement('span')
    employeeSalary.className = 'employeeSalary'
    employeeSalary.innerText = salary + ' ';
    var employeePosition = document.createElement('span')
    employeePosition.className = 'employeePosition'
    employeePosition.innerText = position;

    newEmployee.appendChild(employeeFirstName)
    newEmployee.appendChild(employeeLastName)
    newEmployee.appendChild(employeeSalary)
    newEmployee.appendChild(employeePosition)

    var newlist = document.getElementsByClassName("employeeList")[0].getElementsByTagName('li')

/*
var list = document.querySelector('.show-list')
var elements = list.getElementsByTagName('span')
for (var i = 0; i <= elements.length; i++){
console.log(elements[i].innerText)
}
*/  var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    var namePattern = /^([A-Za-z]{2}[ éàëA-Za-z]*)$/;  //RegEx pattern for validation of Usernames


        if (position.length === 0 || firstName.length === 0 || lastName.length === 0 || position.length === 0 ){
              alert('Some fields are empty')
        }
        else if (isNaN(salary) || typeof(parseInt(salary)) !== 'number' || salary.length === 0 || parseInt(salary) <= 0) {
            alert('Salary data is not valid!')
        } else if (!firstName.match(namePattern) || !lastName.match(namePattern)) {
            alert('Username data is not valid!')
        } else if ( position.length === 0 || !position.match(namePattern) ) {
            alert('Position data is not valid!')
        } else {

/*----------------------------------TODO: Update data duplicate validation----------------------------------------------*/

          var employeesData = document.querySelector('.show-list')
            var elements = employeesData.getElementsByTagName('span')
            for (var i = 0; i < elements.length; i++){
                if (document.getElementById('firstName').value.toLowerCase() ===  elements[i].innerText.toLowerCase() ) {
                  if (document.getElementById('lastName').value.toLowerCase() === elements[i+1].innerText.toLowerCase()) {
                   alert('This person is already signed, check your list')
                    return false
                    }

                  }
                      //return;
                }
                    //console.log(firstName + ' match ' + elements[i].innerText)

/*----------------------------------:Updating data validation----------------------------------------------*/

          if (average >= 2000) {
              alert('You can\'t get more than ' + limit + ' new employees, avarage salary os over 2000')
          } else if (newlist.length < limit) {
              list.appendChild(newEmployee)
          } else {
              alert('You can\'t get more than ' + limit + ' new employees, you don\'t have that much money :)')
          }
        }

        }
