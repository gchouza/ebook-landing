import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18', // Correct runtime for Vercel Serverless Functions
    }),
    alias: {
      $components: 'src/lib/components',
      $assets: 'src/assets',
    },
  },
};

export default config;
