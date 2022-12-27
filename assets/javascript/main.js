const input = document.querySelector('textarea#text-input-field');
const output = document.querySelector('div.text-output-field');
const btnEncrypt = document.querySelector('button.btn-encrypt');
const btnDecrypt = document.querySelector('button.btn-decrypt');
const btnCopy =  document.createElement('button');

btnCopy.innerText = 'Copiar';
btnCopy.classList.add('btn');

const encrypt = (text) => {
  return text
        .replaceAll('a', 'ai')
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
}

const decrypt = (text) => {
  return text
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
}

btnEncrypt.addEventListener('click', () => {
  output.innerHTML = `<div class="text-output">${encrypt(input.value)}</div>`;
  output.append(btnCopy);
});

btnDecrypt.addEventListener('click', () => {
  output.innerHTML = `<div class="text-output">${decrypt(input.value)}</div>`;
  output.append(btnCopy);
});

btnCopy.addEventListener('click', () => {
  const text = document.querySelector('div.text-output').innerText;
  navigator.clipboard.writeText(text);
});
