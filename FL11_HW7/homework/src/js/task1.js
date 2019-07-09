let User = 'user@gmail.com';
let Admin = 'admin@gmail.com';
let user_pass = 'UserPass';
let admin_pass = 'AdminPass';
let min_mail = 6;
let min_pass = 5;
let new_pass;
let mail_input;
let pass_input;
let Mail = prompt('Enter your email:', '');
if (Mail === null || Mail.length === 0) {
  alert('Canceled');
} else if (Mail.length < min_mail) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (Mail === User || Mail === Admin) {
      pass_input = prompt('Enter password:');
      if (pass_input === null || pass_input.length === 0) {
        alert('Canceled');
      } else if (Mail === User && pass_input === user_pass || Mail === Admin && pass_input === admin_pass) {
          if (confirm('Do you want to change your password?')) {
            pass_input = prompt('Enter your old password:');
            if (Mail === User && pass_input === user_pass || Mail === Admin && pass_input === admin_pass) {
              new_pass = prompt('Enter new password:');
              if (new_pass.length < min_pass) {
                alert('It’s too short password. Sorry.');
              } else {
                  let new_pass_2;
                  new_pass_2 = prompt('Enter new password again:');
                  if (new_pass === new_pass_2) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');
                }
              }
            } else {
                alert('Wrong password.');
            }
          } else {
              alert('You have failed the change.');
          }
      } else {
            alert('Wrong password.');
      }
} else {
        alert('I don’t know you.');
}