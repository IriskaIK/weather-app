const apiKey = 'ceecda99ab59c14e00b003a6b3150074'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`


export async function getWeatherInLocation(location_name){
    try {
        const response = await fetch(apiUrl + '&q=' + location_name)
        
        if(response.status == 404){
            return response.status
        }

        const data = await response.json()
        
        return data
    } catch (e) {
        console.log(e)
    }
}

