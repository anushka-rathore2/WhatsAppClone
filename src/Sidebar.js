import React from 'react'
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Sidebar.css'

function Sidebar()
{
    return(
        <div className="sidebar">
            <div className="sidebar__header">
              < Avatar />
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
                <SidebarChat />
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
            </div>


        </div>
    )
}

export default Sidebar;