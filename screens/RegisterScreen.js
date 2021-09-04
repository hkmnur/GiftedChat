import React, { useState } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { Input,Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen =({navigation}) =>{
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[imageURL,setImageUrl]=useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                displayName: name,
                photoURL: imageURL ? imageURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }).then(() => {
                // Update successful
                // ...
                }).catch((error) => {
                // An error occurred
                // ...
               });  
                // ...
                navigation.popToTop();
            })
            .catch((error) => {
               
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{type:'material',name:'badge'}}
                value={name}
                onChangeText={text=> setName(text)}
            />
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{type:'material',name:'email'}}
                value={email}
                onChangeText={text=> setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                leftIcon={{type:'material',name:'lock'}}
                value={password}
                onChangeText={text=> setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder="Enter your image Url"
                label="Profile Picture"
                leftIcon={{type:'material',name:'face'}}
                value={imageURL}
                onChangeText={text=> setImageUrl(text)}
            />
            <Button title="Register" onPress={register} style={styles.button}/>
        </View>
      );
}
  
  

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding: 10,
    },
    button: {
        width:200,
        marginTop:10
    },

})

export default RegisterScreen;