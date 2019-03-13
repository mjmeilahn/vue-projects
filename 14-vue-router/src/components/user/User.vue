<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // TWO METHODS TO LOAD DYNAMIC URL VALUES INTO A COMPONENT

        // 1. NEW METHOD JUST USES PROPS
        // props: {
        //     id: {
        //         type: String
        //     }
        // },

        // 2. OLD METHOD USING data() AND watch()
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     '$route'(to, from) {
        //         this.id = to.params.id;
        //     }
        // },

        methods: {
            navigateToHome() {
                this.$router.push('/');
            }
        }
    }
</script>
