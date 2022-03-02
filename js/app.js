//get input from search-field and get api response by calling api
const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    //clear the input search filed
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    //get the data
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
        
}

//get  all phones from the data array
const displaySearchResult = (phones) => {
    // console.log(phones)
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    phones.forEach(phone => {
        // console.log(phone);
        //create cards dynamically 
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card card-background">
                <img src="${phone.image}" class="card-img-top w-50 mt-3 mx-auto" alt="image-of-a-phone">
                <div class="card-body mx-auto">
                 <h5 class="card-title">${phone.phone_name}</h5>
                 <p class="card-text">${phone.brand}</p>
                 <button onclick="loadPhoneDetails('${phone.slug}')" class="border-0 border-rounded card-button" ><a class="text-white text-decoration-none"href="#card-details-section">Explore more</a></button>
                </div>
            </div>
            `;
           searchResult.appendChild(div)
            
    })
}
//load a new api and get phone details by their id 
const loadPhoneDetails = async slug => {
    // console.log(slug)
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
    

}
//display phone details by loading data from object and array
const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById("phone-details");
    phoneDetails.textContent = "";
    const div = document.createElement("div");
    div.classList.add('card');
    div.classList.add('card-details-background');

    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3" alt="image-of-a-phone">
    <div class="card-body" id="card-details-section">
      <h5 class="card-title">${phone.name}</h5>
      <p>Released Date: ${phone.releaseDate}</p>
      <h5 class="card-title">Main Features:</h5>
      <p class="card-text">Chip set: ${phone.mainFeatures.chipSet}</p>
      <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
      <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}</p>
      <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
      <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
      <h5 class="card-title">Sensors:</h5>
      <p> ${phone.mainFeatures.sensors[0]},  ${phone.mainFeatures.sensors[1]}, ${phone.mainFeatures.sensors[2]}, ${phone.mainFeatures.sensors[3]}, ${phone.mainFeatures.sensors[4]}, ${phone.mainFeatures.sensors[5]}</p>
      <h5 class="card-title">Others:</h5>
      <p class="card-text">WLAN: ${phone.others.WLAN}</p>
      <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
      <p class="card-text">Bluetooth: ${phone.others.GPS}</p>
      <p class="card-text">NFC: ${phone.others.NFC}</p>
      <p class="card-text">Radio: ${phone.others.Radio}</p>
    </div>
    `;
    phoneDetails.appendChild(div)
}