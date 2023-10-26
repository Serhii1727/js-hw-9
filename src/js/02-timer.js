import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./timer-convert";

refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('button[data-start]'),
    spanDays: document.querySelector('span[data-days]'),
    spanHours: document.querySelector('span[data-hours]'),
    spanMinutes: document.querySelector('span[data-minutes]'),
    spanSeconds: document.querySelector('span[data-seconds]'),
}

refs.button.disabled = true;
let deltaTime = null;

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
        refs.spanDays.textContent = days;
        refs.spanHours.textContent = hours;
        refs.spanMinutes.textContent = minutes;
        refs.spanSeconds.textContent = seconds;

  },
};

flatpickr(refs.input, options)

const startTimer = () => {
}

refs.button.addEventListener('click', startTimer)



