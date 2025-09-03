// add money button functionality
document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const validPin = 1234;

    const bank = document.getElementById('bank').value;
    const bankNumber = document.getElementById('bank-number').value;
    const pin = parseInt(document.getElementById('pin').value);

    const balance = document.getElementById('balance');
    const balanceInnerText = balance.innerText;
    const balanceConvert = parseInt(balanceInnerText)
    
    const addAmount = document.getElementById('addAmount');
    const addAmountValue = addAmount.value;
    const addAmountConvert = parseInt(addAmountValue);

    if(bankNumber.length < 11 || bankNumber.length > 11){
        alert('Please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('Please provide valid pin number');
        return;
    }

    const addDollar = balanceConvert + addAmountConvert;
    balance.innerText = addDollar;
    addAmount.value = '';

    
    document.getElementById('bank-number').value = '';
    document.getElementById('pin').value = '';
    
})