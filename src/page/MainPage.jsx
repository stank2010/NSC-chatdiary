import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar'
import Profile from '../component/profileCard'
import Textshow from '../component/textShow'
import ListDiary from '../component/listDiary'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <ListDiary></ListDiary>
        {/*
        <Link to="/editDiary"><span className="fas fa-plus"></span>Add</Link>
        <Textshow />
        */}
      </div>
    )
  }
}

export default MainPage