<script>
  import authorPic from '$assets/profile_pic.webp';
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Sobre el autor</h2>
  <div class="author-container">
    <div class="author-text">
      <p class="mb-xs">
        Gabriel Chouza es un autor y desarrollador de software que reside en
        Madrid, España. Con más de una década de experiencia en la industria
        tecnológica, ha sabido combinar su pasión por la escritura y la
        programación para crear contenido que inspira tanto a profesionales del
        sector como a aquellos que buscan iniciar su carrera en tecnología. Su
        enfoque único mezcla habilidades técnicas con narrativas cautivadoras,
        lo que le ha permitido destacar en el mundo literario y profesional.
      </p>
      <p>
        Actualmente, Gabriel divide su tiempo entre su trabajo como
        desarrollador full-stack y la escritura de libros que abordan temas como
        la innovación tecnológica, la creatividad en el desarrollo de software y
        las historias humanas detrás de los proyectos más ambiciosos. En Madrid,
        encuentra inspiración en su entorno multicultural y en la vibrante
        comunidad tecnológica, lo que enriquece su perspectiva y le permite
        ofrecer ideas frescas y accesibles para lectores de todas partes del
        mundo.
      </p>
    </div>
    <img src={authorPic} alt="Gabriel Chouza" />
  </div>
</section>

<style>
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }
</style>
