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
        <li class="active">
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

    <a class="btn-secondary btn-lg" href="/about#contacts">  <font-awesome-icon icon="fa-solid fa-address-card" /> Contato</a>
  </header>
</template>
<script>
export default {
  name: "header-comp"
}
</script>