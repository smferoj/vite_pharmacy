// Import third-party libraries first
import { createApp } from 'vue';
import mitt from 'mitt';

// Import your modules
import App from './App.vue';
import './style.css';

// Create an event bus instance
const eventBus = mitt();

// Create the Vue app
const app = createApp(App);

// Add the event bus to global properties
app.config.globalProperties.$eventBus = eventBus;

// Mount the app
app.mount('#app');
