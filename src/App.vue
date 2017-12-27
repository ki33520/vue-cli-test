<template>
	<div id="app">
		<ul class="nav top-nav flex-hv-center">
			<li class="flex-1">
				<router-link to="/user">User</router-link>
			</li>
			<li class="flex-1">
				<router-link to="/userlist">UserList</router-link>
			</li>
			<li class="flex-1">
				<router-link to="/test">Test</router-link>
			</li>
			<li class="flex-1 text-center">
				<button @click="surf">跳转</button>
			</li>
		</ul>
		<router-view name="sidebar"></router-view>
		<router-view name="content"></router-view>
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
	},
	methods:{
		surf(){
			setTimeout(()=>{
				//console.log(this.$router)
				this.$router.push({name: 'Home'});
				setTimeout(()=>{
					//console.log(this.$router)
					this.$router.push({name: 'User', params: {name: 'KinnaWang'}});
				},1000)
			},1000)
		}
	},
	watch: {
		'$route':{
			handler: (to, from) => {
				//console.log(from,to)
			}
		} 
	}
}
</script>

<style lang="styl">
#app
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;

</style>
