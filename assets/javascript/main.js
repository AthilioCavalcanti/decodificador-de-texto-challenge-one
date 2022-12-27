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
        .replaceAll('a', 'ai')
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
};

const decrypt = (text) => {
  return text
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
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
  if(isValidText) {
    output.innerHTML = `<div class="text-output">${encrypt(input.value)}</div>`;
    output.append(btnCopy);
  } else {
    const body = document.querySelector('body div.container');
    body.append(invalidTextAlertBox);
    removeBoxAlertIn10Seconds = setTimeout(() => {
      document.querySelector('body div.container').removeChild(invalidTextAlertBox);
    }, 10 * 1000);
  }
});

btnDecrypt.addEventListener('click', () => {
  output.innerHTML = `<div class="text-output">${decrypt(input.value)}</div>`;
  output.append(btnCopy);
});

btnCopy.addEventListener('click', () => {
  const text = document.querySelector('div.text-output').innerText;
  navigator.clipboard.writeText(text);
});
