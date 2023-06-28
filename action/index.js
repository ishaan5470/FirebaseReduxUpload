import { auth,provider }  from "../firebase"
import { setUser } from "./actionType";
import firebase from 'firebase';
import {storage} from  "../firebase";

export function postArticleAPI(payload){
    return (dispatch)=>{
        //if payload.image is not blank means we have a image


        //this will help us to upload our image          
        if (payload.image != ' '){
            const upload=storage
            .ref(`images/${payload.image.name}`)
            .put(payload.image);
            upload.on('state_changed',snapshot=>{
                //this will help in the loading bar ot  percentage of progress of an image upload to Firebase storage
                const progress=
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                    console.log(`Progress for image:${progress}%`)
                    //if the loading bar is in running state 
                    if (snapshot.state==="RUNNING"){
                        console.log(`Progress for image: ${progress}%`);
                    }

                
                }, (error)=>console.log(error.message, "error error"),
                //Async ensures that the function returns a promise and wraps non-promises in it. There is another word Await, that works only inside the async function.

                async()=>{
                    const downloadURL= await upload.snapshot.ref.getDownloadURL();
                    //you can get the donwload url of the file 

                    // now to the article collection we are gonna add the actor where again has description title and date and image

                   db.collection("firebase articles").add({
                        actor :
                        {
                            description: payload.user.email,
                            title:payload.user.title,
                            image: payload.user.photoURL,
                            date:payload.timestamp,
                        },
                        video:payload.video,
                        sharedImg:downloadURL,
                        comment:0,
                        description:payload.description,
                    })
                }
            );
        };
    }
}
