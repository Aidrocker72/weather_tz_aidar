import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { webfontDownload } from 'vite-plugin-webfont-dl';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
 
export default defineConfig({
  plugins: [
    vue(),
    webfontDownload(),
    createSvgSpritePlugin({
      exportType: 'vue',
      include: '**/icons/*.svg'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
})
