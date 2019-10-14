import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Result.scss';

class Result extends React.Component {
  render() {
    const { 
      className, 
      children, 
      name, 
      desc, 
      amount, 
      org,
      url,
      favorited,
      deadline,
      ...other 
    } = this.props;

    const componentClassName = classnames('c-result', className, {});

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    return (
      <div className={componentClassName} {...other}>
        {favorited &&
          <div className="favorite">
            <svg width="20" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M19 2a1 1 0 00-1-1H2a1 1 0 00-1 1v23l9-5.821L19 25V2z" fill="#505050" fill-rule="nonzero" stroke="#505050"/></svg>
          </div>
        }
        
        <h1 className="c-title">{name}</h1>
        <span className="c-org">{org}</span>
        <p className="c-amount">{formatter.format(amount)}</p>
        <p>Deadline: {deadline}</p>
        <p className="desc">{desc}</p>
        <a className="c-link" href={url}>Apply Now</a>
      </div>
    );
  }
}

Result.propTypes = {
  /**
     * Child node(s) that can be nested inside component
     */
  children: PropTypes.node,
  /**
     * CSS class names that can be appended to the component.
     */
  className: PropTypes.string
};

export default Result;
