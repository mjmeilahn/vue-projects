<template>
    <div>
        <b-container class="mt-5">
            <b-row class="mt-5">
                <b-col>
                    <h4>Description</h4>
                </b-col>
                <b-col>
                    <h4>Priority</h4>
                </b-col>
                <b-col class="text-right">
                    <h4>Actions</h4>
                </b-col>
            </b-row>
            <b-row
                v-for="(item, itemIndex) in todoItems"
                :key="'todo__' + itemIndex"
                class="mt-5"
            >
                <b-col>
                    <h5>{{ item.text }}</h5>
                </b-col>
                <b-col>
                    <h5>
                        <b-badge pill 
                            :variant="
                                item.priority.number === 1 ? 'success' :
                                item.priority.number === 2 ? 'info' :
                                'dark'"
                        >{{ item.priority.text }}</b-badge>
                    </h5>
                </b-col>
                <b-col class="text-right">
                    <b-button
                        @click="editItem(itemIndex)"
                        variant="outline-primary"
                        class="mr-2"
                    >
                        Edit
                        <b-icon-pencil-fill></b-icon-pencil-fill>
                    </b-button>
                    <b-button
                        @click="removeItem(itemIndex)"
                        variant="outline-danger"
                    >
                        Remove
                        <b-icon-trash></b-icon-trash>
                    </b-button>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col class="text-right">
                    <b-button
                        @click="clearList"
                        variant="warning"
                    >
                        <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
                        Clear Todo List
                        <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: {
        todoItems: {
            type: Array,
            required: true,
            default: function () {
                return []
            }
        },
    },
    methods: {
        clearList() {
            this.$emit('removeTodoList')
        },
        removeItem(index) {
            this.$emit('removeTodoItem', index)
        },
        editItem(index) {
            this.$emit('editTodoItem', index)
        },
    }
}
</script>
