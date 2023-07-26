<template>
    <div class="info_container">
        <div class="location_name">
            <div class="city">
                {{ this.UpdateWeatherData.city }}
            </div>
            <div class="country">
                {{this.UpdateWeatherData.country}}
            </div> 
        </div>
        

        <div class="weather_info">
            <div class="temperature_info">
                {{ this.UpdateWeatherData.temperature }}°
            </div>
            <i class="fa-solid fa-cloud-fog"></i>
            <div class="condition_info">
                
                <i class="condition_ico fa-solid" :class="weather_ico"></i>
                
                <div class="condition_text">
                    {{ this.UpdateWeatherData.weather }}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            weather_ico : {
                'fa-cloud' : true,
                'fa-sun' : false,
                'fa-cloud-rain' : false,
                'fa-smog': false

                }, 
                    
            }
            

    },
    
    methods: {
        chooseWeatherIco(weatherConditon){
            for (let prop in this.weather_ico){
                this.weather_ico[prop] = false
            }
            switch (weatherConditon){
                
                case 'Clouds':
                    this.weather_ico['fa-cloud'] = true
                    break
                case 'Smoke':
                    this.weather_ico['fa-smog'] = true
                    break
                case 'Mist':
                    this.weather_ico['fa-smog'] = true
                    break
                case 'Rain':
                    this.weather_ico['fa-cloud-rain'] = true
                    break
                case 'Clear':
                    this.weather_ico['fa-sun'] = true
                    break
                default:
                    this.weather_ico['fa-cloud'] = true
                    break
            }

        }
        
    },
    computed: {
        UpdateWeatherData(){
            let data = this.$store.getters.getTemperatureData()
            
            
            try{
                this.chooseWeatherIco(data.temperature.weatherData)
                return {
                city: data.location,
                country: data.country,
                weather: data.temperature.weatherData,
                temperature: Math.round(data.temperature.mainData.temp),
                }
            }
            catch{
                return {
                    city: "--",
                    country: '--',
                    weather: '--',
                    temperature: 0,
                }
            }
             
        },
       
    
    }
}
</script>
<style scoped>
    .city{
        font-size: 110px;
        max-height: 140px;
        line-height: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .country{
        font-size: 64px; 
        line-height: 55px;
        margin-top: 20px;
    }
    .info_container{
        text-align: center;
        font-family: 'Belanosima', sans-serif;
        color: #fff;
        width: 750px;
    }
    .temperature_info{
        font-size: 150px;
        line-height: 150px;
        margin-right: 10%;
        font-family: 'Oswald', sans-serif;

    }
    .condition_text{
        font-size: 48px;
        line-height: 48px;
    }
    .condition_ico{
        font-size: 100px;
    }
    .weather_info{
        display: flex;
        justify-content: center;
    }
    .condition_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    @media (max-width:1440px){
        .city{
        font-size: 90px;
        max-height: 120px;
        line-height: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .country{
        font-size: 50px; 
        line-height: 55px;
        margin-top: 20px;
    }
    .info_container{
        text-align: center;
        font-family: 'Belanosima', sans-serif;
        color: #fff;
        width: 750px;
    }
    .temperature_info{
        font-size: 120px;
        line-height: 120px;
        margin-right: 10%;
        font-family: 'Oswald', sans-serif;

    }
    .condition_text{
        font-size: 48px;
        line-height: 48px;
    }
    .condition_ico{
        font-size: 100px;
    }
    .weather_info{
        display: flex;
        justify-content: center;
    }
    .condition_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    }
</style>