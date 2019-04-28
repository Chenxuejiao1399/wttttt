import Vue from "vue";

const app = {
    state: {
        ifCanCheckToken: true, //默认可以刷新token
    },
    mutations: {
        // 设置文章
        SET_ARTICLEDATA: (state, articleData) => {
            state.articleData = articleData
        }
    },
    actions: {
        // 是否能刷新token
        set_ifCanCheckToken({ commit, state }, ifCanCheckToken) {
            return new Promise((resolve, reject) => {
                state.ifCanCheckToken = ifCanCheckToken
                resolve("set_ifCanCheckToken - SUCCESS")
            })
        },
        // 能否刷新token-状态判断
        get_ifCanCheckToken({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ifCanCheckToken)
            })
        },
    }
}

export default app
