import { useReducer, Reducer } from "react";

interface Data {
    num: number;
}
interface Action {
    type: string;
    payload: number;
}

function reduce(state: Data, action: Action){
    switch(action.type){
        case "add":
            return {num: state.num + action.payload};
        case "sub":
            return {num: state.num - action.payload};
        default:
            return state;
    }
}
// 在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer
// useReducer 的类型参数传入 Reducer<数据的类型，action 的类型>
// 然后第一个参数是 reducer，第二个参数是初始数据。
// 点击加的时候，触发 add 的 action，点击减的时候，触发 minus 的 action。

// immer 是依赖 Proxy 实现的，它会监听你在函数里对属性的修改，然后帮你创建一个新对象
// setObj(produce(obj, (obj) => {
//     obj.a.c.e ++;
// }))
function StateFn(){
    const [res, dispatch] = useReducer<Reducer<Data, Action>>(reduce, {num: 1})
    return (<div>
        <span>num: {res.num}</span>
        <span onClick={()=>dispatch({type: "add", payload: 1})}>加</span>
        <span onClick={()=>dispatch({type: "sub", payload: 1})}>减</span>
    </div>)
}
export default StateFn