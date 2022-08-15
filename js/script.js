document.getElementById('next').addEventListener('click', function () {
  // print text when button clicked
  console.log("next button clicked");

  const emailErrorDOM = document.getElementsByClassName('email-error')[0];

  // get input dom
  const EmailOrPhoneDOM = document.getElementsByTagName('input')[0];

  // get DOM value
  const EmailOrPhoneDOMValue = EmailOrPhoneDOM.value;

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (EmailOrPhoneDOMValue.match(emailRegex)) {
    console.log('email is valid');

    // change input to grey
    EmailOrPhoneDOM.style.border = '1px solid rgb(210, 210, 210)';

    // show error message
    emailErrorDOM.style.display = 'none';
  } else {
    console.log('email is not valid');

    // change input to red
    EmailOrPhoneDOM.style.border = '1px solid red';

    // show error message
    emailErrorDOM.style.display = 'block';
  }


});

