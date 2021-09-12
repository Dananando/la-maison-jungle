import React from 'react';
import '../styles/PlantItem.css';
import CareScale from '../components/CareScale';

const PlantItem = ({ name, cover, id, light, water, isBestSale, isSpecialOffer }) => {
    return (

        <React.Fragment>
            <li className='lmj-plant-item' key={id}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />

                <div>
                    {name}
                </div>

                <div className='lmj-plant-sub-item'>
                    {isBestSale && <span className='lmj-plant-sub-item'>🔥</span>}
                </div>

                <div className='lmj-plant-sub-item' >
                    <CareScale careType='water' scaleValue={water} />
                </div>

                <div className='lmj-plant-sub-item' >
                    <CareScale careType='light' scaleValue={light} />
                </div>

                {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
            </li>
        </React.Fragment>

    )
};

export default PlantItem;