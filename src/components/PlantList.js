import React from 'react';
import plantList from '../data/plantList';
import '../styles/ShoppingList.css';
import CareScale from '../components/CareScale';

const PlantList = () => {
    return (<ul className='lmj-plant-list'>
        {plantList.map((plant, index) => {
            return (
                <React.Fragment>
                    <li className='lmj-plant-item' key={plant.id}>
                        <div key={`${plant.name}`}>
                            {plant.name}
                        </div>
                        <div key={`${plant.name}-${plant.id}`} className='lmj-plant-sub-item'>
                            {plant.isBestSale && <span className='lmj-plant-sub-item'>🔥</span>}
                        </div>
                        <div key={`${plant.name}-${plant.id}-${index}`} className='lmj-plant-sub-item' >
                            <CareScale careType='water' scaleValue={plant.water} />
                        </div>
                        <div key={`${plant.id}-${index}-${plant.name}`} className='lmj-plant-sub-item' >
                            <CareScale careType='light' scaleValue={plant.light} />
                        </div>
                        {plant.isSpecialOffer && <div key={`$${index}-{plant.id}-${plant.name}`} className='lmj-sales'>Soldes</div>}
                    </li>
                </React.Fragment>
            );
        })}
    </ul>);
};

export default PlantList;