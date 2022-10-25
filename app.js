const value = prompt(
  "Enter the time for the counter in format \n for example :- 10:00 PM 2022 11 october "
);
const endDate = value;
// const endDate = "  10:00 PM 2022 11 october ";
const da = document.getElementById("days");
const hr = document.getElementById("hours");
const mi = document.getElementById("minutes");
const se = document.getElementById("secondss");
console.log(da);
console.log(hr);
console.log(mi);
console.log(se);
/* comverting sec to days
 1 minute = 60 sec
1 hr = 60 min
1 hr = (60*60) sec = 3600 sec
1 day = 24 hr
1 days = (24 * 3600) sec
x days = (no of seconds / 3600)/24

30 DAYS = NO OF SECONDS /3600/24*30

x hour = (no of second / 3600)%24  subtracting the no of days which has been included as we have taken the days section out

x minute = (no of second/60)%60;



*/
const timerset = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  const miliSecToSec = diff / 1000;
  console.log(end);
  console.log(now);
  console.log(diff);
  console.log(miliSecToSec);
  if (diff <= 0) {
    clearInterval(timer);
    alert("The countdown has completed");
    return;
  }

  // converting to days

  const days = Math.floor(miliSecToSec / 3600 / 24);
  console.log(days);
  da.value = days;

  // converting to hours

  const hours = Math.floor((miliSecToSec / 3600) % 24);
  console.log(hours);
  hr.value = hours;
  // convertin to minture

  const minutes = Math.floor((miliSecToSec / 60) % 60);
  console.log(minutes);
  mi.value = minutes;

  const seconds = Math.floor(miliSecToSec % 60);
  console.log(seconds);
  se.value = seconds;
};
// timerset;
const timer = setInterval(timerset, 1000);
