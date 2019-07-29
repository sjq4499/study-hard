import Vue from 'vue';
import Vuex from 'vuex';
//日志
import Logger from 'vuex/dist/logger';
//引入子模块
import home from './model/home';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { home },
    plugins: [Logger()]
});