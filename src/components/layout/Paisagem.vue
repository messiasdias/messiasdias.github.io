<template>
  <!-- viewBox="0 0 1366 1024" -->
  <svg class="bg-paisagem" :viewBox="`0 0 ${width} ${height}`">

    <!-- Sol/Lua -->
    <circle cx="140" cy="80" r="40" class="sun" fill="grey" />
    <circle cx="140" cy="80" :r="radius" class="sunshine" fill="grey" />

    <template v-if="!is_day">
      <circle
        class="moon-craters" 
        v-for="(r, i) in moon_points.radius" 
        :cx="moon_points.cxs[i]" 
        :cy="moon_points.cys[i]" 
        :r="r" 
        :key="i"
        fill="grey"
      />
    </template>

    <!-- Chão -->
    <!-- d="M0 529 L2000 729 L2000 1024 L-350 1024 Z"  -->
    <!-- M0 58 L200 69 L200 124 L-35 124 Z  -->
    <path
      class="floor"
      d="M0 729 L2000 629 L2000 1024 L-350 1024 Z"
      fill="grey"
    />

    <!-- Grama -->
    <g class="sand">
      <path stroke="grey" d="M29 805 q 75 -45 85 51, 29 -72 85 -6" />
      <path stroke="grey" d="M650 925 q 22 -5 26 20, 20 -20 35 1" />
      <path stroke="grey" d="M905 888 q 40 -32 54 -1, 23 -53 36 2" />
      <path stroke="grey" d="M1243 938 q 76 -32 83 33, 23 -25 40 -22" />
      <path stroke="grey" d="M1025 852 q 25 -26 43 -1" />
      <path stroke="grey" d="M295 888 q 18 -26 29 0" />
      <path stroke="grey" d="M73 976 q 14 -18 33 6" />
    </g>

    <!-- Nuvens -->
    <path
      class="cloud"
      id="cloud"
      d="
        M0 80 
        q 0 -20 30 -15
        15 -80 75 -32
        8 -40 37 -16
        60 -10 67 43
        40 -1 48 30
        0 0 -254 0
      "
      fill="grey"
      :style="`animation: cloud ease-in-out ${wind_speed * 6}s infinite;`"
    />

    <path
      class="cloud"
      id="cloud2"
      d="
              M995 200 
              q 0 -50 48 -46
              30 -120 118 -20
              q 50 -10 55 65 Z  
            "
      fill="grey"
      :style="`animation: cloud ease-in-out ${wind_speed * 5}s infinite;`"
    />

    <path
      class="cloud"
      id="cloud3"
      d="
              M550 209 
              q 0 -50 48 -46
              15 -60 59 -10
              q 25 -5 27.5 55 Z  
            "
      fill="grey"
      :style="`animation: cloud ease-in-out ${wind_speed * 4}s infinite;`"
    />

    <path
      class="cloud"
      id="cloud4"
      d="
              M650 79 
              q 0 -25 24 -23
              7.5 -20 23.5 -5
              q 12.5 -2.5 13.25 27.5 Z  
            "
      fill="grey"
      :style="`animation: cloud ease-in-out ${wind_speed * 3}s infinite;`"
    />

    <path
      class="cloud"
      id="cloud5"
      d="
              M650 132 
              q 0 -25 24 -23
              7.5 -20 23.5 -5
              q 12.5 -2.5 13.25 27.5 Z  
            "
      fill="grey"
      :style="`animation: cloud ease-in-out ${wind_speed * 2}s infinite;`"
    />

    <path
      class="rock"
      d="
              M0 971 L0 729 L117 729
              q -10 -60 -82 -37
              5 -65 -36 -107 
              Z
            "
      fill="grey"
    />

    <path
      class="rock"
      d="
              M1366 591 L1366 729 L980 734 
              q 110 -93 163 -42 
              62 -118 223 -166
              Z
            "
      fill="grey"
    />

    <!-- <g class="bike" >
              <circle stroke-width="25" stroke="re" id="front_tire" cx="974" cy="785" r="138" />
              <circle stroke-width="25" stroke="re" id="rear_tire" cx="490" cy="785" r="138" />
              
              <g>
                <line class="bike-body" x1="845" y1="532" x2="916" y2="498" stroke-width="12" />
                <line class="bike-body" x1="882" y1="522" x2="982" y2="790" stroke-width="12" />
                <line class="bike-body" x1="580" y1="552" x2="895" y2="554" stroke-width="12" />
                <line class="bike-body" x1="480" y1="805" x2="594" y2="530" stroke-width="12" />
                <line class="bike-body" x1="553" y1="530" x2="625" y2="525" stroke-width="12" />
                <line class="bike-body" x1="492" y1="762" x2="680" y2="805" stroke-width="12" />
                <line class="bike-body" x1="675" y1="807" x2="917" y2="603" stroke-width="12" />
                 <circle id="cog" class="bike-body" cx="680" cy="800" r="25" fill="none" stroke-width="5" stroke="grey" />
                <line id="cog-pedal" class="bike-body" x1="670" y1="860" x2="698" y2="750" stroke-width="12" />
                <line class="bike-body" x1="675" y1="756" x2="718" y2="743" stroke-width="12" />
                <line class="bike-body" x1="650" y1="860" x2="695" y2="860" stroke-width="12" />
    
              </g>
            </g>  -->
  </svg>
</template>
<script>
export default {
  name: "BgPaisagem",
  props: {
    wind_speed: {
      type: Number,
      default: 10,
    },
    is_day: {
      type: Boolean,
      default: true,
    },
    opacity: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      width: 0,
      height: 0,
      radius: 65,
      itens: [...Array(50).keys()],
      moon_points: {
        radius: [],
        cxs: [], 
        cys: [], 
      }
    };
  },
  methods: {
    setDimensions() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.setMoonPoints(140, 80, 40)
    },
    randRadius(radius = 0) {
      if(radius == 0) {return this.radius = radius}
      this.radius = Math.floor(Math.random() * 15) + 45
    },
    setMoonPoints(cx, cy, ra) {
      const randPoints = [...Array(ra-1).keys()]
      const pontosX = [], pontosY = [], radius = [];

      const r = 2
      randPoints.forEach(() => {
        pontosX.push(Math.floor(Math.random() * ra-20) + cx)
        pontosY.push(Math.floor(Math.random() * ra-20) + cy)
        radius.push(Math.floor(Math.random() * r)+r)
      })
      this.moon_points = {
        radius: radius.filter(v=>v),
        cxs: pontosX.filter(v=>v), 
        cys: pontosY.filter(v=>v), 
      }
      console.log("Pontos dentro de this.moon_points: ",  this.moon_points)
    },
  },
  mounted() {
    this.setDimensions();
    if(this.is_day) {setInterval(() => this.randRadius(), 1000)}
    else{this.randRadius(0)}

    document.addEventListener("resize", () => {
      if(this.is_day) {this.randRadius()}
      else{this.randRadius(0)}
      this.setDimensions();
    });
  },
};
</script>
    