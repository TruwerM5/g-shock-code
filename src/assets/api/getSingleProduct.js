async function getSingleProduct(url, name) {
    
        let request = await fetch(url);
        let response = await request.json();    
        
        let data = response.find(item => item.name == name);
        return data;

    
}

export default getSingleProduct;