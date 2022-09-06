<template>
    <div class="Header">
        <div class="Title">Добавление товара</div>
        <div
            class="SortBlock"
            @click="setShowSortingList(!$data.showSortingList)"
            ref="sortBlock"
        >
            <div>
                <span class="TextOfSortBlock"> {{ sortingBy }} </span>
                <img :src="arrowDownImg" alt="SortingArrow" />
            </div>
            <div
                class="SelectList"
                v-bind:style="
                    showSortingList ? { display: 'flex' } : { display: 'none' }
                "
            >
                <div class="SortItem" @click="setSortingBy('По возрастанию')">
                    По возрастанию
                </div>
                <div class="SortItem" @click="setSortingBy('По убыванию')">
                    По убыванию
                </div>
                <div class="SortItem" @click="setSortingBy('По умолчанию')">
                    По умолчанию
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import arrowDownImg from '@/assets/Arrow_down.png';
    import { onUnmounted } from 'vue';
    export default {
        props: {
            sortingBy: {
                type: String,
                required: true,
            },
            setSortingBy: {
                type: Function,
                required: true,
            },
        },
        mounted() {
            const handleOutsideClick = (event) => {
                if (
                    this.$refs.sortBlock &&
                    !event.path.includes(this.$refs.sortBlock)
                ) {
                    this.setShowSortingList(false);
                }
            };
            document.addEventListener('click', handleOutsideClick);
            onUnmounted(() =>
                document.removeEventListener('click', handleOutsideClick),
            );
        },
        data() {
            return {
                arrowDownImg: arrowDownImg,
                showSortingList: false,
            };
        },
        methods: {
            setShowSortingList(bool) {
                this.showSortingList = bool;
            },
        },
    };
</script>
<style lang="scss" scoped>
    .Header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .Title {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        color: #3f3f3f;
        user-select: none;
    }

    .SortBlock {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        width: 121.49px;
        height: 36px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: 0.25s;
        z-index: 1;

        > div {
            display: flex;
            padding-top: 10px;
            justify-content: center;
            align-items: center;
            img {
                width: 8px;
                height: 6px;
            }
        }
        &:hover {
            background-color: #00000064;
            span {
                color: #ffffff;
            }
        }
        img {
            margin-left: 5px;
        }
    }
    .SelectList {
        cursor: pointer;
        flex-direction: column;
        margin-top: 1px;
    }

    .SortItem {
        cursor: pointer;
        width: 121.49px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: 0.25s;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
        &:hover {
            background-color: #00000064;
        }
    }

    .TextOfSortBlock {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
    }
</style>
