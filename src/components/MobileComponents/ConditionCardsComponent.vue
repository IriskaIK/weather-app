<template>
    <div class="condtioin_card_conteiner">
    
    <ConditionCard v-for="item in UpdateConditionData"  :condition_object='item' ></ConditionCard>
    
    
    </div>
</template>
<script>
import ConditionCard from './ConditonCards/Card.vue';
import moment from 'moment'

export default {
    components : {
        ConditionCard
    },
    data() {
        return {
            conditions_content : {
                wind : {name: '', content:''},
                humidity : {name: '', content:''},
                sunset: {name: '', content:''},
                pressure : {name: '', content : ''}
            }
        }
    },
    computed:{
        UpdateConditionData(){
            let data = this.$store.getters.getConditionData()
            let sunset_time = moment.utc(data.sunset,'X').add(data.timezone,'seconds').format('HH:mm a');
            
            
            try{
                
                return {
                wind: {name: 'Wind speed', content : data.wind.speed + 'm/s', ico:'fa-wind'},
                pressure: {name: 'Pressure', content : data.pressure + 'Bar', ico:'fa-temperature-arrow-down'},
                humidity: {name: 'Humidity', content : data.humidity + '%', ico:'fa-water'},
                sunset: {name: 'Sunset', content : sunset_time, ico:'fa-sun'}
                }
            }
            catch{
                return {
                    wind: {name: '---', content : '--', ico:'fa-wind'},
                    pressure: {name: '---', content : '--', ico:'fa-temperature-arrow-down'},
                    wind: {name: '---', content : '--', ico:'fa-water'},
                    wind: {name: '---', content : '--', ico:'fa-sunset'}
                }
            }
             
        },
    }
    
}
</script>
<style scoped>
.condtioin_card_conteiner{
    margin-top: 30px;
    display: grid;
    grid-template-columns: 181px 155px;
    grid-column-gap: 3px;
    grid-row-gap: 24px;
}
    
</style>