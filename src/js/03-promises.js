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

  const { delay, step, amount } = createObjectDataInput() 
  let delayTime = Number(delay);

  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delayTime)
      .then(({ position, delayTime }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayTime}ms`);
      })
      .catch(({ position, delayTime }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayTime}ms`);
      });
    
    delayTime += Number(step)
  }}

function createPromise(position, delayTime) {

  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       if (shouldResolve) {
      resolve({
        position,
        delayTime,
      }) 
  } else {
      reject({
        position,
        delayTime,
    })
  }}, delayTime)
   
  })
  return promise;
}

refs.form.addEventListener('input', createObjectDataInput)
refs.form.addEventListener('submit', promises)