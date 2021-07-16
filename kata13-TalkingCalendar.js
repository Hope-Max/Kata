const talkingCalendar = function(date) {
  let array = date.split('/');
  let month = {
    '12': 'December',
    '11': 'November',
    '10': 'October',
    '09': 'September',
    '08': 'August',
    '07': 'July',
    '06': 'June',
    '05': 'May',
    '04': 'April',
    '03': 'March',
    '02': 'February',
    '01': 'January'
  };
  let ouput;

  if (array[2][0] === '0') {
    if (array[2][1] === '1') {
      day = '1st';
    } else if (array[2][1] === '2') {
      day = '2nd';
    } else if (array[2][1] === '3') {
      day = '3rd';
    } else {
      day = array[2][1] + 'th';
    }  
  } else if (array[2][0] !== '1') {
    if (array[2][1] === '1') {
      day = array[2] + 'st';
    } else if (array[2][1] === '2') {
      day = array[2] + 'nd';
    } else if (array[2][1] === '3') {
      day = array[2] + 'rd';
    } else {
      day = array[2] + 'th'
    }
  } else {
    day = array[2] + 'th'
  }
  output = month[array[1]] + ' ' + day + ', ' + array[0];
  return output;
}


console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
console.log(talkingCalendar('1987/05/05'));
console.log(talkingCalendar('1987/05/12'));
console.log(talkingCalendar('1987/05/23'));
