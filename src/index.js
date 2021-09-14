import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Example() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((state) => state + 1);
    }, [])

    const decrement = useCallback(() => {
        setCount((state) => state - 1);
    }, []);

    return (
        <React.Fragment>
            <p>Number {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </React.Fragment>
    );
}

ReactDOM.render(
    <Example/>,
    document.getElementById('root')
);