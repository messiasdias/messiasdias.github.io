<template>
<header class="header">
   <div class="logo-content">
        <!-- <img src="#" class="logo" /> -->
        <font-awesome-icon class="logo" icon="fa-solid fa-computer-mouse" />
   </div>

    <nav class="menu">
        <ul>
            <li class="active">
                <router-link to="/">
                    <font-awesome-icon icon="fa-solid fa-house-chimney" /> <b>Home</b>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <font-awesome-icon icon="fa-solid fa-address-card" /> <b>Sobre</b>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <font-awesome-icon icon="fa-solid fa-images" /> <b>Projetos</b>
                </router-link>
            </li>
        </ul>
    </nav>

    <router-link class="btn-primary" to="/contact">Contato</router-link>
</header>
</template>
<script>
export default {
    name: 'Header',
}
</script>