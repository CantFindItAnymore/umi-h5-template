export default {
	namespace: 'tabBar',

	state: {
		selectedTab: '/',
	},

	effects: {
		// *switchTabBar({payload}, {call, put}) {
		// 	console.log(payload)
		// 	// yield put({
		// 	// 	type: "switchTabBarSuc",
		// 	// 	payload: payload,
		// 	// });
		// 	return { ...state, selectedTab: action.payload }
		// },
	},

	reducers: {
		switchTab(state, action) {
			return { ...state, selectedTab: action.payload }
		},
	},
}
