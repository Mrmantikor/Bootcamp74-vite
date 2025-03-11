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

function greet() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('hello world');
    }, 2000);
  });
  return promise;
}
greet().then(console.log);
