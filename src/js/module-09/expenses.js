export const calculateTotalExpenses = (listItems) => listItems.reduce((acc, item) => acc += item.amount, 0);

export const getExpensesByCategory = (listItems, category) => listItems.filter(el => el.category === category); 