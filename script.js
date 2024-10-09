const students = [
  { name: "john", age: 20 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
];

students.sort(function (a, b) {
  return a.age - b.age;
});

console.log(students);
