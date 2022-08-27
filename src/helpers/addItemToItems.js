const addItemToItems = (itemData, items) => {
    itemData.id = new Date();
    itemData.itemPrice = itemData.itemPrice
        .split('')
        .filter((e) => e != ' ')
        .join('');
    return [itemData, ...items];
};

export default addItemToItems;
