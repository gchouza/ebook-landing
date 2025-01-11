<script>
  import bookCover from '$assets/book_cover.png';
  import phoneCover from '$assets/phone_cover.png';
  import { Button } from '$components';
</script>

<section class="hero">
  <div class="hero-showcase text-center bold">
    <h1 class="purple">MÚDATE A</h1>
    <h1 class="purple mb-xs">ESPAÑA</h1>
    <h4 class="italic semi-bold">
      No hay necesidad de cometer las mismas equivocaciones que yo.
    </h4>
    <img class="book-cover" src={bookCover} alt="Book Cover" />
    <img class="phone-cover" src={phoneCover} alt="Phone Cover" />
  </div>

  <div class="hero-text white text-center">
    <h1>ESTE EBOOK VA A</h1>
    <h1 class="mb-m">AHORRARTE DINERO</h1>
    <p class="light-grey mb-l">
      Nací en Uruguay en 1995. A los 22 años me mudé a España. En este ebook te
      cuento todo lo que aprendí en el proceso. Desde cómo conseguir la
      residencia hasta cómo abrir una cuenta bancaria.
    </p>
    <Button id="hero-section-buy-button">Compra el ebook por $10</Button>
  </div>
</section>

<style>
  .hero {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  }

  .hero-showcase {
    position: relative;
    width: 50%;
    padding: 100px 16px 0 16px;
    background: linear-gradient(
      135deg,
      #e2cbff,
      #e2cbff 25%,
      #deeaff 50%,
      #ece5ff 75%,
      #927bce
    );
  }

  .hero-text {
    padding: 100px 5%;
    width: 50%;
    background-color: black;
  }

  .book-cover {
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 65%;
    transform: translateY(30%);
  }

  .phone-cover {
    position: absolute;
    right: 52%;
    bottom: 0;
    width: 35%;
    transform: translateY(25%);
  }
</style>
