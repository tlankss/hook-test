import { useState } from "react";

function StateFn(){
    const [num, setNum] = useState(() => {
        const num1 = 1
        const num2 = 1
        return num1 + num2
    });
    return (<div onClick={() => setNum(num + 1)}>num: {num}</div>)
}
export default StateFn