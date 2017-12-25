import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from 'components/Home'
import User from 'components/User'
import Test from 'components/Test'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/user',
			name: 'User',
			component: User
		},
		{
			path: '/test',
			name: 'Test',
			component: Test
		},
		{
			path: '/test/:username/post/:post_id',
			name: 'Test',
			component: Test
		}
	]
})
