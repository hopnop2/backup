import { StatusBar } from 'expo-status-bar';
import {  Text, View, TextInput, Image, TouchableOpacity   } from 'react-native';
import Login from './Login';

export default function App() {
  return (
    <View style={Login.container}>
      <View  style={Login.spacing} /> 
    
      <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png' }}  style = {Login.logo} />
      <TextInput style = {Login.input  }  placeholder='Username'    /> 
      <TextInput style = {Login.input  }  placeholder='Password' secureTextEntry  /> 
      <TouchableOpacity style = {Login.botton} >  
      
      <Text style= {Login.bottonText} > Login </Text>
    

      </TouchableOpacity>


     <StatusBar style="auto" />
  
    </View>
  );
}




