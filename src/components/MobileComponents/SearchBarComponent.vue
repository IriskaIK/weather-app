<template >
    <div class="search_container">
        <input type="text" class="city_input" :placeholder="placeholder" v-model="inputValue">
       
            <i class="search_icon fa-solid fa-magnifying-glass" @click="searchLocationWeather"></i>   
    </div>
</template>
<script>

import {getWeatherInLocation} from '@/services/WeatherApi.js'
export default {
    data() {
        return {
            inputValue : '',
            placeholder : 'Enter City'
        }
    },
    methods: {
        async searchLocationWeather(){
            if(this.inputValue == ''){
                return
            }
            let location_data = await getWeatherInLocation(this.inputValue)
            if (location_data == 404){
                this.placeholder = 'Not found'
                this.inputValue = ''
                return
            }
            this.inputValue = ''
            this.placeholder = 'Enter City'
            this.$store.dispatch('setWeatherData', location_data)

        }
    },
}
</script>


<style scoped>
    .search_container{
        margin: auto;
        display: flex;
        align-items: center;
        margin-top: 30px;
    }
    .city_input{
        all: unset;
        box-sizing: border-box;
        padding: 12px 20px;
        height: 46px;
        width: 300px;
        border-radius: 23px;
        background: rgba(217, 217, 217, 0.56);
        transition: box-shadow .2s ease-in, transform .2s ease-in;
    }
    .city_input:hover{
        transform: translate(-1px, -1px);
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.096);
    }

    .search_icon{
        color: rgba(217, 217, 217, 0.56);
        margin-left: 2%;
        font-size: 40px;
        cursor: pointer;  
        transition: color .2s ease-in;   
    }
    .search_icon:hover{
        color: rgb(217, 217, 217);
    }
</style>