function validateForm() {
  var name = info.name;
  var email = info.email;
  var phoneNo = info.number;
  var errors = [];

  if (name.value.match(/[0-9]/)) {
    errors.push(`Number in name`);
  } else if (name.value.length < 2) {
    errors.push(`Name too short`);
  }

  if (!phoneNo.value.match(/[0-9]/)) {
    errors.push(`Letters in Phone Number`);
  } else if (phoneNo.value.length !== 11) {
    errors.push(`Number not 11 digits`);
  }

  if (errors.length > 0) {
    var msg = "Form Validation Errors:\n";
    for (var i = 0; i < errors.length; i++)
      msg += " - " + errors[i] + "\n";
    alert(msg);
  }
}
