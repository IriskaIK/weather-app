<template>
  <desktop-container-component v-if="isDesktop"></desktop-container-component>
  <laptop-container-component v-if="isLaptop"></laptop-container-component>
</template>

<script>
import DesktopContainerComponent from './components/DesktopContainerComponent.vue';
import LaptopContainerComponent from './components/LaptopContainerComponent.vue';


export default {
  name: 'App',
  components: {
    DesktopContainerComponent,
    LaptopContainerComponent
  },
  computed:{
    isLaptop(){
      if (screen.width<=1440){
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
      
    }
  }
}
</script>

<style>

</style>
