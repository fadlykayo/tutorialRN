import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Style from './style';
import LinearGradient from 'react-native-linear-gradient';

import { Navigation } from '../../helpers';
import Stars from '../Stars';
import Tag from '../Tag';

const HeaderPoster = ({ posterData, isHome }) => {
	const baseImgUrl = 'https://image.tmdb.org/t/p/original';
	const finalImage = posterData?.backdrop_path
		? baseImgUrl + posterData.backdrop_path
		: posterData?.poster_path
			? baseImgUrl + posterData.poster_path
			: '';

	if (!posterData) {
		return null;
	}

	return (
		<LinearGradient
			start={ { x: 1, y: 0 } }
			end={ { x: 0, y: 0 } }
			colors={ ['transparent', '#1D1D1D'] }
			horizontal
			style={ Style.container }>
			<View style={ Style.wrapper }>
				<Image
					resizeMode='cover'
					style={ { width: '100%', height: '100%', zIndex: -1 } }
					source={ { uri: finalImage } }
				/>
				<View style={ Style.content }>
					<Tag/>
					{ !isHome && <Stars rating={ posterData.vote_average }/> }
					<Text style={ Style.text }>{ posterData.title }</Text>
					{ isHome && (
						<TouchableOpacity
							style={ Style.buttonWrapper }
							onPress={ () => Navigation.push('Detail', { data: posterData }) }>
							<Text style={ [Style.buttonText, { marginTop: 20 }] }>Watch Now</Text>
						</TouchableOpacity>
					) }
				</View>
			</View>
		</LinearGradient>
	);
};

export default React.memo(HeaderPoster);
