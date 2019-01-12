<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="color: #ccc;"><slot name="subtitle">The subtitle</slot></span>
        </div>
        <hr>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        margin: 30px auto;
        padding: 30px;
        text-align: center;
    }

    .title {
        font-style: italic;
    }
</style>


