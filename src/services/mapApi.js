//init dom
import {getWeatherInLocation} from './WeatherApi'
//create markers and map instance

const apiKey = 'AIzaSyBidX8ff4mp8yi_iByFQ8njsXJnB46TEVE'
let map;
let markers = [];
let geocoder 

//init map function
export async function initMap(store, location) {
    //change to current user location
    let userLocation = await geocodingOfLocation(location)
   

    //initializing of map on page
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: userLocation,
        mapTypeId: "terrain",
    });
    geocoder = new google.maps.Geocoder();
    // Add marker of user current location
    addMarker(userLocation);


    // add event listener to map. When clicked new marker apear, all previous deleting
    map.addListener("click", async (event) => {
        //add marker
        addMarker(event.latLng);
        //location of marker. todo: Reverse geocoding to get city name
        let loc = JSON.stringify(event.latLng.toJSON(), null, 2)
        
        let city_name = await reverseGeocodingOfLocation(loc)
        
        let weather_data = await getWeatherInLocation(city_name)
        if (weather_data == 404){
            //add text in google map "cant find weather in this location" 
        }
        else{
            store.dispatch('setWeatherData', weather_data)
        }
        
        
        // reverseGeocodingOfLocation()
    });

    
}

// Adds a marker to the map and delete previous marker
function addMarker(position) {
    deleteMarkers()
    const marker = new google.maps.Marker({
        position,
        map,
    });

    markers.push(marker);
}

// Deleting markers
function deleteMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}



async function geocodingOfLocation(location){ 
    let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`)
    response = await response.json()
    if(response.status === "OK"){
        return response.results[0].geometry.location
    }
    else{
        console.log('not found')
        return 'not found'
    }
}


async function reverseGeocodingOfLocation(latlng){
    let location = JSON.parse(latlng)
    let city = 'Not found'
    await geocoder.geocode({ location: location }, (results, status) =>{
        if (status === 'OK'){
            if(results && results.length){
                

                let filtered_array = results.filter(result => result.types.includes("locality")); 
                
                let addressResult = filtered_array.length ? filtered_array[0]: results[0];
                
                if(addressResult.address_components) {
                    addressResult.address_components.forEach((component) => {
                        if(component.types.includes('locality')) {
                            city = component.long_name
                        }

                    });
                }
            }
        }
    })
    
    return city
}

