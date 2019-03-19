<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-counter></app-counter>
                <hr>

                <app-another-result></app-another-result>
                <app-another-counter></app-another-counter>
                <hr>

                <input type="text" v-model="text">
                <br>
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        computed: {
            text: {
                // "get()" IS ENABLED BY DEFAULT ON COMPUTED PROPERTIES
                get() {
                    return this.$store.getters.text;
                },

                // YOU RARELY NEED A SETTER EXCEPT IN INSTANCES OF USING "v-model" ON HTML COMPONENTS
                set(text) {
                    this.$store.dispatch('updateText', text);
                }
            }
        },
        components: {
            'app-counter': Counter,
            'app-result': Result,
            'app-another-result': AnotherResult,
            'app-another-counter': AnotherCounter,
        }
    }
</script>

