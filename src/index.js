// index.js

// Callbacks
const handleClick = () => {
  // Add code
    const ramenMenu = document.querySelector("#ramen-menu");
      ramenMenu.addEventListener("click", function(event) {
        const ramenImg = event.target;
        if (ramenImg.tagName ==="IMG"){
          const detailImage = document.querySelector("#ramen-detail .detail-image");
          detailImage.src = ramenImg.src;
          const nameElement = document.querySelector("#ramen-detail .name");
          nameElement.innerHTML = ramenImg.dataset.ramenName;
          const restaurant = document.querySelector("#ramen-detail .restaurant");
          restaurant.innerHTML = ramenImg.dataset.ramenRestaurant;
          const rating = document.querySelector("#rating-display");
          rating.innerHTML = ramenImg.dataset.ramenRating;
          const comment = document.querySelector("#comment-display");
          comment.innerHTML = ramenImg.dataset.ramenComment;
        }
         
          });
 };



const addSubmitListener = () => {
  // Add code
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRamen = {
        "name" : event.target["new-name"].value,
        "restaurant" : event.target["new-restaurant"].value,
        "image": event.target["new-image"].value,
        "rating": event.target["new-rating"].value,
        "comment": event.target["new-comment"].value
    };

    fetch("http://localhost:3000/ramens", {
      //the type of request we're making (default: GET)
      method: "POST",
      headers: {
          //specify the type of content you're sending 
          "Content-Type": "application/json",
          //specify the type of content you want to receive
          "Accept": "application/json"
      },
     //body is info being sent along with out request
      body: JSON.stringify(newRamen)
  
  })
  .then(response => response.json())
.then(ramenList => {
        const newRamenData = document.createElement("img");
        newRamenData.src = ramenList.image;
        newRamenData.dataset.ramenName = ramenList.name;
        newRamenData.dataset.ramenRestaurant = ramenList.restaurant;
        newRamenData.dataset.ramenRating = ramenList.rating;
        newRamenData.dataset.ramenComment = ramenList.comment;

        document.querySelector("#ramen-menu").append(newRamenData);
    console.log(ramenList);
})
.catch(error => console.error(error));
event.target.reset();
  });
  
};


const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens => 
     { 
      //console.log(ramen)
      const ramenMenu = document.querySelector("#ramen-menu")
      ramenMenu.innerHTML = "";
  ramens.forEach(ramen => {
    const ramenImg = document.createElement("img");
    ramenImg.src = ramen.image
    ramenImg.dataset.ramenName = ramen.name;
    ramenImg.dataset.ramenRestaurant = ramen.restaurant;
    ramenImg.dataset.ramenRating = ramen.rating;
    ramenImg.dataset.ramenComment = ramen.comment;
    ramenMenu.append(ramenImg)

    
  });
handleClick();
  })
  .catch(error => console.log(error));
};
const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

  main();



// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

