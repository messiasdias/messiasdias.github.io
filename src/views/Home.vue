<template>
<article class="page">
    <div class="left">
        <p class="slogan">Olá! <!--<b>👋🏿</b>--><br>
            <b class="destak2">Me chamo</b> <br>
            <b id="typed" class="destak" >Messias Dias</b><br>
            <b class="destak2">sou Programador Web</b>
        </p>
        <HomeImg/>

        <div class="buttons">
            <RouterLink class="btn-primary btn-lg" to="/about">Quero saber mais!</RouterLink> 
            <RouterLink to="/curriculum" class="btn-secondary btn-lg" >Ver Curriculum</RouterLink>
            <!-- <RouterLink class="btn-light" to="/feedback">Deixe seu Feedback</RouterLink> -->
        </div>
    </div>
    <div class="right">
        <HomeImg/>
    </div>
</article>
</template>
<script>
import HomeImg from '../components/HomeImg.vue'
// import Typed from 'typed.js'

export default {
    name: 'home-comp',
    components: {HomeImg},
    data(){
        return {
        }
    },
    mounted(){
        // new Typed('#typed', {
        //     strings: 'Messias Dias',
        //     typeSpeed: 80,
        //     backSpeed: 40,
        //     loop: true,
        //     showCursor: true    ,
        //     contentType: 'html'
        // })
    }
}
</script>