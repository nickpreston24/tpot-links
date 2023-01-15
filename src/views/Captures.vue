<template>
	<div class="flex flex-col items-center">
		<h1 class="text-ocean-500 text-2xl">Captured Conversations!</h1>
		<label for="count">{{ count }}</label>
		<label for="count">{{ count }}</label>
		<label for="count">{{ count }}</label>
		<label for="count">{{ count }}</label>
		<div class="flex flex-row">
			<button class="btn btn-primary" @click="count++">Up</button>
			<button class="btn btn-secondary" @click="count--">Down</button>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			count: 50
		}
	}
}
</script>