import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default {
	container: {
		width: deviceWidth,
		height: deviceHeight / 2.7,
	},
	wrapper: {
		position: 'relative',
	},
	content: {
		position: 'absolute',
		bottom: 40,
		paddingHorizontal: 15,
		width: '75%',
	},
	text: {
		fontSize: 24,
		color: '#fff',
		fontWeight: '700',
	},
	buttonWrapper: {
		alignSelf: 'flex-start',
	},
	buttonText: {
		borderRadius: 40,
		borderColor: '#FFE922',
		borderWidth: 1,
		color: '#FFE922',
		paddingVertical: 8,
		paddingHorizontal: 24,
		lineHeight: 24,
	},
};
