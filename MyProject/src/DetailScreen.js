import React from 'react';
import {Text, View, Image} from 'react-native';
import axios from 'react-native-axios';
import Icon from './Icon';
class DetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: {backgroundColor: '#220948'},
      headerTintColor: '#FFFFFF',
      title: 'Detail Photo',
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      item: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    const navigation = this.props.navigation;
    const id = navigation.getParam('id', 0);
    if (id != 0) {
      //jika ada id get data
      axios
        .get(
          `https://api.unsplash.com/photos/${id}?client_id=e8b50a7a5932ab5b3e55c20555ef94ab690600baabfaa8ccb14e98b944730af8`,
        )
        .then(res => {
          console.log(res);
          this.setState({
            isLoading: false,
            item: res.data,
          });
        })
        .catch(err => {
          this.setState({isLoading: false});
          alert('Gagal membuka gambar');
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Text>sedang memuat gambar...</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <Image
            source={{uri: this.state.item.urls.regular}}
            style={{flex: 1, height: 300, margin: 10, resizeMode: 'stretch'}}
          />
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Image
              style={{height: 30, width: 30}}
              source={{uri: this.state.item.user.profile_image.medium}}
            />
            <Text style={{marginLeft: 10, fontSize: 18}}>
              {this.state.item.user.first_name} {this.state.item.user.last_name}
            </Text>
          </View>
          {this.state.item.descriptio && (
            <Text style={{margin: 10, fontStyle: 'italic', fontSize: 16}}>
              {this.state.item.description}
            </Text>
          )}
          <View
            style={{
              borderWidth: 0.5,
              borderRadius: 5,
              margin: 10,
              marginTop: 0,
              padding: 5,
              flexDirection: 'row',
            }}>
            <Icon name="heart" />
            <Text style={{marginRight: 10}}>{this.state.item.likes}</Text>
            <Icon name="heart" />
            <Text>{this.state.item.downloads}</Text>
          </View>
        </View>
      );
    }
  }
}

export default DetailScreen;
