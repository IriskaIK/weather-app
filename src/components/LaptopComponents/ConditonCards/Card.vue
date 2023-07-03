<template >
    <div class="condition_card_container">
        
        <div class="condition_name">
            {{ condition_object.name }}
        </div>

        <div class="condition_info">
            <div class="condition_info_ico">
                <i class="fa-solid" :class="condition_object.ico"></i>
            </div>
            <div class="contidion_info_text">
                {{ condition_object.content }}
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props:{
        condition_object : Object
    }
    
}
</script>
<style scoped>

.condition_card_container{
    width: 400px;
    height: 150px;
    border-radius: 25px;

    padding: 10px;
    background: rgba(255, 255, 255, 0.37);
    transition: box-shadow .2s ease-in, transform .2s ease-in;
}
.condition_card_container:hover{
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.096);
}
.condition_name{
   text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
}
.condition_info{
    display: flex;
    align-items: center;
    
    justify-content: center;
}
.condition_info_ico{
    font-size: 70px;
}
.contidion_info_text{
    font-size: 20px;
    margin-left: 20px;
    font-size: 24px;
}
    
</style>