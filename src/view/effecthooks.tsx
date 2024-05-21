import { useEffect, useState } from "react";
async function queryNum(){
    let num: number = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 3000);
    });
    return num
}
//  消除副作用，但现在有了 effect 之后，每次执行函数，额外执行了一些逻辑， 请求数据、定时器等这些异步逻辑
function StateFn(){
     const [num, setNum] = useState(() => {
        const num1 = 1
        const num2 = 1
        return num1 + num2
    });
    // 如果在 useEffect 中执行定时器 可以它通过在return的函数总执行清除定时器操作，避免多余的定时器
    useEffect(() => {
        queryNum().then(data => {
            setNum(data)
        })
        let timer = setInterval(() => console.log(num), 2000)
        return () => {
            clearInterval(timer)
        }
    }, [num]) // 第二个参数是 依赖数组，监听是否有变化来执行effect函数，如果没有传递 就每次都执行
   
    return (<div onClick={() => setNum(num + 1)}>num: {num}</div>)
}
export default StateFn