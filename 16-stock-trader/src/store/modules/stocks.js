import stocks from '../../data/stocks';


// EXPECTED LIFECYCLE IS:
// 1. INITIAL STATE
// 2. COMPONENT METHOD THAT DISPATCHES EITHER ACTION OR MUTATION
// 3. USE VUEX ACTIONS FOR MUTUTATIONS THAT REQUIRE ASYNC
// 4. COMMIT TO VUEX MUTATIONS, CHANGE STATE IN MUTATIONS
// 5. COMPONENT HAS GETTERS TO FETCH NEW STATE VIA THEIR COMPUTED PROPERTY

const state = {
    stocks
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RAND_STOCKS');
    },
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RAND_STOCKS': state => {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - .5));
        });
    },
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}