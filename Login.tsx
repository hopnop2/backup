import { StyleSheet } from 'react-native';

const Login = StyleSheet.create({
container: {
    flex : 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
spacing: { 
    height : 55, 
},
logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
},
title : {
    fontSize: 20 ,
    fontWeight: 'bold',
    marginBottom: 20 ,
    
},
input: {
    width : 250,
    height: 40 ,
    borderWidth : 1,
    borderColor: "grey",
    marginBottom: 10,
    paddingHorizontal: 10 ,
},
botton: { 
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10, 


},
bottonText: {
    color : "white",
    fontSize: 16,
    fontWeight: 'bold',
}


});

export default Login;
