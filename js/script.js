// login button functionality
document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 123456789;
    const pin = 1234;

    const numberField = document.getElementById('numberField');
    const numberFieldValue = numberField.value;
    const parseIntNumberField = parseInt(numberFieldValue)
    numberField.value = ''

    const pinField = document.getElementById('pinField');
    const pinFieldValue = pinField.value;
    const parseIntPinField = parseInt(pinFieldValue)
    pinField.value = ''

    if(parseIntNumberField === mobileNumber && parseIntPinField === pin){
        window.location.href = "./home.html"
    }else{
        alert("Wrong credentials")
    }
    
})
