import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;


  return (
      
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid = 'transparent'
        />
   
    
  );
};

const styles = {
  inputStyle: {
      color: '#000',
      fontSize: 14,
      height: 40,
      width: 300,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#ECF0F3',
      paddingHorizontal: 15,
      marginVertical: 10
  },
 
};



export { Input };
