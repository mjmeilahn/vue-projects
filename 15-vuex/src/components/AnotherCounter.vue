<template>
    <div>
        <!--
            VUEX MUTATION EXPECTS AN ARGUMENT,
            ADD PARENTHESIS ON "@click" HANDLER TO SPECIFY THERE ARE NONE IN THIS INSTANCE
        -->
        <button class="btn btn-primary" @click="increment()">Increment</button>
        <button class="btn btn-primary" @click="decrement()">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    // USE BABEL PRESET STAGE-2 TO COMPILE
    // A SPREAD OPERATOR SHOWN BELOW
    export default {
        methods: {
            // 1. MUTATIONS ARE "COMMITED" TO VUEX AS A STRING
            // MUTATIONS ARE PERMITTED IF THE CHANGE DOES NOT REQUIRE TO BE ASYNCHRONOUS - THEREFORE NO NEED FOR VUEX "actions"
            ...mapMutations([
                'increment',
                'decrement',
            ]),

            // UNDER THE HOOD, MAPPED MUTATIONS ARE:
            // increment() {
            //     this.$store.commit('increment', data);
            // },
            // decrement() {
            //     this.$store.commit('decrement', data);
            // }



            // 2. MUTATE STATE INDIVIDUALLY ON COMPONENT,
            // NOT PREFERRED APPROACH FOR LARGER APPS
            // increment() {
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.state.counter--;
            // }
        }
    }
</script>