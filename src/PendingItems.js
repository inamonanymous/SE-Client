import React, { useState, useEffect } from 'react';
import { capitalize, booleanToYesNo } from './custom-code.js';

function PendingItems() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/user/pending-items')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setItems(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
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
            <h3>PENDING ITEMS</h3>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Pending Id</th>
                            <th>Type</th>
                            <th>Unique Key</th>
                            <th>Expected Return Date</th>
                            <th>Verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.pending_id}</td>
                                <td>{item.equip_type}</td>
                                <td>{item.equip_unique_key}</td>
                                <td>{new Date(item.requested_end_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                                <td>{item.is_verified.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PendingItems;
