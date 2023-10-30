import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
}

const createObjectDataInput = () => {

  const objDataInput = {
    delay: refs.form.elements.delay.value,
    step: refs.form.elements.step.value,
    amount: refs.form.elements.amount.value,
  }
  return objDataInput;
}

const promises = (event) => {
  event.preventDefault()

  let intervalId = null;
  let position = 0;

  const { delay, step, amount } = createObjectDataInput() 

  let currentTimeDonePromise = Number(delay);
  let currentStepInterval = delay;

  
  
  
intervalId = setInterval(() => {
    position += 1;

    createPromise(position, currentTimeDonePromise)
      .then(({ position, currentTimeDonePromise }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${currentTimeDonePromise}ms`);
      })
      .catch(({ position, currentTimeDonePromise }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${currentTimeDonePromise}ms`);
      });
    
    
      currentTimeDonePromise += Number(step);
      currentStepInterval = Number(step);

    if (position === Number(amount)) {
      clearInterval(intervalId)
      position = 0;
      return;
    } 

    
  }, currentStepInterval);
  
}

refs.form.addEventListener('input', createObjectDataInput)
refs.form.addEventListener('submit', promises)

function createPromise(position, currentTimeDonePromise) {

  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({
        position,
        currentTimeDonePromise,
      }) 
  } else {
      reject({
        position,
        currentTimeDonePromise,
    })
  }
  })
  return promise;
}


