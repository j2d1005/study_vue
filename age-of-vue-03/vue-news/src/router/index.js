import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from "../store";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                // 이벤트 버스는 라이프사이클 훅스 안에 선언
                bus.$emit('start:spinner');
                // this.$store.dispatch('FETCH_LIST', this.$route.name)
                store.dispatch('FETCH_LIST', to.name)
                    // this.$store는 Vue인스턴스 내에서 store연결할 때 .. 여기처럼  .js파일에서는 스토어 임포트 해와야함
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/ask',
            name: 'ask',
            // component: AskView,
            component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                    .catch(error => console.log(error))
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,
            component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                    .catch(error => console.log(error))
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:postNum',
            component: ItemView,
        }
    ]
});

