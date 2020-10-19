import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__header-left">
                    <Avatar src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/how_to_figure_dogs_age_video/1800x1200_how_to_figure_dogs_age_video.jpg?resize=750px:*'/>
                </div>
                <div className="sidebar__header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__search-container">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat/>
            </div>
        </div>
    );
}

export default Sidebar
