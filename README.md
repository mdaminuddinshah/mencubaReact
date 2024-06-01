# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- apa yang dibuat -->
1. kita buat form dekat component
    - dekat component buat state validation supaya button tak boleh click kalau input empty
    - pastu dekat submit button, kita guna not logical operator and trim()
        - trim() utk buang emppty space kiri dan kanan
    - pastu dekat onSubmit={handle}
    - kita akan access input dari form menggunakan event.target.elements
    - lepastu kita hantar nilai tersebut ke App.js via props

2. 