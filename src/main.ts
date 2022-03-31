import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant';
import Vant from 'vant'
import 'vant/lib/index.css'
import { Search } from 'vant';
import { Button } from 'vant';
import { Sticky } from 'vant';

createApp(App).use(store).use(router).use(Vant).
use(Search).use(Button).use(Tab).use(Tabs).use(Sticky).
mount('#app')


