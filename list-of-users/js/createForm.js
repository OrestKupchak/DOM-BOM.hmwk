document.getElementById('reg').addEventListener('click', createForm, false)

function createForm() {
    // debugger;

    var form = document.createElement("form")
    var att1 = document.createAttribute("name");
    att1.value = "login"
    var att2 = document.createAttribute("action");
    att2.value = "google.com"
    form.setAttributeNode(att1);
    form.setAttributeNode(att2)

    var inputAge = document.createElement("input")
    var ageAtt1 = document.createAttribute("type")
    ageAtt1.value = 'text'
    var ageAtt2 = document.createAttribute("name")
    ageAtt1.value = 'age'
    var ageAtt3 = document.createAttribute("data-type")
    ageAtt3.value = 'digit'
    var ageAtt4 = document.createAttribute("data-valid")
    ageAtt4.value = 'false'
    var ageAtt5 = document.createAttribute("placeholder")
    ageAtt5.value = 'Age'
    var ageAtt6 = document.createAttribute("id")
    ageAtt6.value = 'age'
    inputAge.setAttributeNode(ageAtt1)
    inputAge.setAttributeNode(ageAtt2)
    inputAge.setAttributeNode(ageAtt3)
    inputAge.setAttributeNode(ageAtt4)
    inputAge.setAttributeNode(ageAtt5)
    inputAge.setAttributeNode(ageAtt6)

    var inputName = document.createElement("input")
    var nameAtt1 = document.createAttribute("type")
    nameAtt1.value = 'text'
    var nameAtt2 = document.createAttribute("name")
    nameAtt2.value = 'username'
    var nameAtt3 = document.createAttribute("data-type")
    nameAtt3.value = 'text'
    var nameAtt4 = document.createAttribute("data-valid")
    nameAtt4.value = 'false'
    var nameAtt5 = document.createAttribute("placeholder")
    nameAtt5.value = 'User Name'
    var nameAtt6 = document.createAttribute("id")
    nameAtt6.value = 'username'
    inputName.setAttributeNode(nameAtt1)
    inputName.setAttributeNode(nameAtt2)
    inputName.setAttributeNode(nameAtt3)
    inputName.setAttributeNode(nameAtt4)
    inputName.setAttributeNode(nameAtt5)
    inputName.setAttributeNode(nameAtt6)

    var inputDate = document.createElement("input")
    var dateAtt1 = document.createAttribute("type")
    dateAtt1.value = 'text'
    var dateAtt2 = document.createAttribute("name")
    dateAtt2.value = 'date'
    var dateAtt3 = document.createAttribute("data-type")
    dateAtt3.value = 'date'
    var dateAtt4 = document.createAttribute("data-valid")
    dateAtt4.value = 'false'
    var dateAtt5 = document.createAttribute("placeholder")
    dateAtt5.value = 'Date'
    var dateAtt6 = document.createAttribute("id")
    dateAtt6.value = 'date'
    inputDate.setAttributeNode(dateAtt1)
    inputDate.setAttributeNode(dateAtt2)
    inputDate.setAttributeNode(dateAtt3)
    inputDate.setAttributeNode(dateAtt4)
    inputDate.setAttributeNode(dateAtt5)
    inputDate.setAttributeNode(dateAtt6)


    var inputSubmit = document.createElement("input")
    var submitAtt1 = document.createAttribute("type")
    submitAtt1.value = 'button'
    var submitAtt2 = document.createAttribute("value")
    submitAtt2.value = 'Validate?'
    var submitAtt3 = document.createAttribute("id")
    submitAtt3.value = 'validation'
    var submitAtt4 = document.createAttribute("onclick")
    submitAtt4.value = 'validate()'
    inputSubmit.setAttributeNode(submitAtt1)
    inputSubmit.setAttributeNode(submitAtt2)
    inputSubmit.setAttributeNode(submitAtt3)
    inputSubmit.setAttributeNode(submitAtt4)


    form.appendChild(inputAge)
    form.appendChild(inputName)
    form.appendChild(inputDate)
    form.appendChild(inputSubmit)

    if (document.getElementById("registration").children.length == 1) {
        removeEventListener('click', createForm, false)
    } else {
        document.getElementById("registration").appendChild(form);
    }

}