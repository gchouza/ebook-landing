<script>
  import { PUBLIC_MP_KEY } from '$env/static/public';
  import mercadopago from 'mercadopago';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let { children, ...props } = $props();
  let preferenceId = '';

  onMount(async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    preferenceId = data.response.id;

    // Dynamically create and append the script tag to the document head
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    script.onload = () => {
      // Initialize MercadoPago SDK after script is loaded
      const mp = new MercadoPago(PUBLIC_MP_KEY, {
        locale: 'es-UY',
      });

      // Use the mercadopago SDK
      const checkoutButton = document.getElementById(props.id);
      checkoutButton.addEventListener('click', function () {
        console.log('clicked');
        try {
          mp.checkout({
            preference: {
              id: preferenceId,
            },
            autoOpen: true,
          });
        } catch (error) {
          goto('/checkout/failure');
        }
      });
    };

    document.head.appendChild(script);
  });
</script>

<button id={props.id} {...props}>{@render children()}</button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
