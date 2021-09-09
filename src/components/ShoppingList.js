import React from "react";
import plantList from '../data/plantList';

// Function to remove duplicates of the plant list
const removeDuplicate = (aTable) => {
    const categoryTable = [];
    aTable.map((element) => {
        return categoryTable.push(element.category);
    });
    const uniqueCategoryTable = [...new Set(categoryTable)];
    return uniqueCategoryTable;
};

const ShoppingList = () => {
    const categoryList = removeDuplicate(plantList);
    return (
        <React.Fragment>
            <h2>Les catégories de plantes</h2>
            <ul>
                {categoryList.map((plant, index) => {
                    return (
                        <li key={`${plant}-${index}`}>{plant}</li>
                    );
                })}
            </ul>

            <h2>Ma liste</h2>
            <ul>
                {plantList.map((plant) => {
                    return (
                        <li key={plant.id}>{plant.name}</li>
                    );
                })}
            </ul>
        </React.Fragment>
    )
};

export default ShoppingList;