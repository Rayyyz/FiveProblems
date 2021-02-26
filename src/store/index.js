import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    title: '第一周', //小标题
    itemIndex: 1,   //第几题
    allTime: 0,     //总时长
    timer: '',      //定时器
    itemDetail: [
        {
            "item_id": 1,
            "item_name": "爱仕达翁群请问丰富",
            "type": "one",
            "item_answer": [{
                "answer_id": 1,
                "answer_text": "答案aa",
                "answer_is_true": true,
            }, {
                "answer_id": 2,
                "answer_text": "答案b",
                "answer_is_true": false,
            }, {
                "answer_id": 3,
                "answer_text": "答案c",
                "answer_is_true": false,
            }, {
                "answer_id": 4,
                "answer_text": "答案d",
                "answer_is_true": false,
            },]
        },
        {
            "item_id": 2,
            "item_name": "阿萨德大大生产者奥术大师多",
            "type": "more",
            "item_answer": [{
                "answer_id": 5,
                "answer_text": "答案a",
                "answer_is_true": false,
            }, {
                "answer_id": 6,
                "answer_text": "答案bb",
                "answer_is_true": true,
            }, {
                "answer_id": 7,
                "answer_text": "答案c",
                "answer_is_true": false,
            }, {
                "answer_id": 8,
                "answer_text": "答案d",
                "answer_is_true": false,
            },]
        },
        {
            "item_id": 3,
            "item_name": "法定丈夫部分梵蒂阿斯顿发很方便分数冈找工作え",
            "type": "more",
            "item_answer": [{
                "answer_id": 9,
                "answer_text": "答案aa",
                "answer_is_true": true,
            }, {
                "answer_id": 10,
                "answer_text": "答案b",
                "answer_is_true": false,
            }, {
                "answer_id": 11,
                "answer_text": "答案c",
                "answer_is_true": false,
            }, {
                "answer_id": 12,
                "answer_text": "答案d",
                "answer_is_true": false,
            },]
        },
        {
            "item_id": 4,
            "item_name": "すみませんでしだ",
            "type": "one",
            "item_answer": [{
                "answer_id": 13,
                "answer_text": "答案a",
                "answer_is_true": false,
            }, {
                "answer_id": 14,
                "answer_text": "答案b",
                "answer_is_true": false,
            }, {
                "answer_id": 15,
                "answer_text": "答案c",
                "answer_is_true": false,
            }, {
                "answer_id": 16,
                "answer_text": "答案dd",
                "answer_is_true": true,
            },]
        },
        {
            "item_id": 5,
            "item_name": "This is question",
            "type": "one",
            "item_answer": [{
                "answer_id": 17,
                "answer_text": "答案a",
                "answer_is_true": false,
            }, {
                "answer_id": 18,
                "answer_text": "答案b",
                "answer_is_true": false,
            }, {
                "answer_id": 19,
                "answer_text": "答案cc",
                "answer_is_true": true,
            }, {
                "answer_id": 20,
                "answer_text": "答案d",
                "answer_is_true": false,
            },]
        }
    ],
    answerid: [],    //记录答案id
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})
