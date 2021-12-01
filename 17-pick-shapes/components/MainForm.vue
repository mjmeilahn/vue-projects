<template>
<section class="form-container">

  <!-- FORM HAS SEPARATE VIEWS FOR SELECTING SHAPE & COLOR -->
  <form @submit.prevent="validate">

    <!-- DEFAULT VIEW ON PAGE LOAD -->
    <div v-if="view === 'default'">
      <button @click="view = 'shapes'">
        {{ currentShape.shape }}
      </button>
      <button @click="view = 'colors'">
        {{ currentShape.color }}
      </button>
      <input v-model="currentShape.text" type="text" placeholder="Text Input">
      <button type="submit">Add</button>
      <div v-if="error" class="error-message">Please complete all fields and try again</div>
    </div>

    <!-- SELECTING SHAPE VIEW -->
    <div v-else-if="view === 'shapes'">
      <div v-for="(shape, shapeIndex) in shapes" :key="'choose_' + shapeIndex">
        <button @click="addShape(shape)">{{ shape }}</button>
      </div>
    </div>

    <!-- SELECTING COLOR VIEW -->
    <div v-else-if="view === 'colors'">
      <section class="color-picker">
        <chrome-picker v-model="colors" />
      </section>
      <div @click="addColor" class="confirm">Confirm</div>
    </div>

  </form>
</section>
</template>

<script>
import { Chrome } from 'vue-color';

const initial = {
  shape: 'Choose Shape',
  text: '',
  color: 'Choose Color'
};

const defaultColor = '#4885ed';

export default {
  name: 'MainForm.Component',
  data () {
    return {
      colors: defaultColor,
      currentShape: {
        shape: initial.shape,
        text: initial.text,
        color: initial.color
      },
      error: false,
      shapes: ['Circle', 'Rectangle', 'Square', 'Triangle'],
      view: 'default'
    }
  },
  methods: {
    validate () {
      this.error = false;

      // VALIDATE SHAPE
      if (!this.shapes.includes(this.currentShape.shape)) {
        console.error('No Shape Selected');
        this.error = true;
      }

      // VALIDATE COLOR
      if (this.currentShape.color === initial.color) {
        console.error('No Color Selected');
        this.error = true;
      }

      // VALIDATE TEXT
      if (this.currentShape.text === initial.text) {
        console.error('No Text Selected');
        this.error = true;
      }

      // DO NOT CONTINUE IF WE HAVE ERRORS
      if (this.error) return;

      // IF WE HAVE CLEARED VALIDATION,
      // SEND DATA TO PARENT COMPONENT
      this.$emit('createShape', this.currentShape);

      // RESET INITIAL STATE
      this.currentShape = {
        shape: initial.shape,
        text: initial.text,
        color: initial.color
      };
    },
    addShape (shape) {
      this.currentShape.shape = shape;

      // RETURN TO DEFAULT VIEW
      this.view = 'default';
    },
    addColor () {
      if (this.colors === defaultColor) {
        this.currentShape.color = defaultColor;
      } else {
        this.currentShape.color = this.colors.hex;
      }

      // RETURN TO DEFAULT VIEW
      this.view = 'default';
    }
  },
  components: {
    'chrome-picker': Chrome
  }
}
</script>

<style lang="scss" scoped>

  // SHARED CSS
  button,
  input {
    display: block;
    font-size: 16px;
    max-width: 200px;
    width: 100%;
  }

  button,
  input,
  form {
    border: 2px solid #000000;
  }

  button,
  .confirm {
    background-color: #ffffff;
    cursor: pointer;
    margin: auto;
    margin-bottom: 30px;
    padding: 15px;
    text-align: center;
    transition: all .3s ease-in;

    &:hover {
      background-color: #D9E9FB;
      border: 2px solid #9BAAB3;
      font-weight: 700;
    }
  }

  button[type="submit"],
  .confirm {
    background-color: #D5E8D2;
    border: 2px solid #A7BE9E;
    border-radius: 8px;
    font-weight: 700;
    margin: auto;
    max-width: 120px;

    &:hover {
      background-color: #D5E8D2;
    }
  }

  form {
    margin: auto;
    margin-bottom: 30px;
    max-width: 500px;
    padding: 30px;
  }

  input {
    margin: auto;
    margin-bottom: 30px;
    padding: 15px 30px;
    text-align: center;

    &::placeholder {
      color: #000000;
    }
  }

  .vc-chrome {
    margin: auto;
    margin-bottom: 30px;
    width: 236px !important;
  }

  .error-message {
    color: red;
    margin: 15px;
    margin-bottom: 0;
    text-align: center;
  }

  // TABLET
  @media only screen and (min-width: 768px) {
    input {
      margin-bottom: 120px;
    }
  }
</style>
