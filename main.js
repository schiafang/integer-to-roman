const arabicNumerals = document.querySelector('.arabic-numerals')
const romanNumerals = document.querySelector('.roman-numerals')

const toRoman = (number) => {
  const romanSymbol = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 }
  let romanNumerals = ''
  for (let key in romanSymbol) {
    const digits = Math.floor(number / romanSymbol[key])
    romanNumerals += key.repeat(digits)
    number -= romanSymbol[key] * digits
  }
  return romanNumerals
}

function switchToRoman() {
  let textContent = `${toRoman(Number(arabicNumerals.value))}`
  romanNumerals.innerText = textContent
}
// function valueRange() {
//   if ((Number(arabicNumerals.value) < 1 || Number(arabicNumerals.value) > 3999 || (arabicNumerals.value) === ''))
//     alert('only switch number 1-3999')
// }



arabicNumerals.addEventListener('input', event => {
  if (Number(arabicNumerals.value) < 0 || Number(arabicNumerals.value) > 3999) { alert('please enter number 1 - 3999') }

  switchToRoman()
})

