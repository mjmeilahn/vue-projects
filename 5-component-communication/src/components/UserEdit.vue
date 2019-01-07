<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Child component to User component</p>
        <p>Age: {{ age }}</p>
        <div v-if="age !== 30">
            <button @click="editAge">Edit Age</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    // the import of "eventBus" is crucial because it is decoupled
    // from our application - services like connecting to a database
    // can run in the background without being tied to a view instance

    export default {
        props: {
            age: {
                type: Number,
                required: true
            }
        },
        methods: {
            editAge() {
                this.age = 30;
                // this.$emit('ageWasEdited', this.age);
                // eventBus.$emit('ageWasEdited', this.age);
                eventBus.changeAge(this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
