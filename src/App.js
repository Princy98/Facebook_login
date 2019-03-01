import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      u_name:"",
      f_name:"",
      l_name:""
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.handleClick1=this.handleClick1.bind(this);
  }

  handleChange(event){
    this.setState({
      u_name:event.target.value
    });
  }

  handleClick(){
    alert("Successfully logged in as "+this.state.u_name);
    }

  handleChange1(event){
    this.setState({
      f_name:event.target.value
    });
  }

  handleChange2(event){
    this.setState({
      l_name:event.target.value
    });
  }

  handleClick1(){
    alert("Welcome to Facebook "+ this.state.f_name+" "+ this.state.l_name);
  }

  render() {
    return (
      <div className="App">
        <div id="log">
          <form id="log_in">
            <p className="tip">
              Email or Phone
            </p>
            <p className="tip">
              Password
            </p>
            <br/>
            <input type="text" id="uname" name="user" className="credential" onChange={this.handleChange}/>
            <input type="password" id="pwd" className="credential"/>
            <button type="button" id="subm" onClick={this.handleClick}>
              Log In
            </button>
            <br/>
            <a id="forgot" href="https://www.facebook.com/forgot_accnt">
              forgotten account?
            </a>
          </form>
          <br/>
          <div id="fb">
            <a href="https://www.facebook.com" >
              facebook
            </a>
          </div>
        </div>
        <div id="container">
          <a href="www.facebook.com/android">
            Get Facebook for Android and browse faster
          </a>
          <div id="connect">
            <p>
              Facebook helps you connect and share with the people in your life
            </p>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png" alt="Facebook connect"/>
          </div>
          <form id="signup">
            <h1>
              Create an account
            </h1>
            <p>
              It's free and always will be.
            </p>
            <input type="text" id="f_name" className="name" required placeholder="First name" onChange={this.handleChange1}/>
            <input type="text" id="s_name" className="name" required placeholder="Surname" onChange={this.handleChange2}/><br/><br/>
            <input type="text" id="u_name" className="fields" required placeholder="Mobile number or email address"/><br/><br/>
            <input type="password" id="pwd" className="fields" required placeholder="New password"/><br/>
            <p id="bir">
              Birthday
            </p>
            <div id="date">
              <select>
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
              </select>
              <select>
                <option value="jan">Jan</option><option value="feb">Feb</option><option value="march">March</option><option value="april">April</option><option value="may">May</option><option value="june">June</option><option value="july">July</option><option value="aug">Aug</option><option value="sep">Sep</option><option value="oct">Oct</option><option value="nov">Nov</option><option value="dec">Dec</option>
              </select>
              <select>
                <option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option>
              </select>
            </div>
            <a href="https://www.facebook.com">
              why do I have to provide my date of birth?
            </a><br/><br/>
            <input class="fon" type="radio" name="gender" value="Female"/>Female
            <input class="fon" type="radio" name="gender" value="Male"/>Male
            <p id="policy">
              By clicking Sign Up you agree to our <a href="https://www.facebook.com/policies">Terms Data Policy and Cookie Policy</a>.You may recieve SMS notifications from us and can opt out at any time</p><br/>
            <button type="submit" onClick={this.handleClick1} onSubmit="signup()" id="sign">Sign Up</button>
          </form>
        </div>
        
      </div>
    );
  }
}

export default App;
