let students = [
    {
      name: "Ayla",
      surname: "Fazilova",
      age: 20,
      avgPoint: 78,
      fail: false,
      teacher: [
        { name: "Rena", subject: "Math" },
        { name: "Nigar", subject: "Physics" },
        { name: "Lala", subject: "Chemistry" },
        { name: "Sevda", subject: "Biology" }
      ]
    },
    {
      name: "Nigar",
      surname: "Mammadova",
      age: 20,
      avgPoint: 82,
      fail: false,
      teacher: [
        { name: "Rena", subject: "Math" },
        { name: "Nigar", subject: "Physics" },
        { name: "Lala", subject: "Chemistry" },
        { name: "Sevda", subject: "Biology" }
      ]
    },
    {
      name: "Lala",
      surname: "Jafarova",
      age: 21,
      avgPoint: 90,
      fail: false,
      teacher: [
        { name: "Aysel", subject: "Math" },
        { name: "Namiq", subject: "Physics" },
        { name: "Layla", subject: "Chemistry" },
        { name: "Ramin", subject: "Biology" }
      ]
    },
    {
      name: "Nargiz",
      surname: "Alizade",
      age: 19,
      avgPoint: 65,
      fail: true,
      teacher: [
        { name: "Rena", subject: "Math" },
        { name: "Nigar", subject: "Physics" },
        { name: "Lala", subject: "Chemistry" },
        { name: "Sevda", subject: "Biology" }
      ]
    },
    {
      name: "Sevda",
      surname: "Huseynova",
      age: 22,
      avgPoint: 77,
      fail: false,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Aysel",
      surname: "Rzayeva",
      age: 23,
      avgPoint: 68,
      fail: true,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Rena",
      surname: "Guliyeva",
      age: 20,
      avgPoint: 82,
      fail: false,
      teacher: [
        { name: "Sevda", subject: "Math" },
        { name: "Namiq", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Layla",
      surname: "Akramova",
      age: 21,
      avgPoint: 90,
      fail: false,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Ramin",
      surname: "Ibrahimov",
      age: 24,
      avgPoint: 88,
      fail: false,
      teacher: [
        { name: "Nigar", subject: "Math" },
        { name: "Aysel", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Namiq",
      surname: "Quliyev",
      age: 19,
      avgPoint: 66,
      fail: true,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Rena",
      surname: "Aslanova",
      age: 20,
      avgPoint: 78,
      fail: false,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    },
    {
      name: "Tural",
      surname: "Aliyev",
      age: 21,
      avgPoint: 77,
      fail: false,
      teacher: [
        { name: "Namiq", subject: "Math" },
        { name: "Rena", subject: "Physics" },
        { name: "Ramin", subject: "Chemistry" },
        { name: "Aysel", subject: "Biology" }
      ]
    }
  ];
  
  // Task 1: Log all student names
  students.forEach(element => console.log(element.name));
  
  // Task 2: Log each student’s name, surname, and average point
  students.forEach(element => console.log(`Ad: ${element.name} soyad: ${element.surname}, orta bal: ${element.avgPoint}`));
  
  // Task 3: Get the list of students with an average point higher than 80
  let highScoringStudents = students.filter(element => element.avgPoint > 80);
  console.log("Students with avg point > 80:", highScoringStudents);
  
  // Task 4: Get the list of students who failed
  let failedStudents = students.filter(element => element.fail);
  console.log("Failed students:", failedStudents);
  
  // Task 5: Get the list of students taught by teacher 'Rena'
  let studentsTaughtByRena = students.filter(element => element.teacher.some(teacher => teacher.name === "Rena"));
  console.log("Students taught by Rena:", studentsTaughtByRena);
  
  // Task 6: Sort students by average point
  let sortedByAvgPoint = students.sort((a, b) => b.avgPoint - a.avgPoint);
  console.log("Students sorted by average point:", sortedByAvgPoint);
  
  // Task 7: Sort students by name in alphabetical order
  let sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Students sorted by name:", sortedByName);
  
  // Task 8: Get the names of teachers for students aged 20
  let teachersForAge20 = students.filter(student => student.age === 20).flatMap(student => student.teacher.map(teacher => teacher.name));
  console.log("Teachers for students aged 20:", teachersForAge20);
  
  // Task 9: Get the list of students and show their names with the number of teachers they have
  students.forEach(student => {
    console.log(`Ad: ${student.name}, teacher count: ${student.teacher.length}`);
  });
  
  // Task 10: Find the student with the highest average point
  let topStudent = students.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max), students[0]);
  console.log("Student with the highest average point:", topStudent);
  
  // Task 11: Capitalize teacher names
  students.forEach(student => {
    student.teacher.forEach(teacher => {
      teacher.name = teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1);
    });
  });
  console.log("Students with capitalized teacher names:", students);
  