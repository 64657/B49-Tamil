document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault()
  
 
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
  
    document.getElementById("myForm").reset();
  });