import React, {useState,useEffect} from 'react'
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import './Sidebar.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import 'firebase/compat/firestore';
import './reducer';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";


function Sidebar()
{
    const[rooms, setRooms]=useState([]);
    const[{ user },dispatch]=useStateValue();
    const auth = getAuth();
    const user1 = auth.currentUser;


    useEffect(()=>{
        const unsubscribe=db.collection('rooms').onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ));
        return()=>{
            unsubscribe();
        }
    },[]);
    return(
        <div className="sidebar">
            <div className="sidebar__header">
              < Avatar src={user1.photoURL}/>
              <div className="sidebar_headerRight">
                  <IconButton>
                      < DonutLargeIcon />
                  </IconButton>
                  <IconButton>
                      < ChatIcon />
                  </IconButton>
                  <IconButton>
                      < MoreVertIcon />
                  </IconButton>                
               </div>              
            </div>
            <div className="sidebar__search">
                <div className="sidebar_searchContainer">
                <SearchOutlinedIcon />
                <input placeholder="Search or Start a new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                    
                ))}
            </div>


        </div>
    )
}

export default Sidebar;