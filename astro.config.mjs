import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://medicexpress.com.co',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  trailingSlash: 'always'
});
