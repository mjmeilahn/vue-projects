<template>
    <div>
        <h3>Edit the User</h3>

        <!-- Child components can just use $route.query
            Other than props passed into Component -->
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button @click="confirmed = true" class="btn btn-primary">Confirm</button>

        <div style="height: 400px;"></div>
        <p id="data">Some extra DATA</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },

    // SAFETY LEAVE CHECKS BETTER HANDLED ON COMPONENT
    // GLOBAL CHECKS WOULD HAPPEN AFTER THE ROUTE CHANGES
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Changes will not be saved. Continue?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>
