<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | uppercase | lowercase }}</p>

                <hr>

                <input type="text" v-model="filterText" />
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    // NOTE: OBJECTS USED AS MIXINS STORE A COPY OF
    // INITIAL STATE IN EACH COMPONENT THAT IMPORTS THE OBJECT

    // IF YOU WANT TO SHARE STATE IN COMPONENTS,
    // USE AN EVENT BUS SERVICE OR IMPORT THE OBJECT IN data() HOOK

    export default {
        mixins: [fruitMixin],
        filters: {
            uppercase(value) {
                return value.toUpperCase();
            }
        },
        created() {
            console.log('created in App.vue');
        }
    }
</script>

<style>

</style>
