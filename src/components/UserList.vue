<template>
	<div class="container main-container">
		<h2>添加用户信息</h2>
		<form @submit="addUser">
			<div class="row flex">
				<label class="flex-1">用户名:</label>
				<div class="label-flw flex-3">
					<input class="w100" type="text" v-model="newUser.name" placeholder="Enter name" />
				</div>
			</div>
			<div class="row flex">
				<label class="flex-1">邮箱:</label>
				<div class="label-flw flex-3">
					<input class="w100" type="text" v-model="newUser.email" placeholder="Enter Email" />
				</div>
			</div>
			<div class="row flex row-submit">
				<label class="flex-1"></label>
				<div class="label-flw flex-3">
					<input type="submit" value="提交" />
				</div>
			</div>
		</form>
		<ul>
			<li class="flex flex-hv-center" v-for="(el,key) in users">
				<input type="checkbox" v-model="el.contacted" />
				<div class="flex flex-hv-center flex-1" :class="{contacted: el.contacted}">
					<label>{{el.name}} :</label>
					<div class="label-flw flex-1">{{el.email}}</div>
					<button class="icon icon-cir" @click="delItem(el,key)">X</button>
				</div>
			</li>
		</ul>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
import _ from 'lodash';
export default {
	name: 'users',
	props: {
		msg: {

		}
	},
	data () {
		return {
			users: [

			],
			newUser: {
				name: null,
				email: null
			}
		}
	},
	methods: {
		addUser(e){
			let new_user = {
				name: this.newUser.name,
				email: this.newUser.email,
				contacted: false
			};
			this.users.push(new_user);
			e.preventDefault();
		},
		delItem(el,key){
			this.users.splice(_.findIndex(this.users,el),1); //key === _.findIndex(this.users,el)
			console.log(this.users)
		}
	},
	created(){
		this.$http.get('http://jsonplaceholder.typicode.com/users').then((response)=>{
			response.data.forEach((el,key)=>{
				el.contacted = false;
			})
			this.users = response.data;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>
.contacted
	text-decoration: line-through;
</style>
