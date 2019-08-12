import React from 'react'
import { Text, View, Image } from 'react-native'
import moment from 'moment'
import { styles } from './Styles'

export default ReviewItem = (props) => {
    let {text, userImage, userName, createdAt} = props
    const formattedDate = moment(createdAt).format('YYYY-MM-DD hh:mm a')

    return(
    <View style={styles.container}>
        <Text style={{fontSize:18}}>{text}</Text>
        <View style={styles.date}>
        <Text style={{fontSize:12}}>{formattedDate}</Text>

        <View style={styles.imageContainer}>
            <Image
                source={{uri:userImage}}
                style={styles.image}
                />
            <Text style={{fontSize:12, paddingHorizontal:10}}>{userName}</Text>
        </View>
        </View>
    </View>
    )
}
