<template>
    <div id="app">
        <p>Change this text: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Text</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: 'Normal'
            }
        },
        methods: {
            changeStatus() {
                return this.status = 'Changed!';
            }
        }
    }
</script>

