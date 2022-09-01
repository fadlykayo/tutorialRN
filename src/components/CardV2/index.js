import React from 'react';
import {
	Text, View, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Navigation } from '../../helpers';
import Stars from '../Stars';
import Tag from '../Tag';

import Style from './style';

const CardV2 = ({ data }) => {
	const baseImgUrl = 'https://image.tmdb.org/t/p/w300';
	const finalImage = data?.poster_path ? baseImgUrl + data.poster_path : '';
	const deviceWidth = Dimensions.get('window').width;
	const deviceHeight = Dimensions.get('window').height;

	return (
		<TouchableOpacity
			onPress={ () => {
				Navigation.push('Detail', { data });
			} }>
			<View
				style={ [
					Style.container,
					{ height: deviceHeight / 3, width: deviceWidth / 2 },
				] }>
				<LinearGradient
					colors={ ['transparent', '#000000ad'] }
					style={ Style.wrapper }>
					<Image
						resizeMode='cover'
						style={ { width: '100%', height: '100%', zIndex: -1 } }
						source={ { uri: finalImage } }
					/>
					<View style={ Style.content }>
						<Tag/>
						<Stars rating={ data?.vote_average }/>
						<Text style={ Style.text }>{ data?.title || 'TITLE' }</Text>
					</View>
				</LinearGradient>
			</View>
		</TouchableOpacity>
	);
};

export default CardV2;
