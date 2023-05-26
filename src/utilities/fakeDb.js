// Add data to local storage

const addToDb = id => {
    let jobCart = {};

    // get previous data from local Storage

    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    //    add quantity
    const quantity = jobCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    else {
        jobCart[id] = 1;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart))
}

// get stored data from cart

const getStoredCart = () => {
    let jobCart = {};

    // get previous data from local Storage

    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;

}

export { addToDb, getStoredCart }