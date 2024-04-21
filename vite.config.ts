/// <reference types="vitest" />
// import { defineConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		// include: ['src/**/__tests__/**/(*.)+(spec|test).[jt]s?(x)'],
	},
});
