//Use RegEx to validate form
function validate() {
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var phoneNumber = document.getElementById('phone-number').value;
  var email = document.getElementById('email').value;
  
  var firstRGEX = /^[a-zA-Z ]+$/i;
  var lastRGEX = /^[a-zA-Z ]+$/i;
  var phoneRGEX = /^\d+$/;
  var emailRGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  
  var firstResult = firstRGEX.test(firstName);
  var lastResult = lastRGEX.test(lastName);
  var phoneResult = phoneRGEX.test(phoneNumber);
  var emailResult = emailRGEX.test(email);

if(firstResult == false)
{
alert('Please enter a valid name. No numbers');
return false;
}

if(lastResult == false)
{
alert('Please enter a valid name. No numbers');
return false;
}

if(phoneResult == false)
{
alert('Please enter a valid phone number. Only numbers');
return false;
}
 
if(emailResult == false)
{
alert('Please enter a valid email address');
return false;
}
 
  return true;
}