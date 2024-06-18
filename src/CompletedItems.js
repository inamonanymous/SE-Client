import React, { useState, useEffect } from 'react';
import { capitalize } from './custom-code.js';

function CompletedItems() {
    const [items, setItems] = useState({
        completed_id: [],
        student_department: [],
        equip_type: [],
        equip_unique_key: [],
      });
    
      useEffect(() => {
        fetch('http://127.0.0.1:5000/user/completed-items')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setItems(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return (
        <div>
            <h2 className="text-color-primary">LIST OF EQUIPMENTS</h2>
            <h3>BORROW HISTORY</h3>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Equipment Unique Key</th>
                            <th>Student Department</th>
                            <th>Equipment Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.completed_id.map((completed_id, index) => (
                        <tr key={index}>
                            <td>{items.equip_unique_key[index]}</td>
                            <td>{items.student_department[index]}</td>
                            <td>{capitalize(items.equip_type[index])}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Student Department</th>
                            <th>Equipment Type</th>
                            <th>Equipment Unique Key</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

}

export default CompletedItems;
