import { getRandomImg } from "../services/example"

export default {
	namespace: "example",

	state: {
		randomImg: ''
	},

	// subscriptions: {
	// 	setup({ dispatch, history }) {
	// 		history.listen((location) => {
	// 			if (location.pathname === "/example") {
	// 				dispatch({
	// 					type: "getRandomImg",
	// 				});
	// 			}
	// 		});
	// 	},
	// },

	effects: {
		*getRandomImg({}, {call, put}) {
			console.log('start')
      const {data} = yield call(getRandomImg)
      yield console.log(data)
			if(data?.message) {
				yield put({
					type: "getRandomImgSuccess",
					payload: data.message,
				});
			}
		},
	},

	reducers: {
		getRandomImgSuccess(state, action) {
			return { ...state, randomImg: action.payload }
		},
	},
};
