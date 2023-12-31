import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./timer-convert";

const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('button[data-start]'),
    spanDays: document.querySelector('span[data-days]'),
    spanHours: document.querySelector('span[data-hours]'),
    spanMinutes: document.querySelector('span[data-minutes]'),
    spanSeconds: document.querySelector('span[data-seconds]'),
}

refs.button.disabled = true;
let deltaTime = null;
let intervalId = null;

const addLeadingZero = (value) => {
    if (value.length > 2) {
        return value.padStart(value.length)
    }
    return value.padStart(2, "0")
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
            Notiflix.Notify.failure("Please choose a date in the future");
            return
        }
        if (selectedDates[0].getTime() > options.defaultDate.getTime()) {
            refs.button.disabled = false;
        }

        deltaTime = selectedDates[0].getTime() - options.defaultDate.getTime()
        
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        refs.spanDays.textContent = addLeadingZero(days.toString());
        refs.spanHours.textContent = addLeadingZero(hours.toString());
        refs.spanMinutes.textContent = addLeadingZero(minutes.toString());
        refs.spanSeconds.textContent = addLeadingZero(seconds.toString());
  },
};

flatpickr(refs.input, options)

const startTimer = () => {
    
    intervalId = setInterval(() => {
        deltaTime = deltaTime - 1000;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        
        refs.spanDays.textContent = addLeadingZero(days.toString());
        refs.spanHours.textContent = addLeadingZero(hours.toString());
        refs.spanMinutes.textContent = addLeadingZero(minutes.toString());
        refs.spanSeconds.textContent = addLeadingZero(seconds.toString());

        if (Number(refs.spanDays.textContent) === 0 && Number(refs.spanHours.textContent) === 0 && Number(refs.spanMinutes.textContent) === 0 && Number(refs.spanSeconds.textContent) === 0) {
            clearInterval(intervalId);
            return;
        }}, 1000)   
}

refs.button.addEventListener('click', startTimer)



