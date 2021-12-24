import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('./src/stores'),
					$icons: path.resolve('./src/icons'),
					$components: path.resolve('./src/components'),
					$utils: path.resolve('./src/utils'),
					$styles: path.resolve('./src/styles')
				}
			}
		}
	}
};

export default config;
