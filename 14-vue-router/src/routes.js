import Header from './components/Header.vue';
import Home from './components/Home.vue';

// WEBPACK WORK-AROUND TO LAZY LOAD MINI-BUNDLES
// INSTEAD OF ONE COMPILED SOURCE CODE
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    });
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    });
};

export const routes = [
    // USING <router-view> WITH "name" ATTRIBUTE
    { path: '', components: {
        default: Home,
        'header-top': Header
    }},

    // DEFAULT HOMEPAGE ROUTE
    // { path: '', component: Home },

    // USING <router-view> WITHOUT "name" ATTRIBUTE
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route beforeEnter');
            next();
        }},
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]},

    // REDIRECTS
    { path: '/redirect-me', redirect: '/user' },

    // 404 REDIRECT
    { path: '*', redirect: '/' }

    // SET PROPS TO TRUE TO PASS DYNAMIC VALUES INTO COMPONENT AND LOAD AS PROPS IN THE COMPONENT
    // { path: '/user/:id', component: User, props: true }
];