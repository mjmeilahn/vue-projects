<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input v-model="user.name" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label>Mailing address</label>
                    <input v-model="user.email" type="text" class="form-control">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>

                <hr>

                <button @click="getData" class="btn btn-primary">Get Data</button>

                <br><br>
                <ul class="list-group">
                    <li v-for="(u, i) in users" v-bind:key="i" class="list-group-item">
                        {{ u.name }} - {{ u.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                this.$http
                    // empty string because Vue HTTP options has the Firebase URL as its root in main.js
                    .post('', this.user)
                    .then(res => console.log(res), err => console.log(err))
                    .catch(err => console.log(err));
            },
            getData() {
                this.$http
                    // empty string because Vue HTTP options has the Firebase URL as its root in main.js
                    .get('')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        let results = [];

                        for (let key in data) {
                            results.push(data[key]);
                        }

                        this.users = results;
                    })
                    .catch(err => console.log(err));
            }
        }
    }
</script>

<style>
</style>
