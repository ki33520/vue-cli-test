import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from 'components/Home'
import User from 'components/User'
import UserMore from 'components/UserMore'
import UserList from 'components/UserList'
import Test from 'components/Test'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			components: {
				content: Home
			}
		},
		{
			path: '/user/:name',
			name: 'User',
			components: {
				sidebar: {
					template: `
						<ul class="nav flex-hv-center">
							<li class="flex-1">
								<router-link to="/user/HolyHu">HolyHu</router-link>
							</li>
							<li class="flex-1">
								<router-link to="/user/KinnaWang">KinnaWang</router-link>
							</li>
							<li class="flex-1">
								<router-link to="/user/AimeeHu">AimeeHu</router-link>
							</li>
						</ul>
					`
				},
				content: User
			},
			children: [
				{
					path: 'more',
					name: 'UserMore',
					component: UserMore
				}
			]
		},
		{
			path: '/userlist',
			name: 'UserList',
			components: {
				content: UserList
			}
		},
		{
			path: '/test',
			name: 'Test',
			components: {
				content: Test
			}
		},
		{
			path: '/test/:username/post/:post_id',
			name: 'Test',
			components: {
				content: Test
			}
		}
	]
})
