<template>
    <div>
        <!--
            INDIVIDUAL GETTERS METHOD
                <p>Counter is: {{ counter }}</p>
                <p>{{ clicks }}</p>
        -->

        <!-- MAPPED GETTERS VIA VUEX & COMPUTED -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>{{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        // MAPPING GETTERS VIA NATIVE VUEX
        // USE BABEL PRESET STAGE-2 TO COMPILE
        // A SPREAD OPERATOR SHOWN BELOW
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }

        // INDIVIDUAL GETTERS IMPLEMENTATION
        // computed: {
            // counter() {
            //     // THE IDEAL WAY TO RETURN NEW STATE VIA A GETTER
            //     // GETTERS ARE NATIVE TO VUEX, AND CAN DO RAW
            //     // CALCULATIONS IN ONE PLACE.
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // }
        // }
    }
</script>