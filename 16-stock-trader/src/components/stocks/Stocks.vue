<template>
    <div>
        <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    },
    components: {
        'app-stock': Stock
    }
}
</script>

