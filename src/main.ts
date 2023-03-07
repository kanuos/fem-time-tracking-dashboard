import './app.css'
import App from './App.svelte'
import "@fontsource/rubik";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";

const app = new App({
  target: document.getElementById('app'),
})

export default app
