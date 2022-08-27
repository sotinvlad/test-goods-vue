<template>
    <div class="Form">
        <span class="Label Required"> Наименование товара </span>
        <div
            v-bind:class="[
                'InputContainer',
                fieldClass($data.itemTitle, 0) ? 'Error' : '',
            ]"
        >
            <input
                class="Input"
                v-model="itemTitle"
                placeholder="Введите наименование товара"
                @focusout="onInputFocus(0, true)"
                @focus="onInputFocus(0, false)"
            />
        </div>
        <span class="Label">Описание товара</span>
        <textarea
            v-model="itemDescription"
            class="Textarea"
            placeholder="Введите описание товара"
        ></textarea>
        <span class="Label Required"> Ссылка на изображение товара </span>
        <div
            v-bind:class="[
                'InputContainer',
                fieldClass($data.pictureLink, 1) ? 'Error' : '',
            ]"
        >
            <input
                v-bind:class="[
                    'Input',
                    fieldClass($data.pictureLink, 1) ? 'Error' : '',
                ]"
                v-model="pictureLink"
                placeholder="Введите ссылку"
                @focusout="onInputFocus(1, true)"
                @focus="onInputFocus(1, false)"
            />
        </div>
        <span class="Label Required"> Цена товара </span>
        <div
            v-bind:class="[
                'InputContainer',
                fieldClass($data.itemPrice, 2) ? 'Error' : '',
            ]"
        >
            <input
                v-model="itemPrice"
                @input="
                    (event) =>
                        (itemPrice = formatPrice(
                            validatePrice(event.target.value),
                        ))
                "
                v-bind:class="[
                    'Input',
                    fieldClass($data.itemPrice, 2) ? 'Error' : '',
                ]"
                placeholder="Введите цену"
                @focusout="onInputFocus(2, true)"
                @focus="onInputFocus(2, false)"
            />
        </div>
        <button
            class="Button"
            :disabled="
                inputFieldIsEmpty(itemTitle) ||
                inputFieldIsEmpty(pictureLink) ||
                inputFieldIsEmpty(itemPrice)
            "
            @click="
                {
                    onSubmit();
                }
            "
        >
            Добавить товар
        </button>
    </div>
</template>

<script>
    import formatPrice from '@/helpers/formatPrice';
    import inputFieldIsEmpty from '@/helpers/inputFieldIsEmpty';
    import validatePrice from '@/helpers/validatePrice';

    export default {
        props: {
            addItem: {
                type: Function,
                required: true,
            },
            setShowNotification: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                itemTitle: '',
                itemDescription: '',
                pictureLink: '',
                itemPrice: '',
                touched: [false, false, false],
            };
        },
        methods: {
            fieldClass(field, index) {
                return inputFieldIsEmpty(field) && this.touched[index];
            },
            inputFieldIsEmpty,
            formatPrice,
            validatePrice,
            onInputFocus(index, value) {
                this.touched[index] = value;
            },
            onSubmit() {
                console.log('TEST');
                this.$props.addItem({
                    itemTitle: this.itemTitle,
                    itemDescription: this.itemDescription,
                    pictureLink: this.pictureLink,
                    itemPrice: this.itemPrice,
                });
                this.itemTitle = '';
                this.itemDescription = '';
                this.pictureLink = '';
                this.itemPrice = '';
                this.touched = [false, false, false];
                this.$props.setShowNotification(true);
                setTimeout(() => this.$props.setShowNotification(false), 1000);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '@/assets/styles.scss';
    .Form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 332px;
        height: 440px;
        background: #fffefb;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
            0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        padding: 24px;
        position: sticky;
        top: 50px;
    }

    .Label {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        color: #49485e;
        margin-bottom: 4px;
    }

    .Required::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ff8484;
        border-radius: 4px;
    }
    .InputContainer {
        margin-bottom: 16px;
    }

    .Input {
        box-sizing: border-box;
        width: 284px;
        height: 36px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border: none;
        outline: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        padding-left: 16px;
        color: #3f3f3f;
        &::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            text-align: left;
            color: #b4b4b4;
        }
    }

    .Textarea {
        box-sizing: border-box;
        font-family: $font-stack;
        width: 284px;
        height: 108px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: none;
        margin-bottom: 16px;
        resize: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #3f3f3f;
        outline: none;
        padding-left: 16px;
        padding-top: 10px;

        &::placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            text-align: left;
            color: #b4b4b4;
        }
    }

    .Error {
        position: relative;
        input {
            border: 1px solid #ff8484;
            position: relative;
        }
        &::after {
            position: absolute;
            content: 'Поле является обязательным';
            display: block;
            font-weight: 400;
            font-size: 8px;
            line-height: 10px;
            letter-spacing: -0.02em;
            color: #ff8484;
            bottom: -14px;
        }
    }

    .Button {
        width: 284px;
        height: 36px;
        background: #7bae73;
        border-radius: 10px;
        border: none;
        margin-top: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #ffffff;
        cursor: pointer;
        transition: 0.15s;
        &:hover {
            background-color: rgb(22, 22, 84);
        }
        &:active {
            background-color: rgba(22, 22, 84, 0.827);
        }
        &:disabled {
            background: #eeeeee;
            color: #b4b4b4;
            cursor: auto;
        }
    }
    @media screen and (max-width: 768px) {
        .Form {
            position: static;
        }
    }
</style>
