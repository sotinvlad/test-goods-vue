import defaultItems from '@/assets/goods.json';

const getItems = () => {
    const items = localStorage.getItem('goods');
    if (items == null) {
        return defaultItems;
    }
    return JSON.parse(items);
};

export default getItems;
