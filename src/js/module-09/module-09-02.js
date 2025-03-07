

import expenses from "./transactions";
import { calculateTotalExpenses, getExpensesByCategory } from './expenses.js';
import { uniqCategory } from './uniqCategory.js';
import { refs } from "./refs.js";
import { renderOptions } from "./renderOptions.js";

// ## 1. Уявіть, що ви розробляєте програму для обліку фінансів. Вам потрібно розділити код на декілька файлів з різними функціями.

// #### 1.1. Створіть файл transactions.js який містить в собі масив об'єктів витрат користувача. Зробіть дефолтний експорт з цього файла аби даними можна було користуватися в інших файлах.
// console.log(expenses);

// #### 1.2. Створіть файл expenses.js, який містить наступні функції і одразу експортуйте їх іменованим експортом:

// - `calculateTotalExpenses`, яка приймає масив об'єктів і рахує їхню загальну
//   вартість
// - `getExpensesByCategory`, яка приймає той же ж масив об'єктів і назву
//   категорії, виклик функції повертає масив об'єктів, які мають таку ж категорію яка була передана у функцію
// #### 1.4. Додайте у розмітку елемент Select, створіть для нього стільки елементів Option, скільки існує категорій у масиві expense. Додайте функціонал, що дозволить при зміні категорії виводити інформацію про витрати за обраною категорією


const category = uniqCategory(expenses)

renderOptions(category, refs.select);
const updateTextContent = (array, category) => {
    const arrayCategory = getExpensesByCategory(array, category);
    const totalExpenses = calculateTotalExpenses(arrayCategory);
    refs.paragraphResult.textContent = `total Expenses by Categorie ${category}: ${totalExpenses}`;
}

const onSelectChange = (event) => {
    updateTextContent(expenses, event.target.value)
}
refs.select.addEventListener('change', onSelectChange);

updateTextContent(expenses, refs.select.value)