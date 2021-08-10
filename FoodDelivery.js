var restaurantsData = [{id : 1, name : "Anjappar",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"3.5",offers:"75rs", tags:["South Indian","North Indian"],Image :"https://b.zmtcdn.com/data/pictures/2/19117982/09e7e40ef2591f14cf7649dfe2a4fddf_o2_featured_v2.jpg" },
                    {id : 2, name : "Maris Briyani Stall",location:"Tuticorin",openTime:"1:00PM",closeTime:"11:00PM",
                    ratings:"4.5",offers:"20%", tags:["FastFood","Briyani","South Indian"],Image :"https://b.zmtcdn.com/data/pictures/7/19139147/170ade269bc6ce86772cc23bb0141bd9_o2_featured_v2.jpg"},
                    {id : 3, name : "Karunan Restaurant",location:"Tuticorin",openTime:"11:00AM",closeTime:"11:00PM",
                    ratings:"3.8",offers:"50 rs", tags:["South Indian","Arabian"],Image :"https://b.zmtcdn.com/data/pictures/5/19143255/3373f8899656829e582210f618193483_o2_featured_v2.jpg" },
                    {id : 4, name : "Royal Coco Restaurant",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"3.3",offers:"", tags:["Chinese","South Indian"],Image :"https://b.zmtcdn.com/data/pictures/2/19139192/f1521767745233b5fcfcf28c9bd475cf_o2_featured_v2.jpg" },
                    {id : 5, name : "Hotel Malabar",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"4.3",offers:"", tags:["Veg","NonVeg","Juices"],Image :"https://b.zmtcdn.com/data/pictures/2/19217832/e758f265f1dcf11d0c52b80d3216c329_o2_featured_v2.jpg" },
                    {id : 6, name : "JJ Briyani",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"4.8",offers:"10%", tags:["NonVeg","Briyani","Parotta"],Image :"https://b.zmtcdn.com/data/pictures/2/19294042/9a4aa702a70d5def716df89e864fc468_o2_featured_v2.jpg" },
                    {id : 7, name : "Point to Point",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"1.2",offers:"", tags:["Tamil","Briyani"],Image :"https://b.zmtcdn.com/data/pictures/9/19293499/4bd1f33e622322ed58c77379dc364f80_o2_featured_v2.jpg" },
                    {id : 8, name : "Sohara",location:"Tuticorin",openTime:"9:00AM",closeTime:"11:00PM",
                    ratings:"2.0",offers:"", tags:["NonVeg","Briyani"],Image :"https://b.zmtcdn.com/data/pictures/7/19224877/84773d3b1a8168039b3e89c231f537c4_o2_featured_v2.jpg" }];

window.onload = function(){
    getRestaurants(restaurantsData);
}

var btnSearch = document.querySelector('#btn_search');
var restaurants = document.querySelector('#restaurants');

btnSearch.addEventListener('click',function(){
    var searchValue = document.querySelector('#txtSearch');
    findRestaurants(searchValue.value);
});

function findRestaurants(searchValue){
    restaurants.innerHTML = '';
    let finalList = restaurantsData.filter(list => list.tags.filter( tag => tag.toLocaleLowerCase() == searchValue.toLocaleLowerCase()) != "");
    finalList.map(list => getCard(list));
}

function getRestaurants(restaurantsList){    
    let restaurantsLength = restaurantsList.length;
    // for(let start=0;start < restaurantsLength;start++){
    //     getCard(restaurantsList[start]);
    // }
    restaurantsList.map(list => getCard(list));   
}


function getCard(restaurantsList){
    let rootDiv = document.createElement('div');
    rootDiv.className="restaurants";
    let rootLink = document.createElement('a');
    rootLink.setAttribute('href','#');
    
    let imageDiv = document.createElement('div');
    imageDiv.className="restaurants-image-container";

    let imageTag = document.createElement('img');
    imageTag.className="restaurants-image";
    imageTag.setAttribute('src',restaurantsList.Image);
    imageTag.setAttribute('loading','lazy');
    imageDiv.appendChild(imageTag);

    let restaurantsDetailsDiv = document.createElement('div');
    let restaurantsNameDiv = document.createElement('div');
    restaurantsNameDiv.className="restaurants-name-container";
    //heading
    let heading = document.createElement('h1');
    let headingValue =document.createTextNode(restaurantsList.name);
    heading.append(headingValue);
    restaurantsNameDiv.appendChild(heading);
    //rating
    let ratingDiv = document.createElement('div');
    ratingDiv.className="restaurants-ratings";
    let ratingValue = document.createElement('div');
    ratingValue.append(restaurantsList.ratings);
    ratingDiv.appendChild(ratingValue);
    let staricon = document.createElement('i');
    ratingDiv.appendChild(staricon);
    restaurantsNameDiv.appendChild(ratingDiv);
    restaurantsDetailsDiv.appendChild(restaurantsNameDiv);

    //tags
    let specialItemDiv = document.createElement('div');
    specialItemDiv.className="restaurants-special-container";
    let specialItem = document.createElement('div');
    specialItem.className= "special_items";
    specialItem.append(restaurantsList.tags.reduce((prev,curr)=>{
        return prev + ', '+curr;
    }),"");
    specialItemDiv.appendChild(specialItem);
    restaurantsDetailsDiv.appendChild(specialItemDiv);

    //timings
    let timingsDiv = document.createElement('div');
    timingsDiv.className="restaurants-timing-container";
    let timing = document.createElement('div');
    timing.append('Opens at '+restaurantsList.openTime);
    timingsDiv.appendChild(timing);
    restaurantsDetailsDiv.appendChild(timingsDiv);

    rootLink.appendChild(imageDiv);
    rootLink.appendChild(restaurantsDetailsDiv);
    rootDiv.appendChild(rootLink);
    restaurants.appendChild(rootDiv);
}