<template>
  <div class="spend">
    <SpendABillion/>
  </div>
</template>

<script>
// @ is an alias to /src
import SpendABillion from '@/components/SpendABillion.vue'

export default {
  name: 'spend',
  components: {
  	SpendABillion
  }
}
</script>

<style>
	.home {
		width:100%;
		animation: fade-in .5s ease-out .5s 1 backwards;
	}
</style>