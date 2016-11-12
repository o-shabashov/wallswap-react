import React, {Component} from "react";
import {Link} from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        <section id='navigation'>
          <nav id='w1' className='navbar navbar-inverse'>
            <div className='container'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#w1-collapse'><span
                  className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span></button>
                <Link to='/' className='navbar-brand'>Wallswap</Link></div>
              <div id='w1-collapse' className='collapse navbar-collapse'></div>
            </div>
          </nav>
        </section>

        <div className='center'>
          <a href='https://dropbox.com/oauth2/authorize?client_id=wuig9hcym6qzfei&response_type=code&redirect_uri=http://localhost:3000/oauth2callback'>
            <img src='/images/wallswap-02.png' alt='' width='250'/>
          </a>
        </div>

        {this.props.children}
      </div>
    )
  }
}
