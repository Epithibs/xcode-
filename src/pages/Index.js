import { StyleSheet, Text, View, ImageBackground, Input } from 'react-native';
import { Image } from 'react-native';
import {TouchableOpacity} from 'react-native';
import React from 'react';

const Index = (props) => {
  return(
   <ImageBackground
        source={require('../../assets/imgs/background.jpg')}
        style={styles.background}
      >
             <View>
          <Image
            source={require('../../assets/imgs/ghost.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
        <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
            <Text style={styles.signin}>Connection</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.signup}>Inscription</Text>
        </TouchableOpacity>
        </View>

      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  logo:{
    width: 180,
    height: 180,
    marginLeft: '28%',
    marginTop: '25%',
  },
  signup: {
    backgroundColor: '#84F500',
    color: 'black',
    width: "65%",
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '18%',
    padding: "2%",
    fontSize:  33,
    marginTop: '10%',
    shadowColor: 'black',
  },
  signin: {
    backgroundColor: '#84F500',
    color: 'black',
    width: "65%",
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '18%',
    padding: "2%",
    fontSize:  33,
    marginTop: '35%',
    shadowColor: 'black',
  }
});
export default Index;