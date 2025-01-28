<template>
  <div class="container align-content-center" style="margin-top:10%;">
    <h1>Angebot</h1>
    <p>
      Wir sind Ihre Full-Service-Videoagentur und unterstützen Sie dabei,
      Ihre Marke, Ihr Event oder Ihre Vision in die richtige Perspektive
      zu rücken. Unser Portfolio bietet eine breite Palette an Leistungen,
      die individuell auf Ihre Bedürfnisse abgestimmt sind:
    </p>

    <div style="margin-top: 100px">
      <section class="hero-section mt-4">
        <div class="card-grid">
          <div class="card-plus-text"
               @mouseover="data.showReelText = true"
               @mouseleave="data.showReelText = false">

            <a class="card">
              <div class="card__background">
                <img src="/images/reel.jpg" alt="efficiency">
              </div>
              <div class="card__content">
                <p class="card__category">EHB-Filmworks</p>
                <h3 class="card__heading">Insta Reels</h3>
              </div>
            </a>


            <transition name="slide-up">
              <div v-if="data.showReelText" class="info-text">
                <h2>🎥 Instagram Reels: Kurz und kraftvoll</h2>
                <p>
                  Marketing spielt in der heutigen Zeit eine sehr grosse Rolle, deshalb bieten wir Videos im Hochformat
                  für Instagram-Reels oder TikToks an. Der Inhalt des Videos wird, falls vorhanden, vom Marketing-Team
                  vorgelegt. Die Ideen können jedoch auch uns überlassen werden.
                </p>
              </div>
            </transition>
          </div>

          <div class="card-plus-text"
               @mouseover="data.showCinematicText = true"
               @mouseleave="data.showCinematicText = false">

            <a class="card">
              <div class="card__background">
                <img src="/images/cinematic.jpg" alt="uptoDateS">
              </div>
              <div class="card__content">
                <p class="card__category">EHB-Filmworks</p>
                <h3 class="card__heading">Cinematic</h3>
              </div>
            </a>

            <transition name="slide-up">
              <div v-if="data.showCinematicText" class="info-text">
                <h2>🎬 Cinematic Videos: Geschichten, die bewegen</h2>
                <p>
                  Das Image-Video ist ein 1-3 Minuten langes Video. Die Dauer des Videos kann vom Kunden festgelegt oder
                  uns überlassen werden. Gefilmt wird mit Drohne und Kamera für Detailaufnahmen.
                </p>
              </div>
            </transition>
          </div>


          <div class="card-plus-text"
               @mouseover="data.showDroneText = true"
               @mouseleave="data.showDroneText = false">

            <a class="card">
              <div class="card__background">
                <img src="/images/droneshots.jpg" alt="personal">
              </div>
              <div class="card__content">
                <p class="card__category">EHB-Filmworks</p>
                <h3 class="card__heading">Drohnen-Shots</h3>
              </div>
            </a>


            <transition name="slide-up">
              <div v-if="data.showDroneText" class="info-text">
                <h2>🚁 Drohnenaufnahmen: Perspektiven, die begeistern</h2>
                <p>
                  Durch die Drohnenperspektive können neue Winkel entdeckt werden. Aus diesem Grund bieten wir auch
                  Drohnen-Bilder an. Diese Bilder sind sehr gut geeignet für die sozialen Medien. In diesem Produkt ist
                  auch das Bearbeiten des Bildes inklusive.
                </p>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <p style="margin-top: 2rem;">
        Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
        und erfahren Sie, wie wir Ihre Ideen in beeindruckende Videos
        verwandeln können! ✨
      </p>
    </div>
  </div>
</template>
<style scoped>

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.card-plus-text {
  position: relative;
  margin-bottom: 2rem;
}


.info-text {
  margin-top: 1rem;
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 6px;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

</style>
<script setup>
import {reactive} from 'vue'

const data = reactive({
  showReelText: false,
  showCinematicText: false,
  showDroneText: false
})
</script>
