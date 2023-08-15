export function convertCategories(categoriesArray) {

    const categoryObjects = []

    categoriesArray.forEach((category, index) => {
        categoryObjects.push({
            id: index,
            imagePath: `/images/category-images-asset/${category}.png`,
            title: category
        })
    });

    return categoryObjects
}