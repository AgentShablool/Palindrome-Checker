'use strict';

const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
result.style.display = 'none';

checkBtn.addEventListener('click', () => {
  const text = textInput.value;
  const isPalindrome = checkPalindrome(text);
  result.textContent = isPalindrome;
  console.log(isPalindrome);
  if (isPalindrome !== undefined) result.style.display = 'flex';
});

function checkPalindrome(text) {
  if (text === '') return alert('Please input a value');

  const textLowerCase = text.toLowerCase();
  const removeCharacters = textLowerCase.replace(/[^a-zA-Z0-9]/g, '');
  const reversedText = removeCharacters.split('').reverse().join('');
  console.log(textLowerCase, removeCharacters, reversedText);
  return removeCharacters === reversedText
    ? text + ' is a palindrome'
    : text + ' is not a palindrome';
}
