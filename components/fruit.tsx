import React from 'react';

const FruitList: React.FC = () => {
    const fruits = ['Apple', 'orange', 'mango'];

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default FruitList;