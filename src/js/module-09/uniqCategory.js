export const uniqCategory = (listItems) => {
    return listItems.map(el => el.category).filter((el, indx, array) => array.indexOf(el) === indx);
}