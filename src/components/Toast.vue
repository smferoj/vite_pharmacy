<template>
        <div class="d-flex justify-content-between align-items-center gap-5 bg-danger  p-2">
            <span class="">{{toastType}}</span>
            <span>X</span>
        </div>
        <div class="bg-white p-3">
            {{ message }}
        </div>

</template>

<script>
export default {
   props:{
    toastType:{
        type: String,
        default:"Success"
    },
    message:{
        type: String,
        default: "Toast message"
    },
   }
};

</script>

<style scoped>

</style>