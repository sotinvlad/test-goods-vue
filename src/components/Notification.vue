<template>
    <div class="Notification">
        <span>Товар успешно добавлен!</span>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    .Notification {
        width: 240px;
        height: 50px;
        position: absolute;
        opacity: 1;
        display: flex;
        top: -10px;
        right: calc(50% - 120px);
        border-radius: 20px;
        z-index: 2;
        justify-content: center;
        align-items: center;
        transition: all 0.25s ease;
        background-color: rgba(38, 176, 38, 0.525);
    }
</style>
