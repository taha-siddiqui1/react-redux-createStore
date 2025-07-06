import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Counter() {
    const count = useSelector((store) => store.count);
    const dispatch = useDispatch();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
            <h2>Counter</h2>

            <button
                onClick={() => dispatch({ type: "Increment" })}
            >Increment</button>
            Count {count}
            <button
                onClick={() => dispatch({ type: "Decrement" })}
            >Decrement</button>
        </div>
    )
}

export default Counter