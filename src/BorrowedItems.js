import React, { useState, useEffect } from 'react';
import { booleanToYesNo } from './custom-code.js';

function BorrowedItems() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('http://127.0.0.1:5000/user/borrowed-items')
          .then((response) => response.json())
          .then((data) => {
            setItems(data);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-color-primary">LIST OF EQUIPMENTS</h2>
            <h3>BORROWED ITEMS</h3>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Borrow ID</th>
                            <th>Return Date Deadline</th>
                            <th>Claimed Status</th>
                            <th>Return Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((i, index) => (
                        <tr key={index}>
                            <td>{i.borrow_id}</td>
                            <td>{new Date(i.requested_end_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                            <td>{booleanToYesNo(i.is_claimed)}</td>
                            <td>{booleanToYesNo(i.is_returned)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default BorrowedItems;
