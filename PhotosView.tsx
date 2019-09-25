import React, { Component } from 'react';

import { SafeAreaView, StyleSheet, Button, View, FlatList } from 'react-native';
import { PhotoItem } from './PhotoItem';
import {ImageItem} from "./ImageItem";
import {connect} from 'react-redux'
import {GeneralState} from "./Redux/Configurations";
import {getImages} from "./Redux/ImagesActionsCreator";

interface PhotoViewProps {
  dataSource: ImageItem[]
  getImages: (fromIndex: number, toIndex: number) => void
  currentIndex: number
}

interface PhotoViewState {
  fromImageIndex: number
}

class PhotoView extends Component<PhotoViewProps, PhotoViewState> {

  private numberOfImageToFetch = 10;

  constructor(props: PhotoViewProps) {
    super(props);

    props.getImages(0,this.numberOfImageToFetch);
  }

  renderItem = ({ item }) => {
    return (<PhotoItem thumbnailUrl={item.thumbnailUrl} title={item.title} url={item.url} />)
  };

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
              keyExtractor={(item) => item.thumbnailUrl}
              style={styles.flatList}
              data={this.props.dataSource}
              renderItem={this.renderItem}
          />

          <View style={styles.buttonsContainer}>
            <Button disabled={this.props.currentIndex - this.numberOfImageToFetch === 0} title={'prev'} style={styles.prevButton} onPress={() => this.props.getImages(this.props.currentIndex, -this.numberOfImageToFetch)}/>
            <Button disabled={this.props.dataSource.length < this.numberOfImageToFetch} title={'next'} style={styles.nextButton} onPress={() => {
              this.props.getImages(this.props.currentIndex,this.numberOfImageToFetch);
            }}/>
          </View>

        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  flatList: {
    marginVertical: 0,
    marginHorizontal: 20
  },
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 0,
    marginVertical: 20,
  },

  prevButton: {
    flex: 0.5
  },

  nextButton: {
    flex: 0.5
  }
});

const mapStateToProps = (state: GeneralState) => {
  return {
    dataSource: state.imagesReducer.imagesToDisplay,
    currentIndex: state.imagesReducer.currentIndex
  }
};

export default connect(mapStateToProps, { getImages })(PhotoView)
