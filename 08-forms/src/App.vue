<template>
  <div class="container">
    <form>
      <!--
      v-model requires an HTML element to have:
      1. A "value" parameter like <input>, <select> or <textarea>
      2. Capable of passing the "input" or "change" DOM event like <input>, <select> or <textarea>
      -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input v-model.lazy.trim="user.email" type="text" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model.lazy="user.password" type="password" id="password" class="form-control">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input v-model.lazy="user.age" type="number" id="age" class="form-control">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea v-model.lazy="message" id="message" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input v-model.lazy="sendMail" type="checkbox" id="sendmail" value="Send Mail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input v-model.lazy="sendMail" type="checkbox" id="sendInfomail" value="Send InfoMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input v-model.lazy="user.gender" type="radio" id="male" value="Male"> Male
          </label>
          <label for="female">
            <input v-model.lazy="user.gender" type="radio" id="female" value="Female"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>

          <!-- v-model on <select> overrides :selected on <option> tags -->
          <select v-model.lazy="selectedPriority" id="priority" class="form-control">
            <option 
            v-for="priority in priorities" 
            :key="priority" 
            :selected="priority === 'Medium'">{{ priority }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Custom component acting as a form control. Takes a value, outputs an "input" event - key elements just like a v-model tag attached to a form element. Key takeaway is you don't need to be bound to form elements to create two-way data binding. -->
          <app-switch v-model="dataSwitch" :value="true"></app-switch>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button @click.prevent="submitted" class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>

    <hr>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
            <p>Age: {{ user.age }}</p>
            <p style="white-space: pre;">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="mail in sendMail" :key="mail">{{ mail }}</li>
            </ul>
            <p>Gender: {{ user.gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './Switch.vue';

  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
          age: 18,
          gender: 'Male'
        },
        message: 'A new message!',
        sendMail: [],
        selectedPriority: 'High',
        priorities: ['Low', 'Medium', 'High'],
        dataSwitch: true,
        isSubmitted: false
      }
    },
    methods: {
      submitted() {
        this.isSubmitted = true;
      }
    },
    components: {
      'app-switch': Switch
    }
  }
</script>

<style>

</style>
