// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//      console.log('promise: 2');
//    });

//  console.log('console.log: 2');

// const getRandomDelay = () => Math.ceil(Math.random() * 2000);
// const promise = new Promise((resolve, reject) => {
//   const delay = getRandomDelay();
//   // resolve({message :'Done!', delay})
//   setTimeout(() => {
//     console.log('timeOut');
//     resolve({ message: 'success', delay });
//   }, delay);
// });
// promise
//   .then(console.log)
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('end');
//   });

/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */
//
// function greet() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('hello world');
//     }, 2000);
//   });
//   return promise;
// }
// greet().then(console.log);


/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`),
 * і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1
//
// const makePromise = () =>{
//   return new Promise ((resolve, reject)=>{
//     const delay = getRandomNumber()
//     setTimeout(()=>{
//       if(delay <=2) {
//         resolve(`✅ Resolved after ${delay} sec`)
//       }
//       reject(`❌ Rejected after ${delay} sec`)
//     }, delay*1000)
//   })
// }
//
// makePromise().then(console.log).catch(console.log)



import iziToast from 'izitoast';

const form = document.querySelector('.form')
const getRandomNumber = () => Math.floor(Math.random() * 4) + 1

const createPromise = (position, delay) =>{
  return new Promise ((resolve, reject)=>{
     const should = getRandomNumber()>=2
    setTimeout(()=>{
      if(should){
        resolve({ position, delay })
      }
      reject({ position, delay })
    }, delay)
  })
}

const handleSubmit = (event)=>{
  event.preventDefault()
  const { delay, step, amount } = event.target.elements
  const delayValue = Number(delay.value)
  const stepValue = Number(step.value)
  const amountValue = Number(amount.value)

  for(let i = 0; i<amountValue; i++){
    createPromise(i+1, delayValue+stepValue*i).then(onSuccess).catch(onError)

  }
  event.target.reset()
}
form.addEventListener('submit', handleSubmit)

function onSuccess({ position, delay }) {
  iziToast.success({message: `✅ Fulfilled promise ${position} in ${delay}ms`
});
}

function onError({ position, delay }) {
  iziToast.error({message: `❌ Rejected promise ${position} in ${delay}ms`});
}