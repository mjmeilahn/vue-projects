import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import counter from './modules/counter';

Vue.use(Vuex);

// EXPECTED LIFECYCLE IS:
// 1. INITIAL STATE
// 2. COMPONENT METHOD THAT CHANGES STATE
// 3. USE VUEX ACTIONS FOR MUTUTATIONS THAT REQUIRE ASYNC
// 4. COMMIT TO VUEX MUTATIONS
// 5. COMPONENT HAS GETTERS TO FETCH NEW STATE


// NOTE THAT ALL FUNCTION NAMESPACES MUST BE UNIQUE FOR:
// state, actions, mutations, getters
// AND NAMESPACES WITHIN MODULES SHOULD BE UNIQUE
export const store = new Vuex.Store({
    state,
    actions,

    // ALL MUTATIONS MUST RUN SYNCHRONOUSLY,
    // IN ORDER TO TRACK ALL CHANGES MADE IN OUR APP
    // USE ACTIONS PRIOR TO MUTATIONS FOR ASYNC OPERATIONS
    mutations,
    getters,
    modules: {
        counter
    }
});