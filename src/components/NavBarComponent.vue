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
            <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/app">App</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/docs">Docs</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<style scoped>
    .logo{
        height: 50px;
        width: auto;
    }
</style>