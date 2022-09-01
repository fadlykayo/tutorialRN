import {
	createNavigationContainerRef,
	StackActions,
	CommonActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const push = (name, params) => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(StackActions.push(name, params));
	}
};

const replace = (name, params) => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(StackActions.replace(name, params));
	}
};

const reset = (name, params) => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [{ name, params }],
			}),
		);
	}
};

const pop = count => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(StackActions.pop(count));
	}
};

export default { push, replace, pop, reset, navigationRef };
