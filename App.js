function validate(){
    var mail = document.getElementById("maill");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var pass = document.getElementById("passs").value;
  
    if(mail=="" || !mail.value.match(validRegex)){
      document.getElementsByTagName("small")[0].innerHTML = "Please enter a valid e-mail address";
      return false;
    }
  
   if(pass =="" ){
      document.getElementsByTagName("small")[1].innerHTML = " You must enter password";
      return false;
   }
   else{
    document.getElementsByTagName("small")[0].innerHTML = "";
    document.getElementsByTagName("small")[1].innerHTML = "";
      
   }


}
