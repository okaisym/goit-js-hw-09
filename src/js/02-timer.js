import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";

const flatpickr = require("flatpickr");
const currentDate = new Date();
const btnStart = document.querySelector('[data-start]');
const inputPicker = document.querySelector('#datetime-picker')
const minsEl = document.querySelector('[data-minutes]');
const hoursEl = document.querySelector('[data-hours]');
const dayEl = document.querySelector('[data-days]');
const secEl = document.querySelector('[data-seconds]');

let interval;
btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

        const selectedDate = selectedDates[0];
        if (selectedDate <= currentDate) {
            window.alert("Please choose a date in the future");
        } else if (selectedDate > currentDate) { 
            btnStart.disabled = false;
        };
    console.log(selectedDates[0]);
    },

  };
  
  const calender = flatpickr(inputPicker, options);

  const setTimer = () => {
    const selectedDate = calender.selectedDates[0];
    if (selectedDate > currentDate) {
        const timeDifference = selectedDate - currentDate;
        startCountdown(timeDifference);
        } else {
            window.alert('Please choose a date in the future');
        }
  };

  function startCountdown(ms) {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(ms);

        minsEl.textContent = addLeadingZero(minutes);
        hoursEl.textContent = addLeadingZero(hours);
        dayEl.textContent = addLeadingZero(days);
        secEl.textContent = addLeadingZero(seconds);

        if (ms <= 0) {
            clearInterval(interval);
        } else {
            ms -= 1000;
        }},
    1000); 
  };

  btnStart.addEventListener('click', setTimer);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value.toString();
  }