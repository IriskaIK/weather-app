<template >
    <div class="maxmin_container">
        Day: {{Math.round(maxmin_info.max)}}°
        Night: {{Math.round(maxmin_info.min)}}°
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    computed:{
        maxmin_info(){
            return this.$store.getters.getMaxMinData()
        }
    }
}
</script>
<style>
.maxmin_container{
    position: absolute;
    right: 40px;
    font-size: 20px;
    color: #fff;
}
@media (max-width:1440px){
        
    }
</style>