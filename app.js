const INITIAL_STATE = { face: '(^_^)v' };
const store = Redux.createStore(rootReducer);
const faceDiv = document.querySelector('#mood-face');
const faceBtns = document.querySelector('#mood-face-buttons');

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'HAPPY':
			return { ...state, face: 'ヽ(ヅ)ノ' };
		case 'SAD':
			return { ...state, face: '（；＿；）' };
		case 'ANGRY':
			return { ...state, face: '(╯°Д°)╯ ┻━┻' };
		case 'CONFUSED':
			return { ...state, face: 'ఠ_ఠ' };
		default:
			return state;
	}
}

faceDiv.textContent = store.getState().face;

faceBtns.addEventListener('click', (e) => {
	store.dispatch({ type: e.target.id.toUpperCase() });
	const currentFace = store.getState().face;
	faceDiv.textContent = currentFace;
});
