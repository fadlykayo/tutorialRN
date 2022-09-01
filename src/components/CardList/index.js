import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CardV2 from '../../components/CardV2';
import Style from './style';

const CardList = ({ listData, contentContainerStyle, title = 'Title Here' }) => {
	return (
		<View style={ [Style.container] }>
			<View style={ Style.header }>
				<Text style={ Style.title }>{ title }</Text>
			</View>
			<FlatList
				data={ listData }
				renderItem={ ({ item }) => <CardV2 data={ item } /> }
				keyExtractor={ item => item.id }
				ItemSeparatorComponent={ () => <View style={ { width: 10 } } /> }
				contentContainerStyle={ [{ marginBottom: 20 }, contentContainerStyle] }
				horizontal
			/>
		</View>
	);
};

export default CardList;
