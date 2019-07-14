<template>
	<div id="stream">
		<Camera class="cam"></Camera>
	</div>
</template>

<script>
import Camera from '@/components/Camera.vue'
export default {
	name: 'about',
	components: {
		Camera
	},
	data: function () {
		return {
		}
	},
}
</script>

<style>
body{
	margin: 0px;
	padding: 0px;
}
#stream{
	margin-top:20px;
}
</style>
