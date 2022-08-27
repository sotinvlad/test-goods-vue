const addItemToItems = (itemData, items) => {
    itemData.id = new Date();
    return [itemData, ...items];
};

export default addItemToItems;
