import React from 'react';
import plantList from '../data/plantList';
import '../styles/ShoppingList.css';
import PlantItem from '../components/PlantItem';

const PlantList = () => {
    return (
        <React.Fragment>
            {plantList.map(({ name, cover, id, light, water, isBestSale, isSpecialOffer }) => {
                return (<PlantItem id={id} cover={cover} name={name} light={light} water={water} isBestSale={isBestSale} isSpecialOffer={isSpecialOffer} />)
            })}
        </React.Fragment>
    );
};

export default PlantList;