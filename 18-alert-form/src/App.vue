<template>
    <div id="app">
        <AlertForm/>
    </div>
</template>

<script>
import AlertForm from './components/AlertForm.vue'

export default {
    name: 'App',
    components: {
        AlertForm
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
