export const renderOptions = (listItems, selector) => {
    const markUp = listItems.map(el => `<option value="${el}">${el}</option>`).join('');
    selector.innerHTML = markUp;
}