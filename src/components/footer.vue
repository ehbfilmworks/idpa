<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template class="footer-section">
  <div class="container">
    <div class="footer-cta pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="footer-widget">
              <div class="footer-logo">
                <img src="/img/Logo_EHB_Filmworks_white.png" class="img-fluid" alt="logo">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <div class="cta-text">
              <h4>Follow Us</h4>
              <div class="footer-social-icon">
                <a href="#" class="m-0 p-0"><font-awesome-icon :icon="['far', 'envelope']" style="color: white" /></a>
                <a href="#" class="m-0 p-0 ps-3"><font-awesome-icon :icon="['fab', 'instagram']" style="color: white"/></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="cta-text">
              <h4>Mail us</h4>
              <a  class="m-0 p-0 pt-5" href="mailto:ehbfilmworks@gmail.com" style="color: white; font-size: 15px">ehb@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div class="footer-menu">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
