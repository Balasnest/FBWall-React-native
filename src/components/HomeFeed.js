import React, { Component } from 'react';
import { View, Text, Image, FlatList, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Input, Button } from './common';
import { buttonSize } from '../config/styles';
import EachFeed from './eachFeed';
import Feeds from '../API/FeedsMock';



class HomeFeed extends Component {

	constructor(props){
		super(props);
		this.state = {
			feeds:  Feeds.Feeds.data,
			content: ''
		}
	}

	onChangeText = (text) => {
		this.setState({
			content: text
		})
	}

	onPressNewPost = () => {
		const newFeed = {
			name: 'Mike',
			description: this.state.content,
			image: 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'
		}

		this.props.addNewPost(newFeed);
	}

	renderItem = ({item}) => {
		console.log(item)
		return(
			<EachFeed feed={item} />
		);
	}

	// Row Flat List
	 renderSeparator = () => {
	    return (
	      <View
	        style={{
	          height: 1,
	          width: "100%",
	          backgroundColor: "#CED0CE",
	          marginLeft: "0%"
	        }}
	      />
	    );
    };


	render(){
		const {container, topHeader} = style;
		return(
			<View style={container}>
				<View style={topHeader}>
					<Input
						placeholder="write a new post"
						value={this.state.content}
          				onChangeText={onChangeText}
					/>
					<Button onPress={this.onPressNewPost} style={buttonSize}>
						<Text> Post </Text>
					</Button>
				</View>
				
				<FlatList 
						data={this.state.feeds}
				        keyExtractor={(item, index) => item.name}
				        renderItem={this.renderItem}
				        ItemSeparatorComponent={this.renderSeparator}
					/>
			</View>
		)
	}
}

const style = {
	container: {
		paddingTop: Platform.OS === 'ios' ? 20 : Expo.Constants.statusBarHeight

	},
	topHeader:{
		height: 60,
		backgroundColor: "#ccc",
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center'
	}
}

const mapStateToProps = ({newsFeed}) => {
	const { feeds } = newsFeed;
	return { feeds};
}
export default connect(mapStateToProps,actions)(HomeFeed);