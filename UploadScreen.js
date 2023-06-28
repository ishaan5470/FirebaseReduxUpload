import React, { useState } from "react";
import {View,Text, Alert, TouchableOpacity,Image} from "react-native";
import * as ImagePicker from "expo-image-picker"
import { firebase } from "./config";
const UploadScreen=()=>{
     const [image,setImage]=useState('');
     const [uploadImage,setUploadImage]=useState(false);
  async function pickImage(){
        // no permission request is necessary for launching the image library 
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[1,4],
            quality:1
        });
        const source={uri:result.uri}
        console.log(source);
        setImage(source)  
     }
     async function uploadingImage(){
        setUploadImage(true);
        const response=await fetch(image.uri);
        const blob= await response.blob();
        const fileName=image.uri.substring(image.uri.lastIndexOf("/")+1);
        
      var ref= firebase.storage().ref().child(fileName).put(blob);
       
      
      
        try{
            await ref;
           
        }catch(e){
            console.log(e);

        }
        setUploadImage(false);
        Alert.alert("Image has been uploaded");
        
        setImage(null);


     }

    return(
        <View>
           <TouchableOpacity onPress={pickImage}>
            <Text style={{borderRadius:20,backgroundColor:"green",paddingHorizontal:50,marginBottom:20,paddingVertical:10}}> Pick an image</Text>

           </TouchableOpacity>
           <View>
            {image && <Image source={{uri:image.uri}} style={{width:200,height:200,borderRadius:50}}/>}
           </View>
           <TouchableOpacity onPress={uploadingImage}>
            <Text style={{borderRadius:20,backgroundColor:"pink",paddingHorizontal:50,marginTop:20,paddingVertical:10}}>
                Upload an image
            </Text>

           </TouchableOpacity>
            
        </View>
    )
}
export default UploadScreen;