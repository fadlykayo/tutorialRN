export default {
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	leftButtonFooter: {
		paddingVertical: 5,
		paddingHorizontal: 8,
	},
	rightButtonFooter: {
		paddingVertical: 5,
		paddingHorizontal: 8,
	},
	content: {
		flex: 1,
		padding: 15,
		backgroundColor: 'white'
	},
	cardContainer: (color = 'white') => {
		return {
			flex: -1,
			height: 80,
			alignItems: 'center',
			flexDirection: 'row',
			padding: 15,
			backgroundColor: color,
			marginBottom: 15,
			borderRadius: 10,
		};
	},
	cardText: {
		color: 'white',
		marginLeft: 20,
	},
	footer: {
		height: 60,
		padding: 10,
		borderTopWidth: 1,
		borderColor: 'grey',
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
};