<template>
    <div class="component">
        <h1>The User Component</h1>
        <button @click="changeName">Change my name</button>
        <hr>
        <p>Name in Parent component: {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :age="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main';

    export default {
        data() {
            return {
                name: 'Matthew',
                age: 29
            };
        },
        methods: {
            changeName() {
                this.name = 'Jordan';
            },

            resetName() {
                this.name = 'Matthew';
            }
        },
        components: {
            'app-user-detail': UserDetail,
            'app-user-edit': UserEdit
        },
        created() {
            eventBus.$on('ageWasEdited', age => this.age = age);
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
