<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top navigation">
    <div class="container">
      <li class="nav-item removeDot">
        <router-link to="/">
          <img src="/images/Logo_EHB_Filmworks_SW.png" width="150px" class="mt-5 me-5 mb-5">
        </router-link>
      </li>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Toggler"
              aria-controls="Toggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="w-75">
      <div class="collapse navbar-collapse justify-content-start borderXwidth " id="Toggler">

        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link class="nav-link" to="/offer">Angebot</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projekte</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/info">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Kontakt</router-link>
          </li>
        </ul>

      </div>
      </div>
    </div>
  </nav>
</template>
