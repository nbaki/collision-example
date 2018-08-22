import React from 'react';
import '../stylesheets/index.css';
import '../stylesheets/style.css';
import Intro from '../components/index/intro';
import CertifiedCommitment from '../components/index/certified_commitment';
import WhyHolman from '../components/index/why_holman';
import History from '../components/index/history';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Intro />
        <CertifiedCommitment />
        <WhyHolman />
        <History />
      </div>
    )
  }
}
