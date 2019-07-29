import { getlist } from '@/api/index';
//数据
let state = {
    list: []
};
//同步
let mutations = {
    getlist(state, payload) {
        // console.log(payload, 'payload');
        state.list = payload;
    },
    count(state, payload) {
        // console.log(payload, 'payload');
        state.list[payload.id].num = payload.num;
    }
};
//异步
let actions = {
    getlist({ commit }, payload) {
        new Promise((resolve, reject) => {
            getlist().then(res => {
                // console.log(res, 'res');
                commit('getlist', res.data);
                resolve();
            });
        });
    }
};
export default {
    namespaced: 'home', //命名空间
    state,
    mutations,
    actions
};