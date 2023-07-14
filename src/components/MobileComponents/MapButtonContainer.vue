<template >
    <div id="map">
        <svg v-if="!map_is_open" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="1s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
            </path>
        </svg>
        <!-- add loader -->
    </div>
</template>
<script>
import {initMap} from '@/services/mapApi.js'



export default {
    data() {
        map_is_open : false

    },
    mounted(){
        setTimeout(()=>{
            initMap(this.$store, this.$store.getters.getCurrentLocation())
            this.map_is_open = true
        }, 5000)
        
        
    }

    
}
</script>
<style scoped>

    #map{
        width: 290px;
        height: 250px;
        border-radius: 40px;
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.096);
        margin-top: 20px;
        
        transition: opacity .2s ease-in;

        margin: auto;
        margin-top: 10px;
    }

    


    .map_btn_container{
        margin-top: 50px;
        border-radius: 41px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.37);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-size: 36px;
        font-family: Belanosima;
        transition: box-shadow .2s ease-in, transform .2s ease-in;
        
    }
    .map_btn_container:hover{
        cursor: pointer;
        transform: translate(-1px, -1px);
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.096);
    }
    .map_ico{
        font-size: 70px;
        margin-bottom: 20px;
    }
    
</style>