<template>
<article class="body home">
    <div class="left">
        <p>
            Olá!<br>
            <b class="destak2">Me chamo</b> <br>
            <!-- <b class="destak">Messias Dias</b><br> -->
            <b id="typed" class="destak" >Messias Dias</b><br>
            <b class="destak2">sou Programador Web</b>
        </p>
        <HomeImg/>
        <a class="btn-primary" href="#about">Ver Curriculum</a>
        <a class="btn-secondary" href="#feedback">Deixe seu Feedback</a>
    </div>
    <div class="right">
        <HomeImg/>
    </div>
</article>
</template>
<script>
import HomeImg from './HomeImg'
import Typed from 'typed.js'
export default {
    name: 'Body',
    components: {HomeImg},
    data(){
        return {
        }
    },
    mounted(){
        new Typed('#typed', {
            strings: 'Messias Dias',
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
            showCursor: true    ,
            contentType: 'html'
        })
    }
}
</script>