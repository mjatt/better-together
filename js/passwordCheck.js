function passwordcheck(pswrd) {
  var minimum_length = 6;
  var errors = [];
  if (pswrd.length < minimum_length)
    errors.push("Too short");
  if (pswrd.match(/[^a-zA-Z0-9]/))
    errors.push("Only alphanumeric chars allowed");
  if (!pswrd.match(/[a-z]/))
    errors.push("Lower case letter required");
  if (!pswrd.match(/[A-Z]/))
    errors.push("Upper case letter required");
  if (!pswrd.match(/[0-9]/))
    errors.push("Number required");
  return errors;
  //if none of the errors match, an empty array will be returned
}

function formated_errors(errors) {
  var msg = 'The password has the following errors:\n';
  for (var i = 0; i < errors.length; i++)
    msg += ' - ' + errors[i] + '\n';
  return msg;
}


window.onload = function () {
  var info = document.getElementById('newsletter_sign_up');
  var user_input = info.password;
  console.log(user_input.value)

  var validation = function () {
    var errors = passwordcheck(user_input.value);
    if (errors.length > 0) {
      var all_errors = formated_errors(errors);
      console.log(all_errors)
      user_input.setCustomValidity(all_errors);

    } else
      user_input.setCustomValidity('');
  }
  user_input.onchange = validation;

}