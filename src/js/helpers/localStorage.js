export const saveLS = function (key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`something went wrong ${error.message}`);
  }
};

export const getItemLS = function (key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(`something went wrong ${error.message}`);
  }
};

export const removeItemLS = function (key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(`something went wrong ${error.message}`);
  }
};
