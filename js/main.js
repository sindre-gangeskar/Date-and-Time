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
  document.getElementById("day").innerText = dayList[day];
  document.getElementById("month").innerText = monthList[month];
  document.getElementById("year").innerText = year;
}

var set24Hrs = false;
function getDigitalTime() {
  const now = new Date();
  let lang = navigator.language;
  if (set24Hrs === false) {
    document.getElementById("currentTime").innerHTML = now.toLocaleTimeString(
      lang,
      {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    );
  } else {
    document.getElementById("currentTime").innerHTML = now.toLocaleTimeString(
      lang,
      {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    );
  }
}

function getAbout() {
  alert("Created by Sindre Gangeskar");
}

function Change() {
  set24Hrs =! set24Hrs;
  if (document.getElementById("switch").checked) {
    console.log(set24Hrs);
  } else {
    console.log(set24Hrs);
  }
}

setInterval(getDigitalTime, 1000);
setInterval(getDay, 1000);
