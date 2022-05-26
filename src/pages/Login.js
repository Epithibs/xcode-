import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, SafeAreaView } from 'react-native';
import {TouchableOpacity} from 'react-native';
import Play  from '../../assets/fonts/Play-Regular.ttf';

const Login = () => {
    return (
        <ImageBackground
        source={require('../../assets/imgs/background.jpg')}
        style={styles.background}
      >
            <Text style={styles.title}>Connectez-Vous</Text>

        <View style={styles.blockInput}>
        <TextInput
        style={styles.input}
            placeholder='Email'
            name='email'
            errorStyle={{ color: 'red' }}
            errorMessage='Enter a valid email !'
        />
        
        <TextInput
        style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            name='password'
            errorStyle={{ color: 'red' }}
            errorMessage='Enter a valid password !'
        />
        </View>
        <TouchableOpacity>
        <Text style={styles.signup}>Valider</Text>
        </TouchableOpacity>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    signup: {
        backgroundColor: "#8BC34A",
        width: "30%",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '35%',
        padding: "2%",
        fontSize:  20,
        marginTop: '10%',
        shadowColor: 'black',
      },
    input: {
        
        height: 60,
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
        borderWidth: 2,
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
      },
      blockInput: {
          marginTop: "20%"
      },
      title: {
          textAlign: "center",
          fontSize: 40,
          marginTop: "20%",
          fontFamily: "Play",
      },
});

export default Login;