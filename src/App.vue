<template>
    <div class="App">
        <HeaderComponent :sortingBy="sortingBy" :setSortingBy="setSortingBy" />
        <div class="MainContent">
            <FormComponent
                :addItem="addItem"
                :setShowNotification="setShowNotification"
            />
            <GoodsList :items="sortedItems" :deleteItem="deleteItem" />
        </div>
        <Notification v-show="showNotification" />
    </div>
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent';
    import FormComponent from '@/components/FormComponent';
    import GoodsList from '@/components/GoodsList';
    import Notification from '@/components/Notification';
    import getItems from '@/helpers/getItems';
    import deleteItemById from '@/helpers/deleteItemById';
    import sortItems from '@/helpers/sortItems';
    import addItemToItems from '@/helpers/addItemToItems';
    export default {
        components: {
            HeaderComponent,
            FormComponent,
            GoodsList,
            Notification,
        },
        data() {
            return {
                sortingBy: 'По умолчанию',
                showNotification: false,
                items: [],
            };
        },
        computed: {
            sortedItems() {
                return sortItems(this.items, this.sortingBy);
            },
        },
        methods: {
            setSortingBy(data) {
                this.sortingBy = data;
            },
            deleteItem(id) {
                this.items = deleteItemById(id, this.items);
            },
            addItem(itemData) {
                this.items = addItemToItems(itemData, this.items);
            },
            setShowNotification(value) {
                this.showNotification = value;
            },
            getItems,
            deleteItemById,
            sortItems,
            addItemToItems,
        },
        mounted() {
            this.items = getItems();
        },
        updated() {
            if (this.items.length > 0) {
                localStorage.setItem('goods', JSON.stringify(this.items));
            } else {
                localStorage.removeItem('goods');
            }
        },
    };
</script>

<style lang="scss" scoped>
    .App {
        margin: 32px;
        position: relative;
    }

    .MainContent {
        display: flex;
        gap: 16px;
    }

    @media screen and (max-width: 768px) {
        .MainContent {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
