export { default as MainForm } from '../../components/MainForm.vue'
export { default as Results } from '../../components/Results.vue'

export const LazyMainForm = import('../../components/MainForm.vue' /* webpackChunkName: "components/MainForm" */).then(c => c.default || c)
export const LazyResults = import('../../components/Results.vue' /* webpackChunkName: "components/Results" */).then(c => c.default || c)
