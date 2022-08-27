<template>
    <div class="Skeleton"></div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
    .Skeleton {
        width: 332px;
        height: 423px;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        opacity: 0.2;
        background-color: rgba(154, 154, 154, 0.871);
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                    to right,
                    rgb(243, 242, 241) 0%,
                    rgb(237, 235, 233) 50%,
                    rgb(243, 242, 241) 100%
                )
                0px 0px / 90% 100% no-repeat rgb(243, 242, 241);
            transform: translateX(-100%);

            animation-name: skeleton-animation;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-direction: normal;
            animation-iteration-count: infinite;
        }
    }
    @keyframes skeleton-animation {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>
