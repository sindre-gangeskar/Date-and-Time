function getDay() {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const day = now.getDay();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthList = [
    "December",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "January",
  ];
  document.getElementById("day").innerHTML = dayList[day];
  document.getElementById("month").innerHTML = monthList[month];
  document.getElementById("year").innerHTML = year;
}

function getDigitalTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleTimeString({
    hour: "2-digit",
    minute: "2-digit",
  });
}
setInterval(getDigitalTime, 1000);
setInterval(getDay(), 60000);

function getAbout(){
  alert("Created by Sindre Gangeskar");
}
