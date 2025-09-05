const transactionData = [];

// function to get input value number
    function getInputValueNumber(id){
        const getInputValueNumber = parseInt(document.getElementById(id).value);
        document.getElementById(id).value = '';
        return getInputValueNumber;
    }

// function to get innerText number
function getInnerTextNumber(id){
    const getInnerTextNumber = parseInt(document.getElementById(id).innerText);
    return getInnerTextNumber;
}

// function to set inner text
function setInnerText(value){
    const setInnerId = document.getElementById("balance");
    const setText = setInnerId.innerText = value;
    return setText;
}

// function to get hidden form
function getHiddenForm(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none'
    }
    const getFromId = document.getElementById(id).style.display = 'block';
    return getFromId;
}


// function to get active color
function getActiveColor(id){
    const addColors = document.getElementsByClassName("active-color");

    for(const addColor of addColors){
        addColor.style.border = "";
        addColor.style.backgroundColor = "";
    }

    document.getElementById(id).style.border = "2px solid #0874f2";
    document.getElementById(id).style.backgroundColor = "#0874f20d";
}


// add money feature
document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault();
    const validPin = 1234;

    // const bank = document.getElementById('bank').value;
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

    if(addAmountConvert <= 0){
        alert("Invalid amount");
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

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString(),
    }

    transactionData.push(data);
    
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

    const data = {
        name: "Cashout Money",
        date: new Date().toLocaleTimeString(),
    }

    transactionData.push(data);

})

// transfer money feature
document.getElementById("transfer-btn").addEventListener("click", function(e){
    e.preventDefault()

    const validPin = 1234;

    const getInputValueNum = getInputValueNumber("transfer-amount-field");
    const getInnerTextNum = getInnerTextNumber("balance");

    const userAccountField = document.getElementById("user-account-number-field").value;
    const transferPin = parseInt(document.getElementById("transfer-pin").value);

    if(userAccountField.length < 11 || userAccountField.length > 11){
        alert("Enter valid user account number");
    }

    if(transferPin !== validPin){
        alert("Enter valid pin number")
    }

    if(getInputValueNum > getInnerTextNum){
        alert("You don't have enough money");
        return;
    }

    const result = getInnerTextNum - getInputValueNum;
    setInnerText(result)

    document.getElementById("user-account-number-field").value = '';
    document.getElementById("transfer-pin").value = '';

    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString(),
    }

    transactionData.push(data);
    
})


// toggle form functionality

const addMoneyCard = document.getElementById('add-money-card');
const cashOutCard = document.getElementById('cashout-card');
const transferMoneyCard = document.getElementById('transfer-money-card');


const addMoneyForm = document.getElementById('add-money-form');
const cashOutForm = document.getElementById('cashout-form');
const transferMoneyForm = document.getElementById('transfer-money-form');


// addMoney Toggle
addMoneyCard.addEventListener('click', function(){

    getActiveColor("add-money-card");
    getHiddenForm("add-money-form");
    
});


// cashOut toggle
cashOutCard.addEventListener('click', function(){

    getActiveColor("cashout-card")
    getHiddenForm("cashout-form");

})

// transferMoney toggle
transferMoneyCard.addEventListener('click', function(){

    getActiveColor("transfer-money-card")
    getHiddenForm("transfer-money-form")

})

// transaction toggle
document.getElementById("transaction-card").addEventListener("click", function(){
    getActiveColor("transaction-card")
    getHiddenForm("transaction-form")

    const transactionContainer = document.getElementById("transaction-container");
    const div = document.createElement("div");

    for(const transaction of transactionData){

        div.innerHTML = `
        
            <div class="flex justify-between mt-4 items-center bg-white border-2 border-[#0808081a] rounded-xl p-4">

              <div class="flex items-center">
                   <div class="bg-[#0808080d] p-[11px] rounded-[32px]">
                       <img class="w-[30px]" src="./assets/wallet1.png" alt="">
                   </div>
                   <div class="ml-4">
                        <h1 class="font-semibold text-2xl">${transaction.name}</h1>
                        <p class="text-[#080808b3]">Today: ${transaction.date}</p>
                   </div>
              </div>

              <div>
                   <i class="fa-solid fa-ellipsis-vertical"></i>
              </div>

            </div>
        
        `
        transactionContainer.appendChild(div)
    }
    
})


// logout button functionality

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = 'index.html'
})