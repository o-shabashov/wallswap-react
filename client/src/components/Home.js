import React from "react";
var $ = require('jquery');

var MainComponent = React.createClass({
  getInitialState  : function () {
    return {data: []};
  },
  componentDidMount: function () {
    // TODO replace by fetch
    $.ajax({
      type    : 'get',
      url     : '/api/wallpapers',
      dataType: 'json',
      success : function (data) {
        this.setState({data: data});
      }.bind(this)

    });
  },
  render           : function () {
    return (
      <div className="row">
        <div className="col-md-12">
          {
            this.state.data.length > 0 && this.state.data.map((wallpaper, idx) => (
              <li className="item" key={idx}>
                <div className="item-img-wrap img-hover">
                  <a href={ wallpaper.url } target="_blank">
                    <img className="img-responsive" src={wallpaper.thumb_url} alt=""/>
                  </a>
                </div>
              </li>
            ))
          }
        </div>
      </div>

    );
  }
});

export default MainComponent;
