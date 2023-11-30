<template>
  <div class="container mt-5">
    <div class="card bg-light border-0 shadow-lg" style="min-width: 350px; margin: auto">
      <div class="card-body p-4">
        <div class="">
        </div>
        <h2 class="card-title text-center mb-4">Login</h2>
        <form action="#" @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control p-2"
              placeholder="Enter your email"
              v-model="formData.email"
              requrired
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control p-2"
              placeholder="Enter your password"
              v-model="formData.password"
              requrired
             
            />
          </div>

          <button type="submit" class="btn btn-success btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    formData:{
      email:"",
      password:"",
    }
  }),
  methods:{
    handleSubmit(){
      // console.log(this.formData);
      if(!this.formData.email){
        // alert("Email cannot be empty");
        this.$eventBus.emit("toast",{
          type:"Error",
          message:"Email cannot be empty"
         })
        return;
      }
      if(this.formData.password.length<6){
        // alert("Password must be at least 6 characters long");
         this.$eventBus.emit("toast",{
          type:"Error",
          message:"Password must be at least 6 characters long"
         })
        return;
      }
      // Call API
    }
  },
  components:{
    
  }
};
</script>

<style>
body {
  background-color: rgb(114, 168, 170);
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.card {
  border-radius: 15px;
}
.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}
.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>

