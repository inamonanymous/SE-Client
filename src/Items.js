import React, { useState } from 'react';
import Request from './Request.js';
import SelectItems from './SelectItem.js';
import BorrowedItems from './BorrowedItems.js';
import CompletedItems from './CompletedItems.js';
import PendingItems from './PendingItems.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS

function Items() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipId, setSelectedEquipId] = useState(null);

    const handleShowModal = (equipId) => {
        setShowModal(true);
        setSelectedEquipId(equipId);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section id="items">
            <div>
                <Slider
                    arrows={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    fade={true}
                    cssEase='linear'
                    speed={500}
                >
                    <SelectItems />
                    <BorrowedItems />
                    <PendingItems />
                </Slider>
            </div>
            {/* Render the modal outside of the slick container */}
            <Request show={showModal} value={selectedEquipId} handleClose={handleCloseModal} />
        </section>
    );
}

export default Items;
