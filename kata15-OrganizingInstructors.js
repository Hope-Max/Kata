const organizeInstructors = function(instructors) {
  let output = {};
  let courseList = [];

  for (let i = 0; i < instructors.length; i++) {
    let lesson = instructors[i]['course'];
    let teacher = instructors[i]['name']
    if (courseList.includes(lesson)) {
      output[lesson].push(teacher);
    } else {
      output[lesson] = [teacher];
      courseList.push(lesson);
    }
  }
  return output;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));