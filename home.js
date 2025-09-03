// add money feature
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


// cash out feature

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const validPin = 1234;

    const amountField = document.getElementById('amount-field');
    const balance = document.getElementById('balance');
    const cashOutPin = parseInt(document.getElementById('cash-out-pin').value);
    const agentNumberField = document.getElementById('agent-number-field').value;

    const amountFieldValue = parseInt(amountField.value);
    const balanceValue = parseInt(balance.innerText);

    if(agentNumberField.length < 11 || agentNumberField.length > 11){
        alert('Enter valid agent number');
        return;
    }

    if(validPin !== cashOutPin ){
        alert('Enter valid pin number')
        return;
    }

    if(balanceValue === 0){
        alert("You don't have enough money");
        return;
    }

    if(amountFieldValue > balanceValue){
        alert("You don't have enough money");
        return;
    }

    const minusBalance = balanceValue - amountFieldValue;
    balance.innerText = minusBalance;

    amountField.value = '';
    document.getElementById('cash-out-pin').value = '';
    document.getElementById('agent-number-field').value = '';
    

})



// toggle functionality

const addMoneyCard = document.getElementById('add-money-card');
const cashOutCard = document.getElementById('cashout-card');


const addMoneyForm = document.getElementById('add-money-form');
const cashOutForm = document.getElementById('cashout-form');

addMoneyCard.addEventListener('click', function(){
    addMoneyCard.style.border = '2px solid #0874f2';
    addMoneyCard.style.backgroundColor = '#0874f20d';

    cashOutCard.style.border = '';
    cashOutCard.style.backgroundColor = '';

    addMoneyForm.style.display = 'block'
    cashOutForm.style.display = 'none'
});


cashOutCard.addEventListener('click', function(){
    cashOutCard.style.border = '2px solid #0874f2';
    cashOutCard.style.backgroundColor = '#0874f20d';

    addMoneyCard.style.border = '';
    addMoneyCard.style.backgroundColor = '';

    cashOutForm.style.display = 'block'
    addMoneyForm.style.display = 'none'

})


// logout button functionality

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = 'index.html'
})