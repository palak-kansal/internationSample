import React, { Component } from 'react'
import {
  FlatList, Text, TouchableOpacity, View, Image
} from 'react-native'
import data from '../venue-reviews.json';
import ReviewItem from './ReviewItem'

export default class VenueReview extends Component {
  
  constructor(props) {
    super(props)
  }

  reviewList(){
    return(
      <FlatList
      data={data.reviews}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ReviewItem
            text={item.text}
            userImage={item.user.image_url}
            userName={item.user.name}
            createdAt={item.time_created}
        />
      )}
    />
    )
  }

  render() {
    return this.reviewList()
  }

}



