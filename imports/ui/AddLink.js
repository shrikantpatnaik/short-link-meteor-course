import React from 'react'
import {Meteor} from "meteor/meteor";
import Modal from 'react-modal';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      url: '',
      isOpen: false
    }
  }

  handleSubmit(e) {
    const url = this.state.url;
    e.preventDefault();

    Meteor.call('links.insert', url, (err) => {
      if (err) {
        this.setState({
          error: err.reason
        })
      } else {
        this.handleModalClose()
      }
    });
  }

  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    })
  }

  handleModalClose() {
    this.setState({
      isOpen: false,
      url: '',
      error: ''
    });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.setState({isOpen: true})}>Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
          ariaHideApp={false}>
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <form className="boxed-view__form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              value={this.state.url}
              type="text"
              ref="url"
              placeholder="URL"
              onChange={this.onChange.bind(this)}/>
            <button className="button">Add Link</button>
            <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
          </form>
        </Modal>
      </div>
    )
  }
}