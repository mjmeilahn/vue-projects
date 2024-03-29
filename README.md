# Vue Projects

1. Basics - binding data, computed properties, HTML event listeners, watchers

2. Monster Slayer Game - Interactive DOM game combining Vue state with CSS display. Options to Attack, Heal or Give Up. Monster will always Attack - in the future might have Monster heal itself depending on probability factors.

3. Vue CLI - Basic setup using Vue's CLI, Webpack & SASS. Exploring folder structure and optimizations for deployment to a server.

4. Component Basics - Creating reusable components, understanding Global vs. Private components. Shared vs. private state among components.

5. Component Communication - Updating sibling components from different parent via an event bus service. Exploring props through strict and non-strict type-checking.

6. Advanced Components - Understanding Dynamic Components, their lifecycles and default state upon creation, slots, keep-alive, and component keywords.

7. Wonderful Quotes - App that adds quotes via $emit, slots, and Vue click handlers: @click.prevent & @click.native

8. Forms - Exploring how Vue works with forms, submission handling via click.prevent, optimizing two way binding with v-model.lazy

9. Directives - Learning life-cycle methods like bind and update for custom directives & how to modify through arguments passed in HTML by string or object.

10. Filters & Mixins - Understanding Filters vs. Computed properties, and what happens to rendered DOM in both approaches. Exploring mixins and their scope. Understanding why global mixins are usually bad in terms of performance.

11. Animations - Understanding transition and transition-group elements and how they can be customized via CSS or JS animations. Lifecycle hooks explored in the JS side.

12. The Super Quiz - Applying animations from previous project to Math Quiz. A dynamic component holds Question & Answer components passed by reference. A right answer will trigger a transition with CSS keyframes. A wrong answer will trigger an alert.

13. Vue-Resource / HTTP - Understanding vue-resource library and how its functions can send, format and intercept requests and responses. Exploring resource.save() shorthand compared to default $http methods.

14. Vue-Router - Exploring common routing in a Vue application: Params, query strings, redirects, scrollTo, before and after entering a route, router-view animations, and lazy-loading Components via Webpack syntax

15. Vuex - Understanding lifecycles of Vuex, with few similarities to Redux/Flux. Vuex uses a dispatcher to actions, then state mutation. A component will specify a getter under its own computed property. Exploring folder structure and how to break down Vuex for larger applications. Usage of Babel Presets ("stage-2") & package.json for spread operator.

16. Stock Trader - Combining previous lessons into one project. Vue resource, routing, Vuex, HTML v-tags and basic Firebase integration serving as initial state.

17. Pick Shapes Challenge - Basic Nuxt installation with the Pick Shapes challenge. Simple component communication without Vuex for state management. Of the different types of Vue deployments Nuxt is better for SEO as it works in combination with Node for routing and rendering as if it is a server-side rendered web application. Limitations exist for Nuxt mainly concerning heavy traffic performance issues. If heavy traffic is expected, explore other server-side rendering options without the bloat of Nuxt.

18. Todo List - Simple todo app using Bootsrap Vue, Local Storage and Bootstrap Icons. Items in the list can be edited and saved in its original place. Other options exist to remove an item or remove all items.
