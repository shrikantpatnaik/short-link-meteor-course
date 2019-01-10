import React from 'react'
import {Session} from "meteor/session";

export default class LinksListFilters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showHidden: false
    }
  }

  componentDidMount() {
    this.showVisibleTracker = Tracker.autorun(() => {
      this.setState({
        showHidden: Session.get('showHidden')
      })
    })
  }

  componentWillUnmount() {
    this.showVisibleTracker.stop();
  }

  render() {
    return (
      <div>
        <label className="checkbox">
          <input
            type="checkbox"
            className="checkbox__box"
            onChange={(e) => {
              // noinspection JSCheckFunctionSignatures
              Session.set('showHidden', e.target.checked);
            }}
            checked={this.state.showHidden}
          />
          Show Hidden
        </label>
      </div>
    )
  }
}