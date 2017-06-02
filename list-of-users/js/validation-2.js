function validate() {


    var form = document.querySelector('form');
    //form.onload = function() {

    var inputAge = document.getElementById('age').value
    var inputName = document.getElementById('username').value
    var inputDate = document.getElementById('date').value
    var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
    var datePattern = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    var datePattern2 = /^\d{2}.\d{2}.\d{4}$/
    var namePattern = /^user_(.+)([A-Za-z]{2}[ éàëA-Za-z]*)$/;
    var digitsPattern = /^[-\+]?\d+/


    if (isNaN(inputAge) || typeof(parseInt(inputAge, 10)) !== 'number' || inputAge.length === 0 ||
        (spacesPattern.test(inputAge)) || parseInt(inputAge, 10) <= 0 || parseInt(inputAge, 10) > 100 || /[^[0-9]/.test(inputAge) ) {
        alert('Age data is not valid!')
    } else if (!inputName.match(namePattern)) {
        alert('Username data is not valid!')
    } else if (!datePattern.test(inputDate)) {
        alert('Date data is not valid! Enter in format dd/mm/yyyy. \nAnd remember there are maximum 31 days and 12 months')
    } else {
        alert("Your Data is valid")
    }
}
