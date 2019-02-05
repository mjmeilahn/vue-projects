<template>
    <div>
        <status v-for="status in 5" :key="status"></status>
    </div>
</template>

<script>
    import TextStatus from './TextStatus.vue';

    export default {
        components: {
            'status': TextStatus
        }
    }
</script>

