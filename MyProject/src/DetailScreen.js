import React from 'react';
import {Text} from 'react-native';
import axios from 'react-native-axios';

class DetailScreen extends React.Component {
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
    return <Text>Halaman Detail..</Text>;
  }
}

export default DetailScreen;
