import { ref, push } from 'firebase/database'
import { db } from './libs/firebaseConfig'

// call crypto-js npm 
// *IMPORTANT* anytime changes are made to program files after you save the files run the command in the terminal to compile code to be able to use npm module on browser page "browserify index.js -o dist/bundle.js"

var crypto = require('crypto-js')
const { v4: uuidv4 } = require('uuid');

// Variables
const userInput = document.querySelector('#textInput')
const encryptButton = document.querySelector('#submit-encrypt')
const encryptionDisplayBox = document.querySelector('.text-view')
const userInputDecryption = document.querySelector('#textInputD')
const decryptButton = document.querySelector('#submit-decrypt')
const decryptionDisplayBox = document.querySelector('.text-view-decryption')
const copyEncryptionButton = document.querySelector('#copy-button')

// create array to store encryptions with keys and text as objects
let encryptionsArray = []
let encryption = ''

// event listeners
encryptButton.addEventListener('click', function (e) {
    e.preventDefault()
    encryptUserInput(userInput.value)
    onWriteData()
})

decryptButton.addEventListener('click', function (e) {
    e.preventDefault()
    decryptUserInput(userInputDecryption.value)
})
copyEncryptionButton.addEventListener('click', function (e) {
    e.preventDefault()
    copyEncryption(encryption)
})

// ----------
// functions
// ----------

function onWriteData(e) {
    e.preventDefault()

}

function encryptUserInput(userInput) {
    // Create random unique key
    let uniqueKey = uuidv4()
    // encrypt code with aes
    encryption = crypto.AES.encrypt(userInput, uniqueKey)
    // create the encryption, key, and message as an object
    encryptedObject = {
        key: uniqueKey,
        encryption: encryption.toString()
    }
    // push object to array
    encryptionsArray.push(encryptedObject)

    // call display encryption function
    displayEncryption(encryption.toString())
}

function displayEncryption(encryptionString) {
    encryptionDisplayBox.innerHTML = ''
    let content = `
    <p class="encrypted-string">${encryptionString}</p>
    `
    encryptionDisplayBox.insertAdjacentHTML('afterbegin', content)

    copyEncryption(encryptionString)
}

function decryptUserInput(userInput) {
    let existingEncryption = encryptionsArray.find(encryption => encryption.encryption === userInput)

    if (existingEncryption === undefined) {
        window.alert('Encryption not stored in program array. Please only use encryptions created with this program.')
    } else {
        let decryption = crypto.AES.decrypt(existingEncryption.encryption, existingEncryption.key)
        displayDecryption(decryption.toString(crypto.enc.Utf8))
    }
}

function displayDecryption(decryptionString) {
    let content = `
    <p>${decryptionString}</p>
    `
    decryptionDisplayBox.insertAdjacentHTML('afterbegin', content)
}

// copy to clipboard function
function copyEncryption(encryptionString) {
    navigator.clipboard.writeText(encryptionString)

}
