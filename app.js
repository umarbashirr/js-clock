function showTime() {
  let monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let dayName = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let month = date.getMonth();
  let day = date.getDay();
  let todayDate = date.getDate();
  var session = 'AM';

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour -= 12;
    session = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let time = `${hour}:${minutes}:${seconds} ${session}`;
  let currentDate = `${dayName[day]}, ${monthName[month]} ${todayDate} `;
  document.querySelector('.time').innerHTML = time;
  document.querySelector('.date').innerHTML = currentDate;
  setTimeout(showTime, 1000);
}

showTime();
