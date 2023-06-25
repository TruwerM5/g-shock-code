async function getGallery(url, array) {
    try {
        let request = await fetch(url);
        let response = await request.json();

        return response;
        
    } catch(err) {
        console.log('Error', err)
    }
    
}

export default getGallery;