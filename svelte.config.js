import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs20', // Specify Node.js 20 runtime for Vercel
    }),
    alias: {
      $components: 'src/lib/components',
      $assets: 'src/assets',
    },
  },
};

export default config;
