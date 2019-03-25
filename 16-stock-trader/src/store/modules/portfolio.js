

// EXPECTED LIFECYCLE IS:
// 1. INITIAL STATE
// 2. COMPONENT METHOD THAT DISPATCHES EITHER ACTION OR MUTATION
// 3. USE VUEX ACTIONS FOR MUTUTATIONS THAT REQUIRE ASYNC
// 4. COMMIT TO VUEX MUTATIONS, CHANGE STATE IN MUTATIONS
// 5. COMPONENT HAS GETTERS TO FETCH NEW STATE VIA THEIR COMPUTED PROPERTY

const state = {
    funds: 10000,
    stocks: []
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const mutations = {
    'BUY_STOCK': (state, { stockID, stockQTY, stockPrice }) => {
        const record = state.stocks.find(element => element.id === stockID);

        console.log('qty is', stockQTY);

        if (record) {
            record.qty += stockQTY;
        } else {
            state.stocks.push({
                id: stockID,
                qty: stockQTY,
            });
        }

        state.funds -= stockPrice * stockQTY;
    },

    'SELL_STOCK': (state, { stockID, qty, stockPrice }) => {
        const record = state.stocks.find(element => element.id === stockID);

        if (record.qty > qty) {
            record.qty -= qty;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += stockPrice * qty;
    },

    'SET_PORTFOLIO': (state, portfolio) => {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    },
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);

            return {
                id: stock.id,
                qty: stock.qty,
                name: record.name,
                price: record.price
            }
        });
    },

    funds(state) {
        return state.funds;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}