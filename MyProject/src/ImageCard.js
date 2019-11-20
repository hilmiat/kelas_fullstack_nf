import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

class ImageCard extends React.Component {
  pindah() {
    this.props.navigation.navigate('detail', {id: this.props.id});
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.pindah()}
        style={{
          flex: 1,
          height: 200,
          backgroundColor: 'grey',
          padding: 4,
        }}>
        <Image
          style={{
            flex: 1,
            height: 192,
            resizeMode: 'stretch',
          }}
          source={{
            uri: this.props.foto_url,
          }}
        />
        <View
          style={{flexDirection: 'row', backgroundColor: 'white', padding: 5}}>
          <Image
            style={{width: 20, height: 18, marginRight: 5}}
            source={require('./images/heart.png')}
          />
          <Text>{this.props.likes}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImageCard;
