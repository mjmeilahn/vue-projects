<template>
    <div>
        <b-form @submit="submit">
            <b-form-group
                id="input-group-todo-text"
                label="Describe:"
                label-for="todo-text"
                description="Enter your todo item."
            >
                <b-form-input
                id="todo-text"
                v-model="todo.text"
                type="text"
                placeholder="Enter your todo item."
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-todo-priority"
                label="Priority:"
                label-for="todo-priority"
                description="Assign a priority to this todo item."
            >
                <b-form-select
                id="todo-priority"
                v-model="todo.priority"
                :options="priorities"
                required
                ></b-form-select>
            </b-form-group>

            <div class="d-flex flex-row-reverse">
                <b-button @click="reset" variant="danger" class="ml-2">
                    Reset
                    <b-icon-arrow-counterclockwise></b-icon-arrow-counterclockwise>
                </b-button>
                <b-button type="submit" variant="primary">
                    Save
                    <b-icon-cloud-arrow-up-fill></b-icon-cloud-arrow-up-fill>
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    props: {
        todo: {
            type: Object,
            required: true,
            default: function () {
                return {}
            }
        },
    },
    data() {
        return {
            priorities: [
                {
                    text: 'Assign a priority to this todo item.',
                    value: {},
                    disabled: true
                },
                {
                    text: 'Life Changing',
                    value: {
                        text: 'Life Changing',
                        number: 1
                    }
                },
                {
                    text: 'Important',
                    value: {
                        text: 'Important',
                        number: 2
                    }
                },
                {
                    text: 'Meh',
                    value: {
                        text: 'Meh',
                        number: 3
                    }
                },
            ],
        }
    },
    methods: {
      submit(event) {
        event.preventDefault()

        if (this.todo.priority.text !== undefined && this.todo.priority.number !== undefined) {
            // Assign a unique ID to edit todo item in the future.
            if (this.todo.id === undefined) {
                this.todo.id = (Math.random() + 1).toString(36).substring(7)
            }

            this.$emit('addTodoItem', this.todo)
            this.reset()
        }
        else {
            alert('Describe a todo item and assign its priority.')
        }
      },
      reset() {
        event.preventDefault()
        this.todo.id = undefined
        this.todo.text = ''
        this.todo.priority = {}
      }
    },
}
</script>
