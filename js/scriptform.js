const namef = document.getElementById('name-txt')
const email = document.getElementById('email-txt')
const phone = document.getElementById('phone-txt')
const address = document.getElementById('address-txt')
const femaleB = document.getElementById('female-txt')
const maleB = document.getElementById('male-txt')
const checkBox = document.getElementById('checkbox-txt')
const form = document.getElementById('member-form')

const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-email')
const errorPhone = document.getElementById('error-phone')
const errorFeOMa = document.getElementById('error-FeMa')
const erroraddress = document.getElementById('error-address')
const errorCB = document.getElementById('error-CB')
const error = document.getElementById('error-submit')

form.addEventListener('submit',(e) => {
    let msgN = []
    let msgE = []
    let msgP = []
    let msgFM = []
    let msgCB = []
    let msaDD = []

    if (!namef.value) {
        msgN.push('Please fill your name!')
    }
    else if(namef.value.length < 5) {
        msgN.push('Name must be more than 5 characters!')
    }

    if (!email.value) {
        msgE.push('Please fill your email address!')
    }
    else if(!email.value.endsWith('@gmail.com')) {
        msgE.push('Email address must end with @gmail.com')
    }

    if(!phone.value){
        msgP.push('Please fill your phone number!')
    }

    if(!address.value){
        msaDD.push('Please fill your Address!')
    }

    if(!femaleB.checked && !maleB.checked){
        msgFM.push('Please choose your gender!')
    }

    if(!checkBox.checked){
        msgCB.push('You must tick the checkbox to subscribe!')
    }

    if(msgN.length > 0) {
        e.preventDefault()
        errorName.innerText = msgN.join(', ')
    }
    if(msgE.length > 0) {
        e.preventDefault()
        errorEmail.innerText = msgE.join(', ')
    }
    if(msgP.length > 0) {
        e.preventDefault()
        errorPhone.innerText = msgP.join(', ')
    }

    if(msaDD.length > 0){
        e.preventDefault()
        erroraddress.innerText = msaDD.join(', ')
    }

    if(msgFM.length > 0) {
        e.preventDefault()
        errorFeOMa.innerText = msgFM.join(', ')
    }
    if(msgCB.length > 0) {
        e.preventDefault()
        errorCB.innerText = msgCB.join(', ')
    }
})