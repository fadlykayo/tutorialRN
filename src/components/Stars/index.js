import React from 'react';
import { View } from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';

import Style from './style';

const Stars = ({ rating }) => {
	const renderStars = () => {
		let ratingVal = (rating / 2) * 100;
		let starsBucket = [];

		// console.log({ rating, ratingVal });

		for (let i = 0; i < 5; i++) {
			if (ratingVal >= 100) {
				starsBucket.push(
					<FAIcon
						key={ 'star' + i }
						style={ Style.icon }
						name='star'
						size={ 10 }
						color={ '#fff' }
					/>,
				);
			} else if (ratingVal >= 50) {
				starsBucket.push(
					<FAIcon
						key={ 'star' + i }
						style={ Style.icon }
						name='star-half-full'
						size={ 10 }
						color={ '#fff' }
					/>,
				);
			} else {
				starsBucket.push(
					<FAIcon
						key={ 'star' + i }
						style={ Style.icon }
						name='star-o'
						size={ 10 }
						color={ '#fff' }
					/>,
				);
			}
			ratingVal -= 100;
		}

		return starsBucket;
	};

	return <View style={ Style.container }>{ renderStars() }</View>;
};

export default Stars;
