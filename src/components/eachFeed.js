import React from 'react';
import {View , Text, Image, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window');

class EachFeed extends React.Component {
	render(){
		const { container, content, header, imageStyle } = styles;
		const { name, description, image } = this.props.feed;
		return(
			<View style={container}>
				
				<View style={content}>
					<View style={header}>
						{ image ? <Image source={{uri: image}} style={imageStyle} />
							:<Image source={{uri:'https://i.stack.imgur.com/WmvM0.png'}} style={imageStyle} />}
						
						 <View>
						 	<Text>{name}</Text>
						 	<Text style={{fontSize: 11, color: '#ddd'}}> 12 sep 2017 </Text>
						 </View>
					</View>

					{ description ? ( <Text>{description}</Text> ) : <Text> No Content available </Text>}
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		width: width,
		backgroundColor: "transparent",
		padding: 15,
	},
	content: {
		flex: 1,
	},
	header: {
		flexDirection: 'row'
	},
	imageStyle:{
		width: 50,
		height: 50,
		borderRadius: 25,
		paddingRight: 15,
		paddingBottom: 15
	}
}

export default EachFeed;