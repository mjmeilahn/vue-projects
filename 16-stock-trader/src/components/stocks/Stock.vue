<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="pabel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input :class="{'danger': insufficientFunds}" type="number" class="form-control" placeholder="QTY" v-model="qty" min="0">
                </div>
                <div class="pull-right">
                    <button @click="buyStock" class="btn btn-success" :disabled="insufficientFunds || qty <= 0 || isNaN(qty)">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            qty: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.qty * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockID: this.stock.id,
                stockPrice: this.stock.price,
                stockQTY: this.qty
            };
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.qty = 0;
        }
    }
}
</script>


<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

