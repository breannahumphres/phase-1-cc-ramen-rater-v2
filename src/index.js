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
          restaurant.innerHTML = ramenImg.dataset.ramenRestuarant;
        }
         
          });
 };



const addSubmitListener = () => {
  // Add code
 

}

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
    ramenImg.dataset.ramenRestuarant = ramen.restaurant;
    ramenMenu.append(ramenImg)
  });
handleClick();
  })
  .catch(error => console.log(error));
}
const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
}
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

