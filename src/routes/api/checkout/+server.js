import { json } from '@sveltejs/kit';
import { PRIVATE_MP_ACCESS_TOKEN } from '$env/static/private';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export const POST = async () => {
  try {
    const client = new MercadoPagoConfig({
      accessToken: PRIVATE_MP_ACCESS_TOKEN,
    });

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            id: '1234',
            title: 'Ebook - España',
            quantity: 1,
            unit_price: 10,
          },
        ],
      },
    });

    return json({ success: true, response });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};
