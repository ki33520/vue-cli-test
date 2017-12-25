<template>
	<div class="container main-container">
		<h2>Index</h2>
	</div>
</template>

<script>
import _ from 'lodash';
export default {
	name: 'users',
	data () {
		return {
			users: [
				{
					name: 'Holy Hu 1',
					email: 'ki33520@gmail.com',
					contacted: false
				},
				{
					name: 'Holy Hu 2',
					email: 'ki33521@gmail.com',
					contacted: false
				},
				{
					name: 'Holy Hu 3',
					email: 'ki33522@gmail.com',
					contacted: false
				}
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
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>
.contacted
	text-decoration: line-through;
</style>
