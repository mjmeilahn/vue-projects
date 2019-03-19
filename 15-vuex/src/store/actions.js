
// SEPARATE FILES FOR USING SHARED STATE LIKE HEADER/FOOTER COMPONENTS - INCLUDING "text" STATE AS EXAMPLE

export const updateText = ({ commit }, payload) => {
    commit('mutateText', payload)
};

export default {
    updateText,
}
