import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
}

let intervalId = null;
let counter = 0;

const createObjectDataInput = () => {

  const obj = {
    delay: refs.form.elements.delay.value,
    step: refs.form.elements.step.value,
    amount: refs.form.elements.amount.value,
  }

  return obj;
}

const promises = (event) => {
  event.preventDefault()
  const { delay, step, amount } = createObjectDataInput()



  intervalId = setInterval(() => {
    counter += 1; 
    let currentPosition = 1;


    createPromise(amount, delay)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    currentPosition += 1;
    
    if(counter === Number(amount)) {
      clearInterval(intervalId)
      return
    }
    
  }, step);

}

refs.form.addEventListener('input', createObjectDataInput)
refs.form.addEventListener('submit', promises)

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({
        position,
        delay
    })
  } else {
      reject({
      position, delay
    })
  }
  })
  console.log(promise)
  return promise;
}
