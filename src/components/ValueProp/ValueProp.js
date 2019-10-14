import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ValueProp.scss';

const base = [
  {
    name: 'St. Paul Scholarship for College Students – Spring Application',
    org: 'Organization, Inc.',
    amount: 100.00,
    url: 'https://google.com',
    desc: 'The National Society of High School Scholars Foundation (NSHSS) offers scholarships to students planning to major in science, technology, engineering, or mathematics. Graduating high school seniors who plan to major in a STEM related field are welcome to apply.',
    deadline: 'October 10, 2019',
    favorited: true,
  },
  {
    name: 'Community Foundation of Texas Hill Country Scholarship Programs',
    org: 'Organization, Inc.',
    amount: 500.00,
    url: 'https://google.com',
    desc: 'The Regeneron Science Talent Search is the nation\'s oldest and most prestigious science and math competition for high school seniors. Each year, students submit original research in critically important scientific fields of study. The research report is evidence of research ability, scientific originality, and creative thinking.',
    is_saved: true,
    deadline: 'August 20, 2019',
  },
  {
    name: 'Scholarship for America',
    org: 'Scholarship for America, Inc.',
    amount: 4000.00,
    url: 'https://google.com',
    desc: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    name: 'National Society of High School Scholars Foundation STEM Scholarships',
    org: 'Organization, Inc.',
    amount: 13000.00,
    url: 'https://google.com',
    desc: 'The Regeneron Science Talent Search is the nation\'s oldest and most prestigious science and math competition for high school seniors. Each year, students submit original research in critically important scientific fields of study. The research report is evidence of research ability, scientific originality, and creative thinking.',
    deadline: 'November 06, 2020'
  }
]

class ValueProp extends React.Component {
  sum = () => { 
    return base.reduce((acc, v) => {
      return acc + v
    })
  }
  render() {
    const { className, children, ...other } = this.props;
    const sum = base.reduce(function (acc, obj) { return acc + obj.amount; }, 0);
    
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    const componentClassName = classnames('c-value-prop', className, {});
    return (
      <div className={componentClassName} {...other}>
        <div className="c-inner">
          <h1>Get Help Paying for College</h1>
          <p>Up to {formatter.format(sum)} in scholarship money available!</p>  
        </div>
      </div>
    );
  }
}

ValueProp.propTypes = {
  /**
     * Child node(s) that can be nested inside component
     */
  children: PropTypes.node,
  /**
     * CSS class names that can be appended to the component.
     */
  className: PropTypes.string
};

export default ValueProp;
