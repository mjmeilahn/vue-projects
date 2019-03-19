
// SEPARATE FILES FOR USING SHARED STATE LIKE HEADER/FOOTER COMPONENTS - INCLUDING "text" STATE AS EXAMPLE

export const mutateText = (state, updatedText) => {
    state.text = updatedText;
};

export default {
    mutateText,
}