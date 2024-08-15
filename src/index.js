// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
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
  ramens.forEach(ramen => {
    const ramenImg = document.createElement("img")
    ramenImg.src = ramen.image
    ramenMenu.append(ramenImg)
  });
  })
  .catch(error => console.log(error));
}
const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

