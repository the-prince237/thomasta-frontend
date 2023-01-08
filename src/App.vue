<script>
  import routes from '@/router/routes'

  export default {
    name: 'App',
    data(){
      return {
        routes,
        on: false,
      }
    }
  }
</script>

<template>
  <div class="temp-header">
  <!-- cette barre de navigation est temporaire 
    et permettra à l'équipe de visualiser 
    toutes les pages réalisées ou en cours de réalisation
    ainsi que de naviguer entre elles -->
    <div v-if="on" class="temp-header--container">
      <nav>
        <router-link
          v-for="route in routes"
          class="temp-nav-link" 
          :to="route.path"
          :key="route.path"
        >
          {{ route.name }}
        </router-link>
      </nav>
      <span class="btn" @click="on=false">Fermer</span>
    </div>
    <div class="temp-button btn" @click="on=true" v-else>Naviger</div>
  </div>
  <router-view></router-view>
</template>

<style src="./App.css"></style>
<style src="./index.css"></style>