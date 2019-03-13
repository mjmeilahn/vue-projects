<template>
    <div>
        <h3>Edit the User</h3>

        <!-- Child components can just use $route.query
            Other than props passed into Component -->
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
    </div>
</template>