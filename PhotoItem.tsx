import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, Text, Image, Dimensions, View} from 'react-native';

interface PhotoItemProps {
    thumbnailUrl: string;
    url: string;
    title: string;
}

interface PhotoItemState {
    isFirstImageLoading: boolean;
    isSecondImageLoading: boolean;
}

export class PhotoItem extends Component<PhotoItemProps, PhotoItemState> {

    public state = {
        isFirstImageLoading: true,
        isSecondImageLoading: true
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.url !== this.props.url) {
            this.setState({
                isFirstImageLoading: true,
                isSecondImageLoading: true
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>

                <View style={styles.imageContainer}>
                <Image
                style={styles.thumbnailImage}
                source={{uri: this.props.thumbnailUrl}}
                onLoadEnd={() => {
                    this.setState({isFirstImageLoading: false})
                }}/>

                <Image
                style={styles.image}
                source={{uri: this.props.url}}
                onLoadEnd={() => {
                    this.setState({isSecondImageLoading: false})
                }}/>
                </View>

                {this.state.isFirstImageLoading && this.state.isSecondImageLoading && <ActivityIndicator size="large" color="#0000ff" style={{width: '100%', height: '100%', position: 'absolute'}}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10
    },
    imageContainer: {
        flex: 0.5,
        flexDirection: 'row',
    },

    thumbnailImage: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginStart: 16
    },

    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginStart: 8
    },

    title: {
        fontSize: 36,
        textAlign: 'center',
        flex: 1
    }
});
