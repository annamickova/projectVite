import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count - 1)}>
                -
            </button>
            count is {count}
            <button onClick={() => setCount((count) => count + 1)}>
                +
            </button>
        </div>
    );
};

export default Counter;
