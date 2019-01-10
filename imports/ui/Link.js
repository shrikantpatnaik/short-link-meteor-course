import React from 'react'
import {Meteor} from "meteor/meteor";

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from "./LinksListFilters";

export default class Link extends React.Component {
  componentDidMount() {
    if (!Meteor.userId()) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Your Links"/>
        <div className="page-content">
          <LinksListFilters/>
          <AddLink/>
          <LinksList/>
        </div>
      </div>
    )
  }
}