import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
      flex:1,
      marginHorizontal:10,
      marginBottom:50
    },
  headerText: {
      fontSize:24,
      alignSelf:'center',
      marginTop:22
    },
  image: {
      marginTop:20,
      height: 300,
      width:'100%',
      backgroundColor: 'grey'
    },
  contentContainer: {
      justifyContent:'space-evenly',
      flexDirection:'row',
      marginTop:20,
      marginHorizontal:10
    },
  rightText:{
    flex:1,
    paddingHorizontal:10,
    fontSize:20
    },
  leftText:{
    flex:3,
    fontSize:20
    }
})
