import Vue from 'vue'
// Фильтр для склонения слова после числового значения. Пример: {{ 12 | numberWord(['товар', 'товара', 'товаров']) }} -> 12 товаров
Vue.filter('numberWord', function (number, wordsArr) {
  const mappedValue = Math.abs(number) % 100
  const num = mappedValue % 10
  if (mappedValue > 10 && mappedValue < 20) return number + ' ' + wordsArr[2]
  if (num > 1 && num < 5) return number + ' ' + wordsArr[1]
  if (num === 1) return number + ' ' + wordsArr[0]
  return number + ' ' + wordsArr[2]
})
