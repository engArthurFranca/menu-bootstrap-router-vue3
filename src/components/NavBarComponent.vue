<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand">
            <img class="logo" src="../assets/logo.png">
            Logo
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-4" v-for="route in routes" :key="route.path">
                <router-link class="nav-link" :to="route.path">{{ capitalizeFirstLetter(route.name) }}</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            routes: this.$router.getRoutes()
        }
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }
}
</script>
<style scoped>
    .logo{
        height: 50px;
        width: auto;
    }
</style>