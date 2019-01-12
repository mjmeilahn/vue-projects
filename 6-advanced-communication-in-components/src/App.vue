<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="seletedComponent = 'app-quote'">Quote</button>
                <button @click="seletedComponent = 'app-author'">Author</button>
                <button @click="seletedComponent = 'app-new'">New</button>

                <hr>

                <p>{{ seletedComponent }}</p>

                <keep-alive>
                    <component :is="seletedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
                seletedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style scoped>
</style>
