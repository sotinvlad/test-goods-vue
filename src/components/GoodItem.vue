<template>
    <div>
        <div
            class="GoodItem"
            :style="[imageIsLoaded ? { display: 'flex' } : '']"
        >
            <img
                :src="
                    imageSrc === 'basicItemPicture'
                        ? basicItemPicture
                        : imageSrc
                "
                alt="Изображение товара"
                :onLoad="() => (this.imageIsLoaded = true)"
                :onError="
                    () =>
                        (imageSrc =
                            imageSrc === 'basicItemPicture'
                                ? basicItemPicture
                                : imagePlaceholder)
                "
            />
            <div class="ItemTitle">{{ item.itemTitle }}</div>
            <div class="ItemDescription">
                {{ item.itemDescription }}
            </div>
            <div class="ItemPrice">{{ formattedPrice }} руб.</div>
            <div
                class="DeleteButton"
                @click="
                    {
                        $props.deleteItem(item.id);
                    }
                "
            >
                <img :src="deleteBucket" alt="Кнопка удаления товара" />
            </div>
        </div>

        <ItemSkeleton v-show="!imageIsLoaded" />
    </div>
</template>

<script>
    import imagePlaceholder from '@/assets/placeholder.jpg';
    import basicItemPicture from '@/assets/basicItemPicture.png';
    import deleteBucket from '@/assets/deleteBucket.svg';
    import formatPrice from '@/helpers/formatPrice';
    import ItemSkeleton from '@/components/ItemSkeleton';
    export default {
        components: {
            ItemSkeleton,
        },
        props: {
            item: {
                type: Object,
                required: true,
            },
            deleteItem: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                imageSrc: '',
                imageIsLoaded: false,
                deleteBucket,
                basicItemPicture,
                imagePlaceholder,
            };
        },
        computed: {
            formattedPrice() {
                return formatPrice(this.item.itemPrice.toString());
            },
        },
        methods: {
            formatPrice,
        },
        mounted() {
            this.imageSrc = this.item.pictureLink;
        },
    };
</script>

<style lang="scss">
    .GoodItem {
        width: 332px;
        height: 423px;
        position: relative;
        background: #fffefb;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
            0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        display: none;
        flex-direction: column;
        cursor: pointer;
        transition: 0.25s ease;
        box-sizing: border-box;
        &:hover {
            .DeleteButton {
                opacity: 1;
            }
        }
        img {
            width: 332px;
            height: 200px;
            object-fit: cover;
            border-radius: 4px 4px 0px 0px;
        }
    }

    .ItemTitle {
        height: 25px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        margin: 16px;
        margin-bottom: 0;
        color: #3f3f3f;
        overflow: hidden;
    }

    .ItemDescription {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin: 16px;
        margin-bottom: 0;
        color: #3f3f3f;
        max-height: 280px;
        width: 300px;
        height: 80px;
        overflow-wrap: break-word;
        overflow: hidden;
        margin-bottom: 16px;
    }

    .ItemPrice {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        margin: 16px;
        margin-top: auto;
        margin-bottom: 24px;
        color: #3f3f3f;
    }

    .DeleteButton {
        position: absolute;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -10px;
        right: -10px;
        width: 32px;
        height: 32px;
        background: #ff8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        transition: all 0.25s ease;
        &:hover {
            background: #ff8484a9;
        }
        img {
            width: 16px;
            height: 16px;
        }
    }
</style>
