
var personsList = []
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


    
    var person = { 'firstname':  employeeFirstName.innerText, 'lastname': employeeLastName.innerText}
    personsList.push(person);



 var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
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



    
          if (average >= 2000) {
              alert('You can\'t get more than ' + limit + ' new employees, avarage salary os over 2000')
          } else if (newlist.length < limit) {
              for (var i = 0; i <= personsList.length; i++) {
                    if (personsList.includes(person)) {
                        alert('This person is already signed, check the list')
                        return false
                        } else {
                          list.appendChild(newEmployee) 
                      }
                  }       
          } else {
              alert('You can\'t get more than ' + limit + ' new employees, you don\'t have that much money :)')
          }
        }


/*----------------------------------:Updating data validation----------------------------------------------*/

        }




/*

 var invalidArr = [];
    var validationArr = [];
    employeeKeys = getEmployeesNumberArr();
    var isDuplicate = isDuplicateFunc(employeeKeys);
    console.log()


function isDuplicateFunc(employeeKeys) {
  var isDuplicate = false;
  if (employeeKeys && employeeKeys.length) {
    for (var j = 0; j < employeeKeys.length; j++) { //1,2
      var key = employeeKeys[j];
      var _employeeArr = JSON.parse(localStorage.getItem('employee-' + key));
      var existingFirstName,
          existingLastName;

      if (_employeeArr && _employeeArr.length) {
        for (var key in _employeeArr) {
          if (_employeeArr[key].firstname) {
            existingFirstName = _employeeArr[key].firstname;
          }
          if (_employeeArr[key].lastname) {
            existingLastName = _employeeArr[key].lastname;
          }
        }
        if (elements.firstname.value.trim().toLowerCase() === existingFirstName.trim().toLowerCase()
            && elements.lastname.value.trim().toLowerCase() === existingLastName.trim().toLowerCase()) {
          isDuplicate = true;
        }
      }
    }
  }
  return isDuplicate;
}
*/