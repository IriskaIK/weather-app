<template>
  <desktop-container-component v-if="isDesktop"></desktop-container-component>
  <laptop-container-component v-if="isLaptop"></laptop-container-component>
  <mobile-container-component v-if="isMobile"></mobile-container-component>

</template>

<script>
import DesktopContainerComponent from './components/DesktopContainerComponent.vue';
import LaptopContainerComponent from './components/LaptopContainerComponent.vue';
import MobileContainerComponent from './components/MobileContainerComponent.vue';



export default {
  name: 'App',
  components: {
    DesktopContainerComponent,
    LaptopContainerComponent,
    MobileContainerComponent
  },
  computed:{
    isLaptop(){
      if (screen.width<=1440 & screen.width>1150){
        return true
      }
      else{
        return false
      }
    },
    isDesktop(){
      if (screen.width>1440){
        return true
      }
      else{
        return false
      }
    },
    isMobile(){
      if (screen.width <= 1150){
        return true
      }
      return false
      
    }
  }
}
</script>

<style>

</style>
