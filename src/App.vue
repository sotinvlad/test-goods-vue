<template>
    <div class="App">
        <HeaderComponent :sortingBy="sortingBy" :setSortingBy="setSortingBy" />
        <div class="MainContent">
            <FormComponent
                :addItem="addItem"
                :setShowNotification="setShowNotification"
            />
            <GoodsList :items="items" :deleteItem="deleteItem" />
        </div>
        <Notification v-show="showNotification" />
    </div>
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent';
    import FormComponent from '@/components/FormComponent.vue';
    import GoodsList from '@/components/GoodsList.vue';
    import Notification from '@/components/Notification.vue';
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
        methods: {
            setSortingBy(data) {
                this.sortingBy = data;
                this.items = sortItems(this.items, data);
            },
            getItems,
            deleteItemById,
            sortItems,
            addItemToItems,
            deleteItem(id) {
                const newArrayOfItems = deleteItemById(id, this.items);
                this.items = sortItems(newArrayOfItems, this.sortingBy);
            },
            addItem(itemData) {
                const newArrayOfItems = addItemToItems(itemData, this.items);
                this.items = sortItems(newArrayOfItems, this.sortingBy);
            },
            setShowNotification(value) {
                this.showNotification = value;
            },
        },
        mounted() {
            this.items = sortItems(getItems(), this.sortingBy);
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
