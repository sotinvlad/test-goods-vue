<template>
    <transition-group name="list-complete" tag="div" class="GoodsList">
        <GoodItem
            v-for="item in $props.items"
            :key="item.id"
            :item="item"
            :deleteItem="deleteItem"
            class="list-complete-item"
        />
    </transition-group>
</template>

<script>
    import GoodItem from '@/components/GoodItem';
    export default {
        components: {
            GoodItem,
        },
        props: {
            items: {
                type: [Object],
                required: true,
            },
            deleteItem: {
                type: Function,
                required: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter,
    .list-complete-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
    .GoodsList {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(332px, 332px));
        align-items: flex-start;
        justify-content: space-around;
        grid-gap: 16px;
    }

    .transition-enter {
        opacity: 0.01;
        transform: translate(0, -10px);
    }

    .transition-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 0.3s ease-in;
    }

    .transition-exit {
        opacity: 1;
        transform: translate(0, 0);
    }

    .transition-exit-active {
        opacity: 0.01;
        transform: translate(0, 10px);
        transition: all 0.3s ease-in;
    }
</style>
