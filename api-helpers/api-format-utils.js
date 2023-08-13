export function convertCategories(categoriesArray) {

    const insertImagePath = (category) => {

        let path = ''

        switch (category) {
            case 'smartphones':
                path = '/img/'
                break
            default:
                path = ''
                break
        }
        return path
    }

    const categoryObjects = []

    categoriesArray.forEach((category, index) => {
        categoryObjects.push({
            id: index,
            imagePath: insertImagePath(category),
            title: category
        })
    });

    return categoryObjects
}