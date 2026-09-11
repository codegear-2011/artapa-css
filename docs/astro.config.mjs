// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ArtapaCSS Docs',
			favicon: "https://i.ibb.co/4nhh1D8C/output-onlinepngtools-1.png",
			customCss: ['./src/fonts/font-face.css'],
			
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/codegear-2011/artapa-css/' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
