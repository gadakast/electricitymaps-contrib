import React from 'react';
import { connect } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link, Redirect, useLocation } from 'react-router-dom';

import { useTranslation } from '../../helpers/translation';
import FAQ from '../../components/faq';
import Icon from '../../components/icon';

const mapStateToProps = (state: any) => ({
  isMobile: state.application.isMobile,
});

const FAQPanel = ({ isMobile }: any) => {
  const { __ } = useTranslation();
  const location = useLocation();
  const parentPage = {
    pathname: isMobile ? '/info' : '/map',
    search: location.search,
  };

  // FAQ section is embedded on the /info page on mobile screens
  if (isMobile) {
    return <Redirect to={parentPage} />;
  }

  return (
    <div className="faq-panel">
      <div className="faq-header">
        <Link to={parentPage} className="left-panel-back-button">
          {/* @ts-expect-error TS(2322): Type '{ iconName: string; }' is not assignable to ... Remove this comment to see the full error message */}
          <Icon iconName="arrow_back" />
        </Link>
        <span className="title">{__('misc.faq')}</span>
      </div>
      <FAQ className="faq" />
    </div>
  );
};

export default connect(mapStateToProps)(FAQPanel);