import React, {useState, useEffect} from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const [parity, setParity] = useState("Введено четное число");

    useEffect(() => {
        count % 2 === 0 ? setParity("Введено четное число") : setParity("Введено нечетное число");
    });

    return (
        <div className={"container"}>
            <div className={"counter"}>
                <h1>{count}</h1>
            </div>
            <div className={"counter"}>
                <div style={{fontSize: "13pt"}}>{parity}</div>
            </div>
            <div className={"groupButton"}>
                <button className={"counterButton"} onClick={() => setCount(count + 1)}>+</button>
                <button className={"counterButton"} onClick={() => setCount(0)}>reset</button>
                <button className={"counterButton"} onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            </div>
        </div>
    )

}

