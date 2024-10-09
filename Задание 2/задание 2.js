const grades = [];

// заполняем массив случайными баллами для 12 студентов
for (let i = 0; i < 12; i++) {
  grades.push(Math.ceil(Math.random() * 100));
}
console.log(grades);

// Выводим средний балл
let averegeScore = 0;
grades.forEach(function (grade) {
  averegeScore = averegeScore + grade;
});
const totalGrade = Math.ceil(averegeScore / grades.length);
console.log(`Средний балл: ${totalGrade}`);

// Выводим максимальный балл
const maxGrade = Math.max(...grades);
console.log(`Максимальный балл: ${maxGrade}`);

// Выводим минимальный балл
const minGrade = Math.min(...grades);
console.log(`Минимальный балл: ${minGrade}`);

// Количество студентов с положительной оценкой
const positiveGrade = grades.filter(function (grade) {
  return grade > 60 || grade === 60;
});
console.log(`Студентов с положительной оценкой : ${positiveGrade.length}`);

// Количество студентов с отрицательной  оценкой
const negativeGrade = grades.filter(function (grade) {
  return grade < 60;
});
console.log(`Студентов с отрицательной оценкой : ${negativeGrade.length}`);

// Преобразование оценок в буквкнные значения
const newGrade = grades.map(function (grade) {
  if (grade >= 80 && grade <= 100) {
    return "A";
  } else if (grade >= 60) {
    return "B";
  } else if (grade >= 40) {
    return "C";
  } else if (grade >= 20) {
    return "D";
  } else {
    return "E";
  }
});
console.log(newGrade);
