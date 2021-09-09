import React from "react";
import PlantList from './PlantList';
import CategoryList from "./CategoryList";

const ShoppingList = () => {
    return (
        <React.Fragment>
            <h2>Les catégories de plantes</h2>
            <CategoryList />

            <h2>Ma liste</h2>
            <PlantList />

        </React.Fragment>
    )
};

export default ShoppingList;