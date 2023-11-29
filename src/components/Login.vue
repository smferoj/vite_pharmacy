<template>
  <div class="container mt-5">
    <div class="card bg-light border-0 shadow-lg" style="max-width: 400px; margin: auto">
      <div class="card-body p-5">
        <h2 class="card-title text-center mb-4">Login</h2>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control p-2"
              placeholder="Enter your email"
              required
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
              required
            />
          </div>

          <button type="submit" class="btn btn-success btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #639ad1;
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
