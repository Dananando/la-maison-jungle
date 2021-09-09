import plantList from '../data/plantList';
import removeDuplicate from '../functions/removeDuplicate';
import '../styles/ShoppingList.css';

const CategoryList = () => {
    const categoryList = removeDuplicate(plantList);
    return (
        <ul className='lmj-plant-list'>
            {categoryList.map((category, index) => {
                return (
                    <li className='lmj-plant-item' key={`${category}-${index}`}>{category}</li>
                );
            })}
        </ul>
    )
};

export default CategoryList;