<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Child component to User component</p>
        <p>Current Name: {{ name }}</p>
        <p>Name backwards: {{ backwards() }}</p>
        <p>Age: {{ age }}</p>
        <div v-if="name !== 'Matthew'">
            <button @click="resetName">Reset Name w/ $emit</button>
            <button @click="resetFn">Reset Name w/ Function as prop</button>
        </div>
    </div>
</template>

<script>
    // After importing a prop from a parent,
    // you can re-format or change the data as needed
    // see backwards() method for an example

    export default {
        // Important to specify types due functions like .split()
        // will only work on Strings & Arrays in JS



        // TYPES OF IMPORTED PROPS
        // A props import can be done many ways,
        // depends on the needs of the application.

        // 1. Unreliable - no types
        // props: ['name', 'resetFn', 'age'],

        // 2. Non-dependent - has types & HTML shows if props are empty
        props: {
            name: String,
            resetFn: Function,
            age: Number
        },

        // 3. Depedent - has types & component WILL BREAK if one required value is falsy
        // props: {
        //     name: {
        //         type: String,
        //         required: true
        //     },
        //     resetFn: {
        //         type: Function,
        //         required: true
        //     },
        //     age: {
        //         type: Number,
        //         required: true
        //     }
        // },
        methods: {
            backwards() {
                return this.name.split('').reverse().join('');
            },

            resetName() {
                this.name = 'Matthew';
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
