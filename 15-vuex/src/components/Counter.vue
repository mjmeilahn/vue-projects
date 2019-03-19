<template>
    <div>
        <!--
            NOT MANDATORY TO PASS A VALUE TO METHODS
            BUT IF YOU NEED TO, USE EITHER AN OBJECT WITH PROPERTIES OR ONE VALUE I.E. STRING OR NUMBER
        -->
        <button class="btn btn-primary" @click="asyncIncrement({by: 2, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 2, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    // USE BABEL PRESET STAGE-2 TO COMPILE
    // A SPREAD OPERATOR SHOWN BELOW
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement',
            ]),

            // ABOVE "mapActions" SAME AS:
            // asyncIncrement() {
            //     this.$store.dispatch('asyncIncrement');
            // },
            // asyncDecrement() {
            //     this.$store.dispatch('asyncDecrement');
            // }
        }
    }
</script>