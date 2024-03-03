export const generateProductErrorInfo = (product) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
        Lista de propiedades requeridas:
            -> title: type String, recibido: ${product.title}
            -> description: type String, recibido: ${product.description}
            -> price: type Number, recibido: ${product.price}
    `;
};