import React from 'react';
import ImageCard from './ImageCard';
import {FlatList, ActivityIndicator} from 'react-native';
import axios from 'react-native-axios';

// const dataImages = [
//     {url:'https://images.unsplash.com/photo-1574102389865-2ebdd33d5b6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM2NDY2fQ'},
//     {url:'https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM2NDY2fQ'},
//     {url:'https://images.unsplash.com/photo-1574090062401-8e15b1775220?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM2NDY2fQ'},
//     {url:'https://images.unsplash.com/flagged/photo-1573979684200-ff38a1c6a55a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM2NDY2fQ'},
//     {url:'https://images.unsplash.com/flagged/photo-1573979684200-ff38a1c6a55a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM2NDY2fQ'},
// ]

class ListImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataImages: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    //fetch data
    axios
      .get(
        'https://api.unsplash.com/photos/?client_id=e8b50a7a5932ab5b3e55c20555ef94ab690600baabfaa8ccb14e98b944730af8',
      )
      .then(res => {
        console.log('Suksess....get data');
        console.log(res);
        this.setState({isLoading: false, dataImages: res.data});
      })
      .catch(err => {
        console.log('Errorrrr==>', err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#4c4c4c" />;
    } else {
      return (
        <FlatList
          data={this.state.dataImages}
          renderItem={({item}) => (
            <ImageCard
              foto_url={item.urls.small}
              likes={item.likes}
              id={item.id}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      );
    }
  }
}

export default ListImage;
