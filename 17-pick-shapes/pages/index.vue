<template>
<section class="container">
  <MainForm @createShape="createShape($event)"/>

  <Results :shapes="shapes" @deleteShape="deleteShape($event)"/>
</section>
</template>

<script>
import MainForm from '../components/MainForm'
import Results from '../components/Results'

export default {
  name: 'Index.Page',
  data () {
    return {
      shapes: []
    }
  },
  methods: {
    createShape (obj) {
      // ADJUST DATA BEFORE WE PASS TO PROPS
      const shape = {
        shape: obj.shape.toLowerCase(),
        text: obj.text,
        color: obj.color
      };

      this.shapes.push(shape);
    },
    deleteShape (index) {
      this.shapes.splice(index, 1);
    }
  },
  components: {
    MainForm,
    Results
  }
}
</script>

<style lang="scss" scoped>
  // TEMPLATE CONTAINER
  .container {
    padding: 10px;
  }
</style>
