<template>
	<div id="app">
		<ul class="nav top-nav flex flex-hv-center">
			<li class="flex-1">
				<router-link to="/">Home</router-link>
			</li>
			<li class="flex-1">
				<router-link to="/user">User</router-link>
			</li>
			<li class="flex-1">
				<router-link to="/test">Test</router-link>
			</li>
		</ul>
		<router-view></router-view>
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
	},
	mounted(){
		//console.log(this)
	}
}
</script>

<style lang="styl">
#app
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;

</style>
