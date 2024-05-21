import { useEffect, useState } from "react";
async function queryNum(){
    let num: number = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 3000);
    });
    return num
}
// 与useEffect功能基本相似，它和 useEffect 的区别是它的 effect 执行是同步的，也就是在同一个任务里
// 好处是避免useEffect渲染可能闪动效果，但是相应的会阻塞渲染，因为它是同步，需要等他执行完后才会执行后续的渲染任务
// 超过 50ms 的任务就被称作长任务，会阻塞渲染，导致掉帧
// 也就是说，绝大多数情况下，用 useEffect，它能避免因为 effect 逻辑执行时间长导致页面卡顿（掉帧）。 但如果你遇到闪动的问题比较严重，那可以用 useLayoutEffect，但要注意 effect 逻辑不要执行时间太长。
function StateFn(){
     const [num, setNum] = useState(() => {
        const num1 = 1
        const num2 = 1
        return num1 + num2
    });
    useEffect(() => {
        queryNum().then(data => {
            setNum(data)
        })
        let timer = setInterval(() => console.log(num), 2000)
        return () => {
            clearInterval(timer)
        }
    }, [num])
   
    return (<div onClick={() => setNum(num + 1)}>num: {num}</div>)
}
export default StateFn