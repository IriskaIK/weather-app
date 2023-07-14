<template>
    <div class="bg_container">
        
        <div class="weather_info">
            <SearchBarComponent></SearchBarComponent>
            
            
            
            <WeatherInfoComponent></WeatherInfoComponent>
            <div class="search_save_container">
                <SavedLocationsComponent></SavedLocationsComponent>
            </div>

            <div class="weather_conditions">
                <ConditionCardsComponent></ConditionCardsComponent>
            </div>

            <div class="date_map_container">
                <DateComponent></DateComponent>
                <MapButtonContainer></MapButtonContainer>
            </div>
            
        </div>
        
        <!-- <div class="max_min_temp">
            <MaxMinTemperatureComponent></MaxMinTemperatureComponent>
        </div> -->
    </div>
</template>
<script>

import ConditionCardsComponent from './MobileComponents/ConditionCardsComponent.vue';
import DateComponent from './MobileComponents/DateComponent.vue';
import MapButtonContainer from './MobileComponents/MapButtonContainer.vue';
import SavedLocationsComponent from './MobileComponents/SavedLocationsComponent.vue';
import SearchBarComponent from './MobileComponents/SearchBarComponent.vue';
import WeatherInfoComponent from './MobileComponents/WeatherInfoComponent.vue';
import MaxMinTemperatureComponent from './MobileComponents/MaxMinTemperatureComponent.vue';




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
        width: 100%;
        
        /* overflow: hidden; */
        background-image: url('@/assets/bg_warm_2.png');
    }
    .weather_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 5%;

    }
    .weather_conditions{

        display: flex;
        justify-content: center;
    }

</style>