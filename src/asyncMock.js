const products = [
    { 
        id: '1', 
        name: 'Camiseta Argentina', 
        price: 1000, 
        category: 'camiseta', 
        img:'https://sportline.vtexassets.com/arquivos/ids/955567-800-1422?v=638145471733900000&width=800&height=1422&aspect=true', 
        stock: 25, 
        description:'Camiseta De Futbol adidas Afa'
    },
    { id: '2', name: 'Camiseta Barcelona', price: 800, category: 'camiseta internacional', img:'https://sportline.vtexassets.com/arquivos/ids/799227-800-1422?v=638066962730530000&width=800&height=1422&aspect=true', stock: 16, description:'Remera Nike Barcelona'},
    { id: '3', name: 'Short Argentina', price: 1200, category: 'short', img:'https://sportline.vtexassets.com/arquivos/ids/877053-800-1422?v=638098818783270000&width=800&height=1422&aspect=true', stock: 10, description:'Short adidas Titular Afa'}
]

const categories = [
    {id: '1', description: 'camisetas', slug: 'camiseta'},
    {id: '2', description: 'camisetas internacionales', slug: 'camiseta internacional'},
    {id: '1', description: 'shorts', slug: 'short'},
]


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}