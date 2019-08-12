import React, { Component } from 'react'
import {
  FlatList, Text, TouchableOpacity, View, Image
} from 'react-native'
import data from '../venue-search.json';
import VenueItem from './VenueItem';
import { connect } from 'react-redux'

class Venue extends Component {
  
  constructor(props) {
    super(props)
  }

  updateStore(item) {
    if (item && item.name) {
      this.props.setVenueName(item.name)
    }
    if(item && item.coordinates && item.coordinates.latitude){
      this.props.setLatitude(item.coordinates.latitude)
    }
    if(item && item.coordinates && item.coordinates.longitude){
      this.props.setLongitude(item.coordinates.longitude)
    }
    if(item && item.display_phone){
      this.props.setPhone(item.display_phone)
    }
    if(item && item.location && item.location.display_address){
      this.props.setAddress(item.location.display_address)
    }
    if(item && item.image_url){
      this.props.setImageUrl(item.image_url)
    }
    if(item && item.url){
      this.props.setUrl(item.url)
    }
    if(item && item.rating){
      this.props.setRating(item.rating)
    }
    if(item && item.review_count){
      this.props.setReview(item.review_count)
    }
    console.log("item:", this.props)

  }

  navigateToVenueDetailScreen = (item) => {
    this.updateStore(item)
    this.props.navigation.navigate('VenueDetails')
  }

  venueList(){
    return(
      <FlatList
      data={data.businesses}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <VenueItem
          venuePress={()=>this.navigateToVenueDetailScreen(item)}
          venueName={item.name}
          venueImage={item.image_url}
          address={item.location.display_address}
        />
      )}
    />
    )
  }

  render() {
    return this.venueList()
  }

}

function mapDispatchToProps(dispatch) {
  return {
    setVenueName: venueName => dispatch({ type: 'SET_VENUE_NAME', payload: venueName }),
    setLatitude: latitude => dispatch({ type: 'SET_LATITUDE', payload: latitude }),
    setLongitude: longitude => dispatch({ type: 'SET_LONGITUDE', payload: longitude }),
    setPhone: phone => dispatch({ type: 'SET_PHONE', payload: phone }),
    setAddress: address => dispatch({ type: 'SET_ADDRESS', payload: address }),
    setImageUrl: imageUrl => dispatch({ type: 'SET_IMAGE_URL', payload: imageUrl }),
    setUrl: url => dispatch({ type: 'SET_URL', payload: url }),
    setRating: rating => dispatch({ type: 'SET_RATING', payload: rating }),
    setReview: review => dispatch({ type: 'SET_REVIEW', payload: review }),
    clear: () => dispatch({ type: 'CLEAR_VENUE_DETAILS' }),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Venue)