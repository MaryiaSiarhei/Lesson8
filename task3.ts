// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

function checkRepeatLetters(str: string) {
  return new Set(str.toLowerCase()).size !== str.length;
}
console.log(checkRepeatLetters(str1));
console.log(checkRepeatLetters(str2));
/*function checkRepeatLetters(str: string) {
  return str
    .toLowerCase()
    .split("")
    .some((e, _, array) => {
      return array.filter((value) => value === e).length > 1;
    });
}
console.log(checkRepeatLetters(str1));
console.log(checkRepeatLetters(str2));
*/
/*function checkRepeatLetters(str: string) {
  return str
    .toLowerCase()
    .split("")
    .some((e, i, array) => {
      return array.includes(e, i + 1);
    });
}
console.log(checkRepeatLetters(str1));
console.log(checkRepeatLetters(str2));*/
