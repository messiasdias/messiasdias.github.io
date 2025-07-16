<template>
  <header class="header">
    <RouterLink to="/" class="logo-content">
      <!-- <img src="#" class="logo" /> -->
      <!-- <font-awesome-icon class="logo" size="5px" icon="fa-solid fa-mouse" />-->
      <svg id="logo-svg" class="svg-inline--fa fa-computer-mouse fa-5px logo" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="computer-mouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path class="logo-svg-path" fill="currentColor" d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32z"></path>
        <path class="logo-svg-path" fill="currentColor" d="M384-32l0-32C384 180 400 10 240 0L208 0l0 192 170 0z"></path>
        <path class="logo-svg-path" fill="currentColor" d="M0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224z"></path>
      </svg>
    </RouterLink>

    <nav class="menu">
      <ul>
        <li>
          <RouterLink to="/">
            <font-awesome-icon icon="fa-solid fa-house-damage" /> <b>Início</b>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            <!-- contacts -->
            <font-awesome-icon icon="fa-solid fa-address-card" /> <b>Sobre mim</b>
          </RouterLink>
        </li>

        <li >
          <a 
            :class="showModalConfig ? 'active' : ''" 
            @click.prevent="toggleModalConfig" 
            href="#"
           >
            <font-awesome-icon icon="fas fa-cog" /> 
            <b>Configurações</b>
          </a>
        </li>

        <!-- 
         <li>
          <RouterLink to="/about">
            <font-awesome-icon icon="fa-solid fa-address-card" /> <b>Sobre</b>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">
            <font-awesome-icon icon="fa-solid fa-images" /> <b>Projetos</b>
          </RouterLink>
        </li> -->
      </ul>
    </nav>


    <div class="modal-config" v-if="showModalConfig" >
      <div class="item3">
        <font-awesome-icon @click.prevent="toggleModalConfig"  icon="fas fa-times" />
      </div>

      <div :class="input_by_location ?  'item-disabled' : 'item'" @click.prevent="!input_by_location ? updateIsday() : () => {}">
        <label for="is_day">Time of Day</label>
        <font-awesome-icon v-if="is_day" icon="fas fa-sun" />
        <font-awesome-icon v-else icon="fas fa-moon" />
      </div>

      <div :class="input_by_location ?  'item-disabled' : 'item'" @click.prevent="!input_by_location ? updateItIsRain() : () => {}" >
        <label for="it_is_rain">Climate</label>
        <font-awesome-icon v-if="it_is_rain" icon="fas fa-cloud-rain" />
        <font-awesome-icon v-else icon="fas fa-cloud" />
      </div>
      
      <div :class="input_by_location ?  'item-disabled' : 'item'">
        <label for="opacity">Opacity</label>
        <input class="input-range" @change.prevent="updateOpacity" v-model="range_opacity" :disabled="input_by_location" type="range" id="opacity" name="opacity" min="1" max="9">
      </div>

      <div :class="input_by_location ?  'item-disabled' : 'item'">
        <label for="wind_speed">Wind Speed</label>
        <input class="input-range" @change.prevent="updateWindSpeed" v-model="range_wind_speed" :disabled="input_by_location" type="range" id="wind_speed" name="wind_speed" min="30" max="300">
      </div>
      
      <div class="item2">
        <label for="by_location">By Location</label>
        <input v-model="input_by_location" @change="updateSetByLocation" name="by_location" id="by_location" class="" type="checkbox" />
      </div>
    </div>

    <a class="btn-destak btn-lg" href="/about#contacts">  <font-awesome-icon icon="fa-solid fa-address-card" /> Contato</a>
  </header>
</template>
<script>
export default {
  name: "header-comp",
  props: {
    is_day: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: Number,
      default: 1
    },
    it_is_rain: {
      type: Boolean,
      default: false
    },
    wind_speed: {
      type: Number,
      default: 30
    },
    by_location: {
      type: Boolean,
      default: true
    },
  },
  data(){
    return {
      range_opacity: 1,
      range_wind_speed: 30,
      showModalConfig: false,
      input_by_location: true,
    }
  },
  methods: {
    updateIsday(){
      this.$emit('setIsDay', !this.is_day)
    },
    updateOpacity(){
      this.$emit('setOpacity', this.range_opacity)
    },
    updateItIsRain(){
      this.$emit('setItIsRain', !this.it_is_rain)
    },
    updatesetWindSpeed(){
      this.$emit('setWindSpeed', this.range_wind_speed)
    },
    updateSetByLocation() {
      this.$emit('setByLocation', this.input_by_location)
    },
    toggleModalConfig(){
      this.showModalConfig = !this.showModalConfig
    }
  },
  beforeMount(){
    this.range_opacity = this.opacity
    this.range_wind_speed = this.wind_speed
    this.input_by_location = this.by_location
  },
}
</script>