<template>
    <div class="bg_container">
        <div class="weather_info">
            <div class="date_map_container">
                <DateComponent></DateComponent>
                <MapButtonContainer></MapButtonContainer>
            </div>
            
            <WeatherInfoComponent></WeatherInfoComponent>
            <div class="search_save_container">
                <SearchBarComponent></SearchBarComponent>
                <SavedLocationsComponent></SavedLocationsComponent>
            </div>
            
        </div>
        <div class="weather_conditions">
            <ConditionCardsComponent></ConditionCardsComponent>
        </div>
        <div class="max_min_temp">
            <MaxMinTemperatureComponent></MaxMinTemperatureComponent>
        </div>
    </div>
</template>
<script>

import ConditionCardsComponent from './LaptopComponents/ConditionCardsComponent.vue';
import DateComponent from './LaptopComponents/DateComponent.vue';
import MapButtonContainer from './LaptopComponents/MapButtonContainer.vue';
import SavedLocationsComponent from './LaptopComponents/SavedLocationsComponent.vue';
import SearchBarComponent from './LaptopComponents/SearchBarComponent.vue';
import WeatherInfoComponent from './LaptopComponents/WeatherInfoComponent.vue';
import MaxMinTemperatureComponent from './LaptopComponents/MaxMinTemperatureComponent.vue';




import { UserLocation } from "@/services/getUserLocation.js";
import { getWeatherInLocation } from "@/services/WeatherApi.js";
export default {
    
    components: {
        ConditionCardsComponent,
        DateComponent,
        MapButtonContainer,
        SavedLocationsComponent,
        SearchBarComponent,
        WeatherInfoComponent,
        MaxMinTemperatureComponent
    },
    async mounted(){
        let location = await UserLocation()
        let data = await getWeatherInLocation(location)
        this.$store.dispatch('setWeatherData', data)


        let Savedlocations = localStorage.getItem("locations")
        if(Savedlocations){
            let locationList = Savedlocations.split(',') 
            this.$store.dispatch('setLocationsData', locationList)
        }
        
    }
}
</script>
<style scoped>
    .bg_container{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-image: url('@/assets/bg_warm.png');
    }
    .weather_info{
        display: flex;
        justify-content: space-between;
        margin: 0 5%;

    }
    .weather_conditions{

        display: flex;
        justify-content: center;
    }

</style>