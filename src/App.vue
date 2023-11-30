<template>
  <div>
    <div>
      <Toast v-for="(toast, i) in toasts" :key="i" :toastType="toast.type" :message="toast.message"></Toast>
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Toast from './components/Toast.vue';
import Login from './components/Login.vue';

export default {
  data: () => ({
    toasts: [
    ],
  }),
  components: {
    Toast,
    Login,
  },
  mounted(){
    this.$eventBus.on("toast",(data)=>{
      // console.log(data);
      this.toasts.push(data);
      this.removeOneToast();
    });
  },
  methods:{
    removeOneToast(){
      setTimeout(()=>{
        this.toasts.shift();
      },2000)
    }
  }
};
</script>

<style scoped>

</style>
