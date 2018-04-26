const apiKey = 'aCOMD8qFCqzJO6wlqizmJe4R1BK3M9fSBZIQ6mJpvJmd3QoK5T2GXZctfcCwwCYTsOn0OFLrYu-dX-5XkhqihZJ-UBYVJHmSAYFy3M_hbJyhuUA6KcAjNlOvy8zhWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
export default Yelp;
