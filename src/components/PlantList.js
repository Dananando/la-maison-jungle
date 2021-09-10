import React from 'react';
import plantList from '../data/plantList';
import '../styles/ShoppingList.css';
import CareScale from '../components/CareScale';

const PlantList = () => {
    return (<ul className='lmj-plant-list'>
        {plantList.map((plant) => {
            return (
                <React.Fragment>
                    <li className='lmj-plant-item' key={plant.id}>
                        <div className='lmj-plant-sub-item' >{plant.name}</div>
                        <div className='lmj-plant-sub-item' >
                            {plant.isBestSale && <span className='lmj-plant-sub-item' >🔥</span>}
                        </div>
                        <div className='lmj-plant-sub-item' ><CareScale careType='water' scaleValue={plant.water} /></div>
                        <div className='lmj-plant-sub-item' ><CareScale careType='light' scaleValue={plant.light} /></div>                      
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                </React.Fragment>
            );
        })}
    </ul>);
};

export default PlantList;