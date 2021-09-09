import React from 'react';
import plantList from '../data/plantList';
import '../styles/ShoppingList.css';

const PlantList = () => {
    return (<ul className='lmj-plant-list'>
        {plantList.map((plant) => {
            if (plant.isBestSale) {
                return (
                    <React.Fragment>
                        <li className='lmj-plant-item' key={plant.id}>
                            {plant.name} 🔥
                            {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        </li>
                    </React.Fragment>
                )

            }
            return (
                <React.Fragment>
                    <li className='lmj-plant-item' key={plant.id}>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                </React.Fragment>
            )
        })}
    </ul>)
};

export default PlantList;