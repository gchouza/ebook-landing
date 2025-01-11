<script>
  const chapters = [
    {
      number: 1,
      title: 'Navegando la Burocracia Española',
      strapline:
        'Entendiendo Visados, Residencia y Aspectos Legales Esenciales',
      excerpt:
        'Mudarse a España implica navegar por un laberinto de procesos burocráticos que pueden resultar abrumadores al principio. Este capítulo desglosa los pasos esenciales para obtener tu visado, establecer tu residencia y gestionar otros trámites legales. Ya sea que planees una estancia temporal o busques una residencia permanente, entender el marco legal de España es crucial. Exploraremos los diferentes tipos de visados disponibles, desde visados de estudiante hasta visados de trabajo, y te daremos consejos para simplificar tu proceso de solicitud. Además, este capítulo cubre documentación esencial, como obtener un Número de Identidad de Extranjero (NIE), que es clave para acceder a muchos servicios en España. También profundizaremos en el proceso de registro en el ayuntamiento local, conocido como empadronamiento, y la importancia de comprender las implicaciones fiscales de tu mudanza. Tanto si eres un jubilado, un nómada digital o alguien que se traslada por trabajo, este capítulo te guiará a través del papeleo y los procedimientos oficiales con consejos prácticos y recomendaciones útiles, asegurando que estés legalmente preparado para tu nueva vida en España.',
    },
    {
      number: 2,
      title: 'Encontrando tu Hogar Ideal en España',
      strapline:
        'Desde Villas Costeñas hasta Apartamentos Urbanos: Dónde y Cómo Vivir',
      excerpt:
        'España ofrece una amplia variedad de opciones de vivienda, desde pintorescos pueblos costeros hasta bulliciosos centros urbanos. Este capítulo es tu guía para encontrar el hogar perfecto que se adapte a tu estilo de vida y presupuesto. Comenzaremos explorando las regiones más populares de España para expatriados, destacando las cualidades únicas de cada una. Ya sea que te atraiga el ambiente cosmopolita de Madrid y Barcelona, la atmósfera relajada de la Costa del Sol, o la riqueza cultural de Andalucía, entender el mercado inmobiliario local es clave. Discutiremos los pros y contras de alquilar frente a comprar, y te daremos consejos prácticos sobre cómo navegar el mercado inmobiliario español. Aprenderás sobre los diferentes tipos de propiedades disponibles, desde modernos apartamentos hasta tradicionales fincas, y los pasos necesarios para asegurar un contrato de alquiler o compra. También abordaremos consideraciones importantes como la proximidad a servicios, transporte y escuelas locales. Este capítulo te proporcionará el conocimiento necesario para tomar una decisión informada, asegurando que tu nuevo hogar en España cumpla con todas tus expectativas y sea una base cómoda para tu nueva vida.',
    },
    {
      number: 3,
      title: 'Dominando el Mercado Laboral Español',
      strapline:
        'Estrategias para el Empleo y el Trabajo Autónomo en una Nueva Cultura',
      excerpt:
        'Encontrar un trabajo en España puede ser una experiencia desafiante pero gratificante, especialmente si no estás familiarizado con el mercado laboral y la cultura de trabajo local. Este capítulo ofrece una visión completa del panorama laboral en España, con estrategias para ayudarte a conseguir un empleo o establecer una carrera autónoma exitosa. Comenzaremos examinando los sectores con más oportunidades para expatriados, como el turismo, la educación, la tecnología y la salud. Aprenderás cómo adaptar tu currículum y carta de presentación a las expectativas españolas, y te daremos consejos sobre cómo crear redes de contacto efectivas en una cultura donde las conexiones personales a menudo juegan un papel crucial en la búsqueda de empleo. Para aquellos que consideren el trabajo autónomo, exploraremos los requisitos legales para convertirse en autónomo, la versión española del autoempleo, incluidos las obligaciones fiscales y las contribuciones a la seguridad social. Además, discutiremos la importancia de aprender español para mejorar tus perspectivas laborales e integrarte en el lugar de trabajo. Ya sea que busques ascender en el mundo corporativo, iniciar un negocio o trabajar de forma remota, este capítulo ofrece valiosas ideas para ayudarte a navegar con éxito el mercado laboral español.',
    },
    {
      number: 4,
      title: 'Adoptando el Estilo de Vida Español',
      strapline:
        'Normas Culturales, Etiqueta Social y Creando Nuevas Conexiones',
      excerpt:
        'Mudarse a España no se trata solo de cambiar tu ubicación; se trata de sumergirte en una nueva forma de vida. Este capítulo explora el vibrante estilo de vida español, ofreciendo ideas sobre las normas culturales, la etiqueta social y cómo establecer conexiones significativas en tu nuevo hogar. Comenzaremos hablando de la importancia de la familia y la comunidad en España, donde las relaciones a menudo se construyen en torno a comidas compartidas, festivales y tradiciones locales. Aprenderás sobre el concepto español de "mañana", y cómo la actitud relajada hacia el tiempo influye en la vida diaria. También profundizaremos en la etiqueta social, desde saludar a las personas con un beso en la mejilla hasta navegar las complejidades de salir a comer. Ya sea que asistas a una fiesta local o te unas a una conversación en el café del barrio, comprender estas sutilezas culturales te ayudará a integrarte más fácilmente. Además, te daremos consejos sobre cómo construir una red social, ya sea a través de clases de idiomas, grupos de expatriados o participando en pasatiempos y deportes locales. Al final de este capítulo, estarás bien preparado para abrazar el estilo de vida rico, comunitario y vibrante que hace que España sea tan única.',
    },
    {
      number: 5,
      title: 'Presupuesto y Finanzas en España',
      strapline: 'Gestión de Costos, Impuestos y Banca en tu Nuevo Hogar',
      excerpt:
        'Gestionar tus finanzas con éxito es crucial para disfrutar de una vida sin estrés en España. Este capítulo ofrece orientación práctica sobre cómo planificar tu presupuesto para tu nueva vida, gestionar tus gastos y navegar por los sistemas financieros de España. Comenzaremos hablando del costo de vida en diferentes regiones de España, desde el campo más asequible hasta los centros urbanos más caros. Aprenderás a crear un presupuesto realista que cubra lo esencial, como vivienda, servicios públicos, alimentos y atención médica, mientras disfrutas de las delicias culinarias y actividades culturales de España. También profundizaremos en el sistema bancario español, ofreciendo consejos sobre cómo abrir una cuenta bancaria, elegir los productos financieros adecuados y entender las tarifas bancarias locales. La fiscalidad es otro tema clave que abordaremos, con explicaciones sobre cómo declarar impuestos como residente o no residente, y las implicaciones de los tratados fiscales de España con otros países. Ya sea que planees jubilarte, trabajar o invertir en España, este capítulo te proporcionará el conocimiento financiero necesario para aprovechar al máximo tus recursos y disfrutar de una vida cómoda en tu nuevo hogar.',
    },
  ];

  let selectedChapterNumber = $state(1);
  let selectedChapter = $derived(
    chapters.find((chapter) => chapter.number === selectedChapterNumber)
  );

  const selectChapter = (chapter) => {
    selectedChapterNumber = chapter.number;
  };
</script>

<section class="landing-page-section default-margin">
  <h2 class="mb-l">Lo que obtienes</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter}
        <li>
          <button
            class="chapter-title"
            class:selected-chapter-title={selectedChapterNumber ===
              chapter.number}
            aria-controls={`chapter-info-${chapter.number}`}
            aria-expanded={selectedChapterNumber === chapter.number}
            onclick={() => selectChapter(chapter)}
          >
            <h3>Capítulo {chapter.number}: {chapter.title}</h3>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">

      <h3 class="chapter-strapline italic mb-s">
        {selectedChapter.strapline}
      </h3>
      <p>
       {selectedChapter.excerpt}
      </p>
    </div>
  </div>
</section>

<style>
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid gray;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    color: white;
    border: none;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
