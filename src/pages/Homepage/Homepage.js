import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Section } from '../../components/Section/Section';
import { CardList } from '../../components/CardList/CardList';
import { TextPassage } from '../../components/TextPassage/TextPassage';
import { Footer } from '../../components/Footer/Footer';

import ResultsList from '../../components/ResultsList'
import ValueProp from '../../components/ValueProp'

export class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <main role='main'>
          <ValueProp />
          <div style={{
            'background': '#f7f7f7'
          }}>
            <ResultsList />  
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  heroTitle: PropTypes.string,
  heroDescription: PropTypes.string,
  heroImgSrc: PropTypes.string,
  heroImgAlt: PropTypes.string,
  section1Title: PropTypes.string,
  section1Description: PropTypes.string,
  cardListItems: PropTypes.array
};

import heroImg from '../../images/fpo-1200x650.png';

Homepage.defaultProps = {
  heroTitle: 'Hero Title',
  heroDescription: 'this is the hero description',
  heroImgSrc: heroImg,
  heroImgAlt: 'Alt Text',
  section1Title: 'Section Title',
  section1Description: 'This is the section description',
  cardListItems: [
    {
      styleModifier: 'c-card--dark',
      title: 'Card 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};
