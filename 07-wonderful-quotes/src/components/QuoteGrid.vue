<template>
    <div class="row">
        <app-quote v-for="(quote, i) in quotes" :key="quote" @click.native="deleteQuote(i)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        methods: {
            deleteQuote(i) {
                this.$emit('quoteDeleted', i);
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>

</style>

