import React, { Component } from "react";
import logo from "../../images/logo.svg";
import logoText from "../../images/logoText.svg";
import { FaAlignRight } from "react-icons/fa";
import {FaTimes} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { EventContext } from "../../context";




import style from "./styles/navbar/Nav.module.css";


export default class Navbar extends Component {
  static contextType = EventContext;
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
 

  scrollToTop =() =>{
    window.scrollTo(0, 0);
  }

 
  render() {
    let { locale,  changeLanguage,resetLanguage } = this.context;
  // console.log(locale);
    return (
      <>
      <nav className={style.navbar}>
        <div className={style.navCenter}>
          <div className={style.navHeader}>
            <NavLink to="/" className={style.logoWrapper}>
              <img src={logo} alt="Student House" className={style.logoSmall}/>
              <img src={logoText} alt="Student House" className={style.logoBig}/>
            </NavLink>
            
          </div>
          <button
              type="button"
              className={style.navBtn}
              onClick={this.handleToggle}
            >
              {this.state.isOpen? <FaTimes className={style.navIconClose}/>:  <FaAlignRight className={style.navIcon} />}
              
              
            </button>
         
          <ul
            className={style.navLinks}
          >
            <li>
              <NavLink exact to="/" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/events" className={style.link} activeClassName={style.navLinkActive}  onClick={this.scrollToTop}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/volunteers" className={style.link} activeClassName={style.navLinkActive}  onClick={this.scrollToTop}>Volunteer</NavLink>
            </li>
            <li>
              <NavLink to="/cafe" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>Café</NavLink>
            </li>
            <li>
              <NavLink to="/facilities" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>Facilities</NavLink>
            </li>
            <li>
              <NavLink to="/booking#book" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>Booking</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={style.link} activeClassName={style.navLinkActive} onClick={this.scrollToTop}>Contact</NavLink>
            </li>

            <ul className={style.languageBtnS} style={{marginLeft:"3em"}}>
              
                <button className={ locale==="da"? style.lgBtnActive: style.lgBtn} onClick={changeLanguage} style={{marginRight:".5em"}}>DK</button>
              
              <div className={ style.languageSpacer}></div>
              
                <button className={ locale==="en-US"? style.lgBtnActive: style.lgBtn} onClick={resetLanguage} style={{marginLeft:".5em"}}>EN</button>
              
            </ul>
          </ul>
        </div>
        
      </nav>
      {/* nav mobile */}
      {this.state.isOpen? 
      
      
      <nav className={style.navMobile }  >
      <ul >                                             
          <li className={style.ulLinksMobile}>
            <NavLink exact to="/" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive} >Home</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/events" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}   activeClassName={style.navLinkActive}  >Events</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/volunteers" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive}  >Volunteer</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/cafe" style={{marginLeft:"1.5em"}} className={style.link}  onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive} >Café</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/facilities" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive}>Facilities</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/booking#book" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive}>Booking</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/about" style={{marginLeft:"1.5em"}} className={style.link} onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive}>About</NavLink>
          </li>
          <li className={style.ulLinksMobile}>
            <NavLink to="/contact" style={{marginLeft:"1.5em"}} className={style.link}  onClick={()=>{this.handleToggle(); this.scrollToTop() }}  activeClassName={style.navLinkActive}>Contact</NavLink>
          </li>

          
        </ul>
        <ul className={style.languageBtnS} style={{marginLeft:"2.2em"}}>
           
              <button className={ locale==="da"? style.lgBtnActive: style.lgBtn}  onClick={changeLanguage} style={{marginRight:".5em"}}>DK</button>
           
            <div className={ style.languageSpacer}></div>
           
              <button  className={ locale==="en-US"? style.lgBtnActive: style.lgBtn} onClick={resetLanguage} style={{marginLeft:".5em"}}>EN</button>
            
          </ul>
    </nav>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      :  null }
      </>
    );
  }
}
