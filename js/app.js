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
        .then(data => displaySearchResult(data.data.slice(0,20)));
        
}
//get  all phones from the data array
const displaySearchResult = (phones) => {
    console.log(phones)
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    for (const phone of phones) {
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
                 <button class="border-0 border-rounded card-button" >Explore more</button>
                </div>
            </div>
            `;
            searchResult.appendChild(div)
    }
}