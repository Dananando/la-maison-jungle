import React from "react";
import PlantList from './PlantList';
import CategoryList from "./CategoryList";

const ShoppingList = () => {
    return (
        <React.Fragment>
            <h2>Les catégories de plantes</h2>
            <CategoryList />

            <h2>Ma liste</h2>
            <ul className='lmj-plant-list'>
                <PlantList />
            </ul>

        </React.Fragment>
    )
};

export default ShoppingList;