<template>
    <div>
        <h3>Some User Details</h3>

        <!-- Can use $route.params inside child-component
            Without having to default to route props -->
        <p>User ID: {{ $route.params.id }}</p>
        <router-link
        :to="'/user/' + $route.params.id + '/edit?locale=en&q=100#data'"
        tag="button"
        class="btn btn-primary">Edit User</router-link>

        <!--
            USING VUE'S OBJECT SYNTAX
            <router-link
            :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 }, hash: '#data' }"
            tag="button"
            class="btn btn-primary">Edit User</router-link>
        -->
    </div>
</template>


<script>
export default {
    data() {
        return {
            message: 'Hello World!'
        }
    },
    beforeRouteEnter(to, from, next) {
        // ACCESSING THE VUE INSTANCE VIA "this" WILL NOT WORK
        // THIS LIFECYCLE HOOK IS CALLED BEFORE COMPONENT IS CREATED
        // INSTEAD YOU'D ACCESS VIA A CALLBACK IN "next()"

        if (true) {
            next((vm) => {
                console.log(vm.message);
            });
        }
        // COMPONENT WILL NOT LOAD UNTIL "next()" IS CALLED
        // THIS MEANS A COMPONENT CAN HAVE SAFETY CHECKS BEFORE LOADING
        // "if (true)" SHOWN AS AN EXAMPLE
    }
}
</script>
