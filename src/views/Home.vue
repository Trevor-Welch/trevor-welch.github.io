<template>
  <div class="home">
    <Hero/>
    <ProjectShowcase/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ProjectShowcase from '@/components/ProjectShowcase.vue'

export default {
  name: 'home',
  components: {
  	Hero,
    ProjectShowcase
  }
}
</script>

<style>
	.home {
		width:100%;
		animation: fade-in .75s ease-out .5s 1 backwards;
	}
</style>