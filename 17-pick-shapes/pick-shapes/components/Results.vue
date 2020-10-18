<template>
  <section class="results">
    <div v-for="(s, shapeIndex) in shapes"
    :key="'shape_' + shapeIndex"
    class="shape-container"
    >
      <div class="shape">
        <div v-if="s.shape === 'triangle'"
        :class="s.shape"
        :style="{'border-bottom-color': s.color}"></div>

        <div v-else
        :class="s.shape"
        :style="{'background': s.color}"></div>

        <div class="shape-text">{{ s.text }}</div>
      </div>

      <button @click="deleteShape(shapeIndex)">Delete</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Results.Component',
  props: {
    shapes: Array
  },
  methods: {
    deleteShape (index) {
      this.$emit('deleteShape', index);
    }
  }
}
</script>

<style lang="scss" scoped>
  .results {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shape-container {
    margin-bottom: 30px;
    width: 100%;
  }

  .shape {
    align-items: center;
    display: flex;
    font-weight: 700;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
  }

  .shape-text {
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .circle {
    background: red;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }

  .rectangle {
    background: red;
    font-weight: 400;
    height: 125px;
    width: 250px;
  }

  .rectangle + .shape-text {
    font-weight: 400;
  }

  .square {
    background: red;
    height: 150px;
    width: 150px;
  }

  .triangle {
    border-bottom: 150px solid red;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    height: 0;
    width: 0;
  }

  .triangle + .shape-text {
    bottom: 50px;
  }

  button {
    background-color: #ffffff;
    border: 2px solid #000000;
    cursor: pointer;
    display: block;
    font-size: 16px;
    margin: auto;
    max-width: 100px;
    padding: 15px;
    text-align: center;
    transition: all .3s ease-in;
    width: 100%;

    &:hover {
      background-color: #D9E9FB;
      border: 2px solid #9BAAB3;
      font-weight: 700;
    }
  }

  // TABLET
  @media only screen and (min-width: 768px) {
    .shape-container {
      margin: 15px;
      width: auto;
    }
  }
</style>
