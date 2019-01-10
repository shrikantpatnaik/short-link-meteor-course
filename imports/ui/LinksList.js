import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Links} from '../api/links';
import LinksListItem from "./LinksListItem";
import {Session} from 'meteor/session';
import FlipMove from "react-flip-move";

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      let links = Links.find({
        visible: !Session.get('showHidden')
      }).fetch();
      this.setState({links});
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    if (this.state.links.length > 0) {
      return this.state.links.map((link) => {
        return <LinksListItem key={link._id} shortUrl={Meteor.absoluteUrl(link._id)} {...link}/>
      })
    } else {
      return (
        <div className="item">
          <p className="item__status-message">No Links found</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    )
  }
}