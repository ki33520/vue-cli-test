<template>
	<div id="app">
		<router-view :msg="msg + `new`"></router-view>
	</div>
</template>

<script>
import Lib from 'assets/js/Lib';

export default {
	name: 'app',
	data(){
		return {
			msg: 'App 文字'
		}
	}
}
</script>

<style lang="styl">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
