import React, { useState, useEffect } from 'react';
import Request from './Request.js';
import { booleanToYesNo } from './custom-code.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

function SelectItems() {
    const [items, setItems] = useState({ equip_id: [], equip_type: [], equip_unique_key: [], is_available: [], is_pending: [] });
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEquipId, setSelectedEquipId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const isLoggedInLocally = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(isLoggedInLocally === 'true');
      }, []);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/user/equipments/all?search=${searchQuery}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        console.log("Search Query:", event.target.value);
    };

    const handleShowModal = (equipId) => {
        setSelectedEquipId(equipId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='select-item'>
            <h2 className="text-color-primary">LIST OF EQUIPMENTS</h2>
            <h3>SELECT ITEM</h3>
            <div className='table-container'>
                <div className='input-field'>
                    <input placeholder="Search" onChange={handleSearchChange}></input>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Tracking ID</th>
                            <th>Equipment Type</th>
                            <th>Pending</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.equip_unique_key.map((unique_key, index) => (
                            <tr key={index}>
                                <td>{unique_key}</td>
                                <td>{items.equip_type[index]}</td>
                                <td>{booleanToYesNo(items.is_pending[index])}</td>
                                {isLoggedIn ? 
                                (
                                    <td>
                                        <button className="alt" onClick={() => handleShowModal(items.equip_unique_key[index])}>Borrow</button>
                                    </td>
                                ):(
                                    <td>
                                        <button className="alt" disabled>Unavailable</button>
                                    </td>
                                )};
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && <Request show={showModal} value={selectedEquipId} handleClose={handleCloseModal} />}
        </div>
    );
}

export default SelectItems;