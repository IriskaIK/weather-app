<template>
    <div class="date_container">
        <div class="datetime_info">
            {{current_time}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            monthNames : ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            current_time : 0
        }
    },
    created(){
        if(this.current_time == 0){
            this.get_current_time()
        }
        setInterval(() => {
            this.get_current_time();
        }, 1000)
    },
    methods:{
        get_current_time(){
            let time = new Date()
            let formated_time = this.monthNames[(time.getMonth()+1)] + ' ' 
            + time.getDate() + ',   ' 
            + time.getHours() + ':' 
            + ('0'+time.getMinutes()).slice(-2)
            this.current_time = formated_time
        }
        
    }
}
</script>
<style scoped>
    .datetime_info{
        color: #FFF;
        font-size: 54px;
        font-family: Belanosima;
        width: 350px;
    }
    .date_container{
        display: flex;
        margin-top: 50px;

    }
</style>