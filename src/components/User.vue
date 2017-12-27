<template>
	<div class="container main-container">
		<div class="row">我叫：{{$route.params.name}}</div>
		<div>
			<router-link to="more" append>More</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import _ from 'lodash';
export default {
	name: 'users',
	data () {
		return {

		}
	},
	methods: {

	},
	created(){

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>
.contacted
	text-decoration: line-through;
</style>
