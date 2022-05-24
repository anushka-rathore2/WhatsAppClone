import React, {useState,useEffect} from 'react'
import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFile  from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import db from './firebase';
import { useParams } from "react-router-dom";
//import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


function Chat() {
    const [input, setInput]=useState("");
    const [seed, setSeed]=useState("");
    const { roomId } = useParams();
    const[roomName, setRoomName]=useState("");

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot)=>
                setRoomName(snapshot.data().name));
        }
    },[roomId]);

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[roomId]);

    const sendMessage = (e) =>{ 
        e.preventDefault();
        console.log("you typed>>>",input);

        setInput("");
       };
      return (
    <div className="chat">
       <div className='chat__header'>
           <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
           <div className='chat__headerInfo'>
               <h3>{roomName}</h3>
               <p>Last Seen at...</p>
           </div>
           <div className='chat__headerRight'>
                  <IconButton>
                      < SearchOutlinedIcon />
                  </IconButton>
                  <IconButton>
                      < AttachFile />
                  </IconButton>
                  <IconButton>
                      < MoreVertIcon />
                  </IconButton> 
           </div>
       </div>
       <div className='chat__body'>
           <p className={`chat__message ${true && 'chat__reciever'}`}>
              <span className='chat__name'>Anushka Rath</span>
               Hey Guys
               <span className='chat__timestamp'>3:52pm</span>
           </p>          
       </div>
       <div className='chat__footer'>
           <InsertEmoticonIcon />
           <form>
               <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type a message' type="text" />
               <button onClick={sendMessage} type="submit">Send a message</button>
           </form>
           <MicIcon />
       </div>
    </div>
  );
}

export default Chat