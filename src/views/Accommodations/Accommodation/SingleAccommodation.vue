<script>
  export default {
    name: "SingleAccommodation",
    mounted: {
      accId(){
        return this.$route.params.accId
      }
    }
  }
</script>

<template>
  <div>
    Accomodation id : {{ accId }}
  </div>
</template>

<style src="./SingleAccommodation.css"></style>