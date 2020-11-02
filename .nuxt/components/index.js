export { default as BaseComponents } from '../..\\components\\baseComponents.vue'
export { default as CommonComponents } from '../..\\components\\commonComponents.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyBaseComponents = import('../..\\components\\baseComponents.vue' /* webpackChunkName: "components_baseComponents" */).then(c => c.default || c)
export const LazyCommonComponents = import('../..\\components\\commonComponents.vue' /* webpackChunkName: "components_commonComponents" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
