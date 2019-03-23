
// EXPECTED LIFECYCLE IS:
// 1. INITIAL STATE
// 2. COMPONENT METHOD THAT DISPATCHES EITHER ACTION OR MUTATION
// 3. USE VUEX ACTIONS FOR MUTUTATIONS THAT REQUIRE ASYNC
// 4. COMMIT TO VUEX MUTATIONS, CHANGE STATE IN MUTATIONS
// 5. COMPONENT HAS GETTERS TO FETCH NEW STATE VIA THEIR COMPUTED PROPERTY

const state = {
    counter: 0
};


const actions = {
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.duration);
    },

    // OR USE DESTRUCTURING TO GET "commit" FUNCTION
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration);
    },
};


// ALL MUTATIONS MUST RUN SYNCHRONOUSLY.
// IN ORDER TO TRACK ALL CHANGES MADE IN OUR APP,
// USE ACTIONS PRIOR TO MUTATIONS FOR ASYNC OPERATIONS
const mutations = {
    increment: (state, amount) => {
        // console.log(amount);
        (amount) ? state.counter += amount : state.counter++;
    },
    decrement: (state, amount) => {
        (amount) ? state.counter -= amount : state.counter--;
    },
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return 'Number of Clicks: ' + state.counter;
    },
};


export default {
    state,
    actions,
    mutations,
    getters
}