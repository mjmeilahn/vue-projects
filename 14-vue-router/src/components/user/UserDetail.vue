<template>
    <div>
        <h3>Some User Details</h3>

        <!-- Can use $route.params inside child-component
            Without having to default to route props -->
        <p>User ID: {{ $route.params.id }}</p>
        <router-link
        :to="'/user/' + $route.params.id + '/edit?locale=en&q=100'"
        tag="button"
        class="btn btn-primary">Edit User</router-link>
    </div>
</template>