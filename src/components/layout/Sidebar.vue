<template>
<aside class="sidebar">
    <div class="icons">
        <font-awesome-icon class="icon-scroll" icon="icon-scroll fa-solid fa-arrow-up" @click.prevent="scrollTop" />
        <font-awesome-icon class="icon-scroll" icon="icon-scroll fa-solid fa-arrow-down" @click.prevent="scrollBotton" />
    </div>
</aside>
</template>
<script>
export default {
  name: "sidebar-comp",
  methods: {
    scrollTop() {

      document.querySelector('.app').scrollTo({top:0,behavior:'smooth'})
    },
    scrollBotton() {
      document.querySelector('.app').scrollTo({top:document.body.scrollHeight+1000,behavior:'smooth'})
    }
  }
}
</script>