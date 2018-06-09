function validateForm()
{
  if(document.forms["ValiFrom"]["Name"].value == "" ||
  document.forms["ValiFrom"]["pasw"] == "" ||
  document.forms["ValiFrom"]["pasw1"] == "" ||
  document.forms["ValiFrom"]["email"] == "" ||
  document.forms["ValiFrom"]["phone"] == "" ||
  document.forms["ValiFrom"]["webAdd"] == "")
  {
     alert('Please fill all the boxes before submitting');
     return false;
  }
  else 
  {return true;}
	
  var x = document.forms["ValiFrom"]["Name"].value;
  if (x == null || x == "")
  {
    alert('Name must be entered before continuing');
    return false;
  }

  var pass = document.forms["ValiFrom"];
  if(pass.pasw.value != pass.pasw1.value)
  {
    alert('Password does not match');
    return false;
  }
  else
  {
    return true;
  }

  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  var em = document.forms["ValiFrom"]["email"].value;

  if (regexEmail.test(em.val())) 
  {
    return true;
  }
  else 
  {
    alert("Enter a valid email id")
    return false;
  }
  
  var regexph = /^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/; 
  var pho = document.forms["ValiFrom"]["phone"].value;
  if (pho.match(regexph)) 
  {
    return true;
  }
  else
  {alert('Enter a valid phone number');
    return false;
  }

  var regexweb = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var reg = document.forms["ValiFrom"]["webAdd"].value;
  if (reg.match(regexweb) )
  {
   return true;
  } 
  else 
  {
   alert("Enter a valid url");
  
  }

    
}