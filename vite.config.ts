import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default async () => {
  return defineConfig({
    plugins: [

      Uni(),
      UnoCSS(),
    ],
  })
}
