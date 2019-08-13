import React, { Component } from 'react'
import {
  Button, View, Text, Image, Platform, Linking, TouchableOpacity, ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import CalendarModule from '../CalendarEvents/CalendarModule'
import moment from 'moment'
import { styles } from './Styles'

class VenueDetails extends Component {
  
  constructor(props) {
    super(props)
  }

  navigateToMap(lat, long, label){
    console.log("this.props:", this.props)
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    })
    const latLng = `${lat},${long}`
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${label}`,
    })

    Linking.openURL(url)
  }
  
  navigateToReviewScreen(){
    this.props.navigation.navigate('VenueReview')
  }

  addEvent = () => {
    CalendarModule.addEvent(this.props.venueName, this.props.address, moment().toISOString());
  }

  render() {
    const {venueName, imageUrl, address, phone, url, rating, review} = this.props
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.headerText}>
              {venueName}
            </Text>
            <Image
            source={{uri:imageUrl}}
            style={styles.image}
            />
            <View style={styles.contentContainer}>
              <Text style={styles.rightText}>Address:  </Text>
              <Text style={styles.leftText}>{address}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.rightText}>Phone:  </Text>
              <Text style={styles.leftText}>{phone}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.rightText}>More about us:  </Text>
              <TouchableOpacity style={{flex:3}} onPress={()=>Linking.openURL(this.props.url)}>
                <Text style={styles.leftText}>{url}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.rightText}>Rating:  </Text>
              <Text style={styles.leftText}>{rating}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.rightText}>Review:  </Text>
              <TouchableOpacity style={{flex:3}} onPress={()=>this.navigateToReviewScreen()}>
                <Text style={styles.leftText}>{review}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop:10}} onPress={()=>this.navigateToMap(this.props.latitude, this.props.longitude, this.props.address)}>
              <Text style={{fontSize:16, color:'blue'}}>View on map</Text>
            </TouchableOpacity>
            <Button style={{padding:20}} title="schedule a visit" onPress={this.addEvent}/>
        </View>
        </ScrollView>
    )
  }

}

function mapStateToProps(state) {
  return {
    venueName: state.VenueDetailReducer.venueName,
    latitude: state.VenueDetailReducer.latitude,
    longitude: state.VenueDetailReducer.longitude,
    phone: state.VenueDetailReducer.phone,
    address: state.VenueDetailReducer.address,
    imageUrl: state.VenueDetailReducer.imageUrl,
    url: state.VenueDetailReducer.url,
    rating: state.VenueDetailReducer.rating,
    review: state.VenueDetailReducer.review,
  }
}

export default connect(
  mapStateToProps,
  null,
)(VenueDetails)
