import { createStore } from 'vuex'

export default createStore({
  state: {
    currentLocation: '--',
    currentCountry : '--',
    currentDateTime: '--',
    currentTemperatureData:{},
    currentConditionData:{},
    savedLocations:[],
    maxminTemperature : {}
    
  },
  getters: {
    getTemperatureData:(state)=>()=>{
      return {temperature : state.currentTemperatureData, location : state.currentLocation, country : state.currentCountry}
    },
    getWeatherStatus:(state)=>()=>{
      return state.currentTemperatureData.weatherData
    },
    getConditionData:(state)=>()=>{
      return state.currentConditionData
    },
    getMaxMinData:(state)=>()=>{
      return state.maxminTemperature
    },

    getSavedLocations:(state)=>()=>{
        return state.savedLocations
    },
    getCurrentLocation:(state)=>()=>{
      return state.currentLocation
    }
  },
  mutations: {
    updateWeatherInfo(state, payload){
      state.currentLocation =  payload.name

      state.currentCountry = payload.sys.country

      state.currentTemperatureData = {
        mainData: payload.main, 
        weatherData: payload.weather[0].main
      }

      state.currentConditionData = {
        wind : payload.wind, 
        pressure : payload.main.pressure, 
        humidity : payload.main.humidity,
        sunset : payload.sys.sunset,
        timezone: payload.timezone
      },
      state.maxminTemperature = {
        max: payload.main.temp_max,
        min: payload.main.temp_min
      }
    },
    updateSavedLocations(state){
      if(!state.savedLocations.includes(state.currentLocation)){
        state.savedLocations.push(state.currentLocation)
      }
      localStorage.setItem('locations', state.savedLocations.toString())
      return
      
    },
    setSavedLocation(state, payload){
      state.savedLocations = payload
    }
    

  },
  actions: {
    setWeatherData({ commit}, data){
      commit('updateWeatherInfo', data)
    },
    addNewLocation({ commit}){
      commit('updateSavedLocations')
    },
    setLocationsData({ commit}, data){
      commit('setSavedLocation', data)
    }
  },
  modules: {
  }
})
