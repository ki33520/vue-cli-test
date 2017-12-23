<template>
	<div class="container main-container">
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>
		<p v-if="showName">{{user.firstName}}</p>
		<p v-else>Nobody</p>
		<ul>
			<li v-for="(el,key) in items">
				{{el.title}}
			</li>
		</ul>
		
		<!-- 键盘事件 -->
		<div class="row flex">
			<input type="text" @input="handleWatch" @keydown="keyDown" @keyup.enter="enterKeyup" />
			<button @click="handleSubmit">提交</button>
		</div>

		<!-- computed 计算属性 -->
		<p>{{fullName}}</p>
		<div class="row flex">
			<label class="flex-1">First Name:</label>
			<div class="label-flw flex-3">
				<input type="text" v-model="user.firstName" />
			</div>
		</div>
		<div class="row flex">
			<label class="flex-1">Last Name:</label>
			<div class="label-flw flex-3">
				<input type="text" v-model="user.lastName" />
			</div>
		</div>
		
		<!-- props 属性 -->
		<h2 @click="showPlugin">{{msg}}</h2>

	</div>
</template>

<script>
import Alert from 'vux/src/components/alert/index';
import Flexbox from 'vux/src/components/flexbox/flexbox'

export default {
	name: 'test',
	components: {
		Alert,
		Flexbox
	},
	props: {
		msg: {
			type: String,
			default: '默认文字'
		}
	},
	data () {
		return {
			title: 'Hello Vue.js',
			user: {
				firstName: 'Holy',
				lastName: 'hu'
			},
			showName: false,
			items: [
				{ title: 'item 1'},
				{ title: 'item 2'},
				{ title: 'item 3'}
			]
		}
	},
	computed: {
		fullName(){
			return this.user.firstName +' '+ this.user.lastName;
		}
	},
	methods: {
		handleSubmit() {
			console.log(this)
		},
		handleWatch(e){
			console.log(e)
		},
		enterKeyup(e){
			console.log(e)
		},
		keyDown(e){
			console.log(e)
		},
		showPlugin () {
			this.$vux.alert.show({
				title: 'VUX is Cool',
				content: '哈哈哈',
				onShow () {
					console.log('Plugin: I\'m showing')
				},
				onHide () {
					console.log('Plugin: I\'m hiding now')
				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
