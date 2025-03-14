/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 * Promise.allSettled(array) - повертає проміс, який виконується коли всі отримані проміси завершені (успішно виконані або відхилені),
 * міститиме масив результатів отриманих промісів (status і value для успішних, status та reason для неуспішних)
 *
 * Promise.any(array) - як тільки один із промісів виконається успішно, метод поверне значення виконаного промісу.
 *  Якщо жоден із промісів не завершиться успішно, тоді повернутий Promise буде відхилено
 */
/*

 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */
/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи 
на екран: `✅ ${Framework_name} won with ${delay} ms`
 * або результат помилки: `❌ ${error}! ${name} rejected in ${delay} ms`
 */

// const onSuccess = ({ framework, delay }) => {
//   console.log(`✅ ${framework} won with ${delay} ms`);
// };

// const onError = ({ framework, delay, error }) => {
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// };

// const frameworks = ['React', 'Vue', 'Angular'];

// const getRandomDelay = () => Math.ceil(Math.random() * 2000);

// const promises = frameworks.map(framework => {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       if (delay < 500) {
//         resolve({ framework, delay });
//       }
//       reject({ error: 'Promise error', framework, delay });
//     }, delay);
//   });
// });

// Promise.race(promises).then(onSuccess).catch(OnError);

/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: `✅ ${Framework_name} fulfilled in ${delay} ms`
 * Або з якою затримкою зареджектився один із них: `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 */
// Promise.all(promises)
//   .then(resolve => {
//     resolve.forEach(onSuccess);
//   })
//   .catch(OnError);

/*
 * За допомогою Promise.allSettled отримайте масив результатів.
 * Виведіть на екран інформацію, з яким результатом виконався проміс для кожного фреймфорка:
 * `✅ ${Framework_name} fulfilled in ${delay} ms`
 * `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 *
 * Приклад відповіді:
 * {status: "fulfilled", value: 99},
 * {status: "rejected", reason: Error: an error}
 */
// Promise.allSettled(promises).then(resolve => {
//   resolve.forEach(response => {
//     if (response.status === 'rejected') {
//       onError(response.reason);
//     } else {
//       onSuccess(response.value);
//     }
//   });
// });

/*
 * За допомогою Promise.any дочекайтеся завантаження першого успішного промісу та виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms` або результат помилки кожного промісу в catch: `❌ ${error}! ${name} rejected in ${delay} ms`
 * Приклад об'єкта помилки в catch:
 * {
 * errors: (3) [{…}, {…}, {…}]
 * message: "All promises were rejected"
 * stack: "AggregateError: All promises were rejected"
 * }
 */

// Promise.any(promises)
//   .then(onSuccess)
//   .catch(reject => {
//     reject.errors.toSorted((a, b) => b.delay - a.delay).forEach(onError);
//   });

/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

// const getData = () =>
//   new Promise(res => {
//     setTimeout(() => {
//       const data = 1;
//       //console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getNewData = () =>
//   new Promise(res => {
//     setTimeout(() => {
//       const data = 2;
//       //console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getAnotherData = () =>
//   new Promise(res => {
//     setTimeout(() => {
//       const data = 3;
//       //console.log(data);
//       res(data);
//     }, 1000);
//   });

// const getLastData = () =>
//   new Promise(res => {
//     setTimeout(() => {
//       const data = 4;
//       // console.log(data);
//       res(data);
//     }, 1000);
//   });

// const array = [];
// getData()
//   .then(response => {
//     array.push(response);
//     return getNewData();
//   })
//   .then(response => {
//     array.push(response);
//     return getAnotherData();
//   })
//   .then(response => {
//     array.push(response);
//     return getLastData();
//   })
//   .then(response => {
//     array.push(response);
//     console.log(array);
//   });

// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(
//   result => {
//     console.log(result);
//   }
// );

/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */
const createPromise = (delay, callBack) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  }).then(callBack);
};
const countWithDelay = (delay, times, interval) => {
  let amount = 0;
  const counterAmount = counterInterval => {
    amount += 1;
    console.log(`delay: ${counterInterval || delay}`, 'count', amount);
    if (amount === times) return;
    setTimeout(() => {
      counterAmount(interval);
    }, interval);
  };
  createPromise(delay, counterAmount);
};
countWithDelay(1000, 3, 2000);
