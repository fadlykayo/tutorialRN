export default {
	container: {
		position: 'relative',
	},
	logo: {
		position: 'absolute',
		top: 40,
		left: 15,
		zIndex: 2,
	},
	back: {
		height: 30,
		width: 30,
		position: 'absolute',
		top: 40,
		left: 15,
		zIndex: 2,
	},
	indicatorContainer: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 20,
		width: '100%',
		justifyContent: 'center',
	},
	indicator: {
		backgroundColor: '#FFFFFF',
		opacity: 0.5,
		width: 8,
		height: 8,
		marginHorizontal: 5,
		borderRadius: 4,
	},
	active: {
		opacity: 1,
	},
};
