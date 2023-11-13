import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class GalleryPicker extends Component {
  state = {
    imageSource: null,
  };

  handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imageSource: source,
        });
      }
    });
  };

  render() {
    return (
      <View>
        <Button title="Pick an image from the gallery" onPress={this.handleImagePicker} />
        {this.state.imageSource && <Image source={this.state.imageSource} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}

export default GalleryPicker;
