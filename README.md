 npm install --save mitt

 main.js => import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)
 app.config.globalProperties.$eventBus = eventBus;
app.mount('#app');