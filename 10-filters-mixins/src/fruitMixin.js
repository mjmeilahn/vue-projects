export const fruitMixin = {
    data() {
        return {
            text: 'Hello there!',
            fruits: [
                'Apple',
                'Banana',
                'Mango',
                'Melon'
            ],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(el => {
                return el.match(this.filterText);
            });
        }
    },
    created() {
        console.log('created in Mixin');
    }
}