<script>
  import { FaqItem, Button } from '$components';
  import twitterIcon from '$assets/icons/twitter.webp';

  const faqs = [
    {
      question: '¿Qué aprenderé con este ebook?',
      answer:
        'Este ebook proporciona una guía completa para mudarte a España, cubriendo desde cómo obtener el visado adecuado y navegar el sistema legal español, hasta encontrar el lugar perfecto para vivir e integrarte en la cultura local. Ya sea que te mudes por trabajo, estudio o jubilación, esta guía te equipa con el conocimiento esencial y los pasos prácticos para que tu transición sea lo más fluida posible.',
    },
    {
      question: '¿Para quién es este ebook?',
      answer:
        'Este ebook es perfecto para cualquier persona que esté considerando mudarse a España, ya sea para una estancia temporal o una reubicación permanente. Está diseñado para expatriados, jubilados, estudiantes y profesionales que desean evitar errores comunes y agilizar su mudanza. Si buscas una guía detallada y paso a paso que te acompañe en cada etapa del proceso, este ebook es para ti.',
    },
    {
      question: '¿Cuánto cuesta el ebook?',
      answer:
        'El ebook tiene un precio de $10. Esta compra única te da acceso inmediato a todo el contenido, incluidos capítulos detallados, listas de verificación prácticas y recursos valiosos que te ahorrarán tiempo, dinero y estrés durante tu mudanza a España.',
    },
    {
      question: '¿La información del ebook está actualizada?',
      answer:
        'Sí, el ebook se actualiza regularmente para reflejar los últimos cambios en las leyes de inmigración españolas, los requisitos de visado y otra información relevante. El autor, John Smith, se asegura de estar al tanto de estas actualizaciones para que recibas la guía más precisa y actualizada disponible.',
    },
    {
      question: '¿Puedo obtener un reembolso si no estoy satisfecho?',
      answer:
        'Por supuesto. Ofrecemos una garantía de devolución de dinero de 30 días. Si sientes que el ebook no cumplió con tus expectativas o no proporcionó el valor que buscabas, simplemente contáctanos dentro de los 30 días posteriores a tu compra, y te reembolsaremos el importe completo, sin hacer preguntas.',
    },
  ];

  let questionCurrentlyExpanded = $state(-1);

  const onClick = (index) => {
    if(questionCurrentlyExpanded === index) {
      questionCurrentlyExpanded = -1;
      return;
    }
    questionCurrentlyExpanded = index;
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Preguntas frecuentes</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem {faq} isExpanded={index === questionCurrentlyExpanded} onclick={() => onClick(index)}/>
    {/each}
  </div>
  <div class="additional-info mt-m">
    <Button class="mt-s" id="faq-section-buy-button">Compre ahora</Button>
    <p class="mt-m">Tienes otras preguntas?</p>
    <a href="https://x.com/gabychouza95" target="_blank">
      <p>
        Escribeme en twitter <img
          src={twitterIcon}
          class="twitter-icon"
          alt=""
        />
      </p>
    </a>
  </div>
</section>

<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: gray;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
