import React, {Component} from "react";
import {browserHistory} from "react-router";

export default class ItemLister extends Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('/auth' + window.location.search)
      .then(result=> {
        this.setState({data: result});
        browserHistory.push('/')
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        </div>
      </div>
    );
  }
}
