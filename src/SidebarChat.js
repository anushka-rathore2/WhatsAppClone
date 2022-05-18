import React from 'react'
import { connect } from 'react-redux'
import './SidebarChat.css';

export const SidebarChat = (props) => {
  return (
    <div className='sidebarChat'>
        <h1>Hey</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarChat)