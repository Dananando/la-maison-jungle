// Function to remove duplicates of the plant list
const removeDuplicate = (aTable) => {
    const categoryTable = [];
    aTable.map((element) => {
        return categoryTable.push(element.category);
    });
    const uniqueCategoryTable = [...new Set(categoryTable)];
    return uniqueCategoryTable;
};

module.exports = removeDuplicate;