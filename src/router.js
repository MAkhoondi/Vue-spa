import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from './pages/HomeComp.vue';

import TemplateUser from './pages/users/TemplateUser.vue';
import IndexUser from './pages/users/IndexUser.vue';
import ShowUser from './pages/users/ShowUser.vue';

import TemplatePost from './pages/posts/TemplatePost.vue';
import IndexPost from './pages/posts/IndexPost.vue';
import ShowPost from './pages/posts/ShowPost.vue';
import CreatePost from './pages/posts/CreatePost.vue';
import EditPost from './pages/posts/EditPost.vue';

const routes = [
    { path: '/', name: 'home', component: HomeComp },
    {
        path: '/users', name: 'userTemplate', component: TemplateUser, children: [
            { path: '', name: 'users', component: IndexUser },
            { path: ':id', name: 'userId', component: ShowUser }
        ]
    },
    {
        path: '/posts', name: 'postTemplate', component: TemplatePost, children: [
            { path: '', name: 'posts', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost },
            { path: 'create', name: 'createPost', component: CreatePost },
            { path: 'edit/:id', name: 'editPost', component: EditPost }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;