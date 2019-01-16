<template>
    <section>
        <div id="on" @click="toggle(true)" :class="{active: value}">On</div>
        <div id="off" @click="toggle(false)" :class="{active: !value}">Off</div>
    </section>
</template>

<script>
    export default {
        props: {
            value: Boolean
        },
        methods: {
            toggle(isOn) {
                this.$emit('input', isOn);
            }
        }
    }
</script>

<style scoped>
    #on,
    #off {
        background-color: lightgray;
        box-sizing: content-box;
        cursor: pointer;
        display: inline-block;
        height: 20px;
        margin: 10px -2px;
        padding: 2px;
        text-align: center;
        transition: all .3s ease-in;
        width: 40px;
    }

    #on:hover,
    #on.active {
        background-color: lightgreen;
    }

    #off:hover,
    #off.active {
        background-color: lightcoral;
    }
</style>


