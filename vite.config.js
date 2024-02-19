import { defineConfig } from 'vite'
import three from '@vitejs/three'

export default defineConfig({
    base: "/SpEllHart",
    plugins: [three()],
})