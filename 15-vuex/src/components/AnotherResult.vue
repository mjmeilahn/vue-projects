<template>
    <p>Different Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                // 1. IF USING MUTATIONS
                return this.$store.state.counter.counter * 2;

                // 2. FOR SIMPLER APPLICATIONS WITHOUT MUTATIONS,
                // FETCH STATE AND RETURN VIA A CALCULATION.

                // LARGER APPLICATIONS SHOULD NOT BE DOING RAW
                // CALCULATIONS EACH TIME A COMPUTED VALUE IS RETURNED.
                // return this.$store.state.counter * 2;
            }
        }
    }
</script>