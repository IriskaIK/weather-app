<template>
  <desktop-container-component v-if="isDesktop"></desktop-container-component>
  <mobile-container-component v-if="isMobile"></mobile-container-component>

</template>

<script>
import DesktopContainerComponent from './components/DesktopContainerComponent.vue';
import MobileContainerComponent from './components/MobileContainerComponent.vue';



export default {
  name: 'App',
  components: {
    DesktopContainerComponent,
    MobileContainerComponent
  },
  computed:{
    
    isDesktop(){
      if (screen.width>1200){
        return true
      }
      else{
        return false
      }
    },
    isMobile(){
      if (screen.width <= 1200){
        return true
      }
      return false
      
    }
  }
}
</script>

<style>

</style>
