const instructorWithLongestName = function(instructors) {
  let lengthOfLongestName = instructors[0]['name'].length;
  let listOfIndex = [];
  listOfIndex.push(0);

  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i]['name'].length > lengthOfLongestName) {
      listOfIndex = [];
      listOfIndex.push(i);
      lengthOfLongestName = instructors[i]['name'].length;
    } else if (instructors[i]['name'].length === lengthOfLongestName) {
      listOfIndex.push(i);
    }
  } 
  for (let j = 0; j < listOfIndex.length; j++) {
    console.log(instructors[listOfIndex[j]]);
  }
}

instructorWithLongestName([
  {name: 'Samuel', course: 'iOS'},
  {name: 'Jeremiah', course: 'Web'},
  {name: 'Ophilia', course: 'Web'},
  {name: 'Donald', course: 'Web'}
]);
instructorWithLongestName([
  {name: 'Matthew', course: 'Web'},
  {name: 'David', course: 'iOS'},
  {name: 'Domascus', course: 'Web'}
]);
instructorWithLongestName([
  {name: 'Ray', course: 'Web'},
  {name: 'David', course: 'iOS'},
  {name: 'MaxLi', course: 'Web'}
]);