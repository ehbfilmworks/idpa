<template>
  <div class="container" style="margin-top: 10%">
    <h1>Projekte</h1>
    <h3>Vergangene Projekte:</h3>
    <div style="margin-top: 100px">
      <div class="blog-container">
        <div class="blog-card" @click="redirect('/meggen')">
          <div class="meta">
            <div><img class="photo" src="/images/golfplatzmeggen.jpg" alt="sample3"></div>
          </div>
          <div class="description">
            <h1>Golfplatz Meggen</h1>
            <h2>vom 1.11.2024</h2>
            <p>Es gibt sehr viele gute Gründe, Golf zu spielen. Golfen ist für jedes Alter geeignet, hält fit und
              bereitet...</p>
          </div>
        </div>

        <div class="blog-card alt" @click="redirect('/palace')">
          <div class="meta">
            <div class="photo">
              <img class="photo" src="/images/HotelPalace.jpg" alt="sample3">
            </div>
          </div>
          <div class="description">
            <h1>Hotel Palace Gstaad</h1>
            <h2>15.12.24</h2>
            <p>Das Gstaad Palace verzaubert seit über einem Jahrhundert Gäste aus nah und fern ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

function redirect(url){
  location.href = url
}
</script>