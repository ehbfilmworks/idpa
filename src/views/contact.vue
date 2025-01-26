<template>
  <div class="container" style="margin-top: 10%">
    <h1>Kontakt</h1>
    <div class="row">
      <div class="col-sm-5">
        <form action="https://formspree.io/f/xldggooe" method="POST">
          <div class="mb-3">
            <label>
              <p class="form-label">Email:</p>
              <input class="form-control" type="email" name="email">
            </label>
          </div>
          <label>
            <p class="form-label">Nachricht:</p>
            <textarea class="form-control" name="message" rows="7" cols="50"></textarea>
          </label>
          <div class="mt-3">
            <button type="submit" class="btn btn-primary">Senden</button>
          </div>
        </form>
      </div>
      <div class="col-sm d-flex flex-column align-items-end">
        <div class="pe-4 ps-4">
          <p style="opacity: 1">EHB - Film works</p>
          <p>ehbfilmworks@gmail.com</p>
          <p>+41 78 187 33 33</p>
        </div>
        <iframe class="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.2778646583865!2d7.537453376370382!3d47.205339571155875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791d7fc1c849875%3A0x883a29fdb0709207!2sGewerblich-industrielle%20Berufsschule%20Solothurn!5e1!3m2!1sde!2sch!4v1731245568202!5m2!1sde!2sch"
                height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  </div>
</template>
<script setup>
</script>