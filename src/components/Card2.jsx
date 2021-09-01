import React from 'react'
import './Card.css';

class Card extends React.Component {
  render () {
    const info = this.props.info;
    const branchGroup  =(this.props.branch === 'Habilidades' ? 'Habilidades' : 'normal');
    
    return (
      <div className="card">
        <h2 className="branch"> {this.props.branch} </h2>
        {
          info.map(data => 
            <div key={this.props.branch + data.id} className={branchGroup}>
              <h3 id="name" className={branchGroup + "-name name-s"}> {data.name} 
                <span className="level"> {'⭐️ '.repeat(data.level)} </span>
              </h3>
            </div>
          )
        }
      </div>
    );
  }
}

export default Card;