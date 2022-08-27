const sortItems = (items, sortingBy) => {
    let newItems = [...items];
    if (sortingBy === 'По умолчанию') {
        newItems = newItems.sort((a, b) => {
            return a.itemTitle.toUpperCase() > b.itemTitle.toUpperCase()
                ? 1
                : -1;
        });
    }
    if (sortingBy === 'По возрастанию') {
        newItems = newItems.sort((a, b) => {
            return Number(a.itemPrice) > Number(b.itemPrice) ? 1 : -1;
        });
    }
    if (sortingBy === 'По убыванию') {
        newItems = newItems.sort((a, b) => {
            return Number(a.itemPrice) < Number(b.itemPrice) ? 1 : -1;
        });
    }
    return newItems;
};

export default sortItems;
