import React, { useState } from 'react';
import { debounce } from 'lodash';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
	Image,
	ScrollView,
	Dimensions,
	View,
	TouchableOpacity,
} from 'react-native';

import { Navigation } from '../../helpers';

import Style from './style';
import HeaderPoster from '../HeaderPoster';

import { rebel_logo } from '../../assets/images';

const Poster = ({ posterList, posterData, isHome }) => {
	const deviceWidth = Dimensions.get('window').width;

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleCalc = debounce(e => {
		if (!posterList) {
			return;
		}
		const calc = Math.round(e?.nativeEvent?.contentOffset?.x / deviceWidth);
		const index = Math.abs(calc);
		setCurrentIndex(index);
	}, 100);

	const handleScroll = e => {
		e.persist();
		handleCalc(e);
	};

	return (
		<View style={ Style.container }>
			{ !isHome ? (
				<TouchableOpacity style={ Style.back } onPress={ () => Navigation.pop(1) }>
					<IonIcon name='ios-chevron-back' size={ 30 } color='#fff' />
				</TouchableOpacity>
			) : (
				<Image style={ Style.logo } source={ rebel_logo } />
			) }

			<ScrollView
				horizontal
				onMomentumScrollEnd={ handleScroll }
				//
				pagingEnabled
				//
				// decelerationRate={ 'fast' }
				// disableIntervalMomentum={ true }
				// snapToInterval={ deviceWidth } // your element width: ;
				// snapToAlignment={ 'center' }
			>
				{ posterList &&
          posterList.map(list => (
          	<HeaderPoster key={ list.id } isHome={ isHome } posterData={ list } />
          )) }
				{ posterData && <HeaderPoster isHome={ isHome } posterData={ posterData } /> }
			</ScrollView>
			{ posterList?.length && (
				<View style={ Style.indicatorContainer }>
					{ posterList.map((_, i) => (
						<View
							key={ 'dot' + i }
							style={ [Style.indicator, i === currentIndex ? Style.active : ''] }
						/>
					)) }
				</View>
			) }
		</View>
	);
};

export default Poster;
