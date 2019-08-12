import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from './Styles'

export default VenueItem = (props) => {
    let {venueName, venueImage, venuePress, address} = props
    return(
    <View style={styles.container}>
        <Image
            source={{uri:venueImage}}
            style={styles.venueImage}
            />
        <TouchableOpacity onPress={venuePress}>
            <View style={styles.addressContainer}>
                <Text style={styles.venueName}>{venueName}</Text>
                <Text style={{marginHorizontal:18}}>{address}</Text>
            </View>
        </TouchableOpacity>

    </View>
    )
}
