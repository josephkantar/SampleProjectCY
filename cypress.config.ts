import { defineConfig } from 'cypress';

export default defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	e2e: {
		baseUrl: 'https://sandbox-api.endolu.com',
		video: true,
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on)
		},
		//includeShadowDom:true,
		env: {
			snapshotOnly: true
		  }
	},

});
