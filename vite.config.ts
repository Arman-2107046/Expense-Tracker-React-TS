import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
    base: '/Expense-Tracker-React-TS/', // 👈 Add this line!
  plugins: [react()],
})
