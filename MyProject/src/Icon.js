import React from 'react';
import {Image} from 'react-native';
const images = {
  heart: require(`./images/heart.png`),
  //...
};
class Icon extends React.Component {
  render() {
    return (
      <Image
        style={{width: 20, height: 18, marginRight: 5}}
        source={images[this.props.name]}
      />
    );
  }
}

export default Icon;
//<Icon name='heart'/>
