import adapter from "@sveltejs/adapter-auto";
import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocessor({
    scss: {
      prependData: "@import './static/styles/app.scss';"
    }
  }),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    alias: {
      "@src": "./src/"
    },
    adapter: adapter()
  }
};

export default config;
