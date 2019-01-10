import React from 'react'
import {Accounts} from "meteor/accounts-base";
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="title-bar--brand">
          <h1 className="header__title">{props.title}</h1>
        </div>
        <div className="title-bar--actions">
          <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
        </div>
      </div>
    </div>
  )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;