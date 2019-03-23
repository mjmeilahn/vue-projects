<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="pabel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | QTY: {{ stock.qty }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input :class="{ 'danger':insufficientQTY }" type="number" class="form-control" placeholder="QTY" v-model="qty" min="0" :max=" stock.qty">
                </div>
                <div class="pull-right">
                    <button @click="sellStock" class="btn btn-success" :disabled="insufficientQTY || qty <= 0 || isNaN(qty)">{{ insufficientQTY ? 'Cannot Sell' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['stock'],
    data() {
        return {
            qty: 0
        }
    },
    computed: {
        insufficientQTY() {
            return this.qty > this.stock.qty;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockID: this.stock.id,
                stockPrice: this.stock.price,
                qty: this.qty
            };

            this.placeSellOrder(order);
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
