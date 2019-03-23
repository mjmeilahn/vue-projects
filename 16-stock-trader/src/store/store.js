import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

// EXPECTED LIFECYCLE IS:
// 1. INITIAL STATE
// 2. COMPONENT METHOD THAT DISPATCHES EITHER ACTION OR MUTATION
// 3. USE VUEX ACTIONS FOR MUTUTATIONS THAT REQUIRE ASYNC
// 4. COMMIT TO VUEX MUTATIONS, CHANGE STATE IN MUTATIONS
// 5. COMPONENT HAS GETTERS TO FETCH NEW STATE VIA THEIR COMPUTED PROPERTY

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio,
    }
});