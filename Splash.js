import React from 'react'
import { StyleSheet,ActivityIndicator ,ImageBackground,Text, View } from 'react-native'

const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/loading.png')} style={styles.image}>
                  <View style={styles.innnerContainer}>
                    <ActivityIndicator size="large"  color="#0000ff"></ActivityIndicator>
                    <Text>Loading...</Text>
                    </View>
            </ImageBackground>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width:"100%",
        height:"100%",
        justifyContent:"center",
              },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
   
        innnerContainer:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            }
})
