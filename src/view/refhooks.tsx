import { useRef, useEffect, useState } from "react";

function StateFn(){
    const inpRef = useRef<HTMLInputElement>(null)
    const numRef = useRef<number>(0)
    const [,setAdd] = useState(0)
    useEffect(() => {
        inpRef.current?.focus()
    },[])
    return (<div>
        <input ref={inpRef}></input>
        <div onClick={() => {
            numRef.current++
            // 因为 numRef.current修改不会触发刷新的，需要通过搭配 usestate触发刷新
            setAdd(numRef.current)
        }}>{numRef.current}</div>
    </div>)
}
export default StateFn