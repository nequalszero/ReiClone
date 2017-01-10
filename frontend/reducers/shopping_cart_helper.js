const findItemIdx = (currentItems, productId) => {
  let targetIdx;

  for (let i = 0; i < currentItems.length; i++) {
    if (currentItems[i].product_id === productId) {
      targetIdx = i;
      break;
    }
  }

  return targetIdx;
};

export const saveItemToLocalStorage = (item) => {
  let existingItem = updateQuantityInLocalStorage(item);

  if (existingItem === undefined) {
    let items = JSON.parse(window.localStorage.items);
    items.push(item);
    window.localStorage.setItem("items", JSON.stringify(items));
  }
};

export const deleteItemFromLocalStorage = (item) => {
  let items = JSON.parse(window.localStorage.items);
  let targetIdx = findItemIdx(items, item.product_id);

  window.localStorage.items = JSON.stringify(
    [...items.slice(0, targetIdx), ...items.slice(targetIdx + 1)]
  );
};

export const updateQuantityInLocalStorage = item => {
  let items = JSON.parse(window.localStorage.items);
  let targetIdx = findItemIdx(items, item.product_id);

  if (targetIdx !== undefined) {
    window.localStorage.setItem("items", JSON.stringify([
      item,
      ...items.slice(0, targetIdx),
      ...items.slice(targetIdx + 1)
    ]));
  }
  return targetIdx;
};

export const emptyLocalStorageItems = () => {
  window.localStorage.items = JSON.stringify([]);
};

export const removeItemHelper = (currentItems, itemToDelete) => {
  let targetIdx = findItemIdx(currentItems, itemToDelete.product_id);
  if (targetIdx === undefined)
    throw "ERROR shopping_cart_helper#removeItemHelper: cannot find item " +
          "to delete";

  return [
    ...currentItems.slice(0, targetIdx),
    ...currentItems.slice(targetIdx+1)
  ];
};

// Updates item quantity and brings item to front of array
export const updateQuantityHelper = (currentItems, updatedItem) => {
  let targetIdx = findItemIdx(currentItems, updatedItem.product_id);
  if (targetIdx === undefined)
    throw "ERROR shopping_cart_helper#updateQuantityHelper: cannot find item " +
          "to update";

  return [
    Object.assign({}, updatedItem),
    ...currentItems.slice(0, targetIdx),
    ...currentItems.slice(targetIdx+1)
  ];
};

export const pushOrUpdateLocal = (currentItems, newItem) => {
  let targetIdx = findItemIdx(currentItems, newItem.product_id);

  if (targetIdx !== undefined){
    newItem.quantity += parseInt(currentItems[targetIdx].quantity);
    return [
      newItem,
      ...currentItems.splice(0, targetIdx),
      ...currentItems.splice(targetIdx + 1)
    ];
  } else {
    return [newItem, ...currentItems];
  }
};
