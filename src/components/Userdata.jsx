import React from 'react';
import data from '../data/estudios.json';
import './Userdata.css';

class Userdata extends React.Component {

  constructor () {
    super();
    this.state = {
      oscure: false
    }
  }

  changeMode = () => {
    const btn =  document.getElementById('mode');

    if (this.state.oscure) {
      btn.style.border = '.1rem solid goldenrod';
      btn.style.backgroundColor = '#fffadc';
      localStorage.setItem('mode', 'oscure');
    } else {
      btn.style.border = '.1rem solid navy';
      btn.style.backgroundColor = '#eff7ff';
      localStorage.setItem('mode', 'light');
    }

    this.setState({oscure: !this.state.oscure});
  }

  render () {
    const personalInfo = data.info;

    return (
      <div id="userInfo">
        <img src={personalInfo.img} alt="" id="img" />
        <p id="Username"> {personalInfo.name} </p>
        <p id="city"> {personalInfo.city} </p>
        <p>
          {
            personalInfo.social.map((e, idx) => 
              <a href={e[1]} target="_blank" rel="noreferrer" className="link" key={idx}>
                <i className={e[0]} aria-hidden="true"></i>
              </a>
            )
          }
        </p>
        <input type="button" id="mode" value={this.state.oscure ? "🌙" : "☀️"} onClick={this.changeMode} />
      </div>
    );
  }
}


export default Userdata;
