<template>
    
    <div class="saved_container">
        <div class="saved_list" 
        :class="{ 'opened_list' : IsOpen}"
        >
            <div class="saved_list_title">
                <i class="pin fa-solid fa-map-pin"></i>
                <div class="div">Saved locations</div>
            </div>


            <div class="some_list" ref="element">
                <transition-group name="list">
                        <div class="saved_list_item" v-if="IsOpen" v-for="item in locationItems" :id="item"
                            @click="setLocationFromList(item)">
                            {{ item }}
                        </div>
                </transition-group>
            </div>
            
           
            

            <div class="see_more_btn" @mouseover="isMoreHover = true" @mouseleave="isMoreHover = false" @click="ListPressed">
                <i class="fa-solid fa-chevron-down" :class="{ 'fa-flip' : isMoreHover, 'fa-rotate-180' : IsOpen }"></i>
            </div>
        </div>
        <div class="save_btn" @mouseover="isSaveHover = true" @mouseleave="isSaveHover = false" @click="saveLocation">
            <i class="save_btn fa-solid fa-floppy-disk" :class="{ 'fa-bounce' : isSaveHover}"></i>
        </div>
    </div>

</template>
<script>
import {getWeatherInLocation} from '@/services/WeatherApi.js'
import { gsap } from 'gsap';
export default {
    data() {
        return {
        isMoreHover: false,
        isSaveHover: false,
        IsOpen: false,
        heightValue : '220px'
        
        
        };
    },
    methods: {
        ListPressed(){
            if (this.locationItems.length == 0){
                return
            }
            else if(this.locationItems.length  < 3){
                this.heightValue = '110px'
            }
            else{
                this.heightValue = '220px'
            }
            this.open_close_list.reversed() ? this.open_close_list.play() : this.open_close_list.reverse();

            this.IsOpen = !this.IsOpen
            /* todo: smoth saved_list animation  */

            
        },
        saveLocation(){
            this.$store.dispatch('addNewLocation')
            

        },
        async setLocationFromList(city){
            let location_data = await getWeatherInLocation(city)
            
            if (location_data == 404){
                return
            }
            this.$store.dispatch('setWeatherData', location_data)

        }
    },
    computed:{
        locationItems(){
            return this.$store.getters.getSavedLocations()
        },
        open_close_list() {
            console.log(this.$refs.element)
            return gsap.fromTo(
                this.$refs.element,
                {
                    opacity: 0,
                    height: 0,
                },
                {
                    opacity: 1,
                    height: this.heightValue,
                    duration: 0.5,
                    paused: true,
                    reversed: true,
                }
            )
        }
    }


}
</script>
<style scoped>

    .some_list{
        overflow: overlay;
        width: 100%;
    }

    .saved_container{
        display: flex;
        color: #fff;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
    }
    .saved_list{
        position: relative;
        max-height: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4px;
        width: 60%;
        max-width: 300px;
        border-radius: 36px;
        margin-right: 10px;
        border: 7px solid rgba(255, 255, 255, 0.50);

        /* transition: max-height .5s ease-out; */
    }
    .opened_list{
        max-height: 220px;
        /* transition: max-height .5s ease-out; */
    }
    .closed_list{
        max-height: 120px;
    }

    .saved_list_title{
        display: flex;
        align-items: center;
        font-size: 30px;
    }
    .saved_list_item{
        text-align: center;
        box-sizing: border-box;
        font-size: 26px;
        width: 90%;
        height: 55px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        width: max-content;
        position: relative;
        margin: auto;
    }
    ::-webkit-scrollbar {
    width: 10px;
    
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f110;
    border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.37);
    
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.50);
    }
    .saved_list_item::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.50);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }
    .saved_list_item:hover::before {
    transform-origin: left;
    transform: scaleX(1);
    }
        

    .pin{
        margin-right: 10px;
    }
    .see_more_btn{
        font-size: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        --fa-animation-iteration-count:1;
        position: absolute;
        bottom: -40px;
    }
    .save_btn{
        font-size: 30px;
        cursor: pointer;
        --fa-animation-iteration-count:1;

    }

    .list-leave-active {
    transition: all 1s ease;
    }
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
    .list-leave-from{
        opacity: 1;
        transform: translateX(0);
    }
    
</style>