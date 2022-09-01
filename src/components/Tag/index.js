import React from 'react';
import { Text } from 'react-native';

import Style from './style';

const Tag = ({ tag }) => {
	return <Text style={ Style.tag }>{ tag || 'Fantasy' }</Text>;
};

export default Tag;
