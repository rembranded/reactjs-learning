import React, {Component} from 'react';

export default class ArrayDemo extends Component {
    render() {
        let a = [10, 20, 30, 40, 50];
        let b = a.map((item, index) => <li key={index}>{index}, {item}</li>);
        let products = [
            {
                id: 1,
                name: "Monitor", 
                price: 2000
            },
            {
                id: 2,
                name: "Washing Machine",
                price: 1000
            },
            {
                id: 3,
                name: "Grinder",
                price: 1230
            }];
        return (
            <div>
                <hr />
                <h3>ArrayDemo Component</h3>
                <ul>{b}</ul>
                <br />
                <table border = "2px">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => 
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )}
                </tbody>
                </table>
                <hr />
            </div>
        )
    }
}