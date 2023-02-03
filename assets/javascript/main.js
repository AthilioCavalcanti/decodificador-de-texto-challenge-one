const input = document.querySelector('textarea#text-input-field');
const output = document.querySelector('div.text-output-field');
const btnEncrypt = document.querySelector('button.btn-encrypt');
const btnDecrypt = document.querySelector('button.btn-decrypt');
let removeBoxAlertIn10Seconds = undefined;
const btnCopy =  document.createElement('button');
const invalidTextAlertBox = document.createElement('div');

btnCopy.innerText = 'Copiar';
btnCopy.classList.add('btn');

invalidTextAlertBox.innerHTML = '<p>Texto inválido! Por favor, insira um texto com letras minúsculas e sem acentos.</p><button onclick="removeBoxAlert()">X</button>';
invalidTextAlertBox.classList.add('box-alert');

const encrypt = (text) => {
  return text
        .replaceAll('e', 'enter')
        .replaceAll('o', 'ober')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat');
};

const decrypt = (text) => {
  return text
        .replaceAll('enter', 'e')
        .replaceAll('ober', 'o')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ufat', 'u');
};

const validateText = (text) => {
  return !/[A-ZÀ-ü]/.test(text);
}; 

const removeBoxAlert = () => {
  const box = document.querySelector('body div.container div.box-alert');
  if(box) {
    document.querySelector('body div.container').removeChild(invalidTextAlertBox);
    clearTimeout(removeBoxAlertIn10Seconds);
  }
};

btnEncrypt.addEventListener('click', () => {
  const isValidText = validateText(input.value);
  if(input.value && isValidText) {
    output.innerHTML = `<div class="text-output">${encrypt(input.value)}</div>`;
    output.append(btnCopy);
    if (btnCopy.disabled) {
      btnCopy.innerText = 'Copiar';
      btnCopy.disabled = false;
    } 
  } else {
    if(removeBoxAlertIn10Seconds) {
      clearTimeout(removeBoxAlertIn10Seconds);
    }
    const body = document.querySelector('body div.container');
    body.append(invalidTextAlertBox);
    removeBoxAlertIn10Seconds = setTimeout(() => {
      document.querySelector('body div.container').removeChild(invalidTextAlertBox);
    }, 10 * 1000);
  }
});

btnDecrypt.addEventListener('click', () => {
  const isValidText = validateText(input.value);
  if(input.value && isValidText) {
    output.innerHTML = `<div class="text-output">${decrypt(input.value)}</div>`;
    output.append(btnCopy);
    if (btnCopy.disabled) {
      btnCopy.innerText = 'Copiar';
      btnCopy.disabled = false;
    }
  } else {
    if(removeBoxAlertIn10Seconds) {
      clearTimeout(removeBoxAlertIn10Seconds);
    }
    const body = document.querySelector('body div.container');
    body.append(invalidTextAlertBox);
    removeBoxAlertIn10Seconds = setTimeout(() => {
      document.querySelector('body div.container').removeChild(invalidTextAlertBox);
    }, 10 * 1000);
  }
});

btnCopy.addEventListener('click', () => {
  const text = document.querySelector('div.text-output').innerText;
  navigator.clipboard.writeText(text);
  btnCopy.innerText = 'Copiado!'
  btnCopy.disabled = true;
});
