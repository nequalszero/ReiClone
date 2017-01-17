import React from 'react';
import { withRouter } from 'react-router';
import MarmotBanner from './banners/marmot_banner';
import NemoVeda from './featured/nemo_veda';
import MarmotPlasma from './featured/marmot_plasma';
import MHLamina from './featured/mh_lamina';

const optOutsideUrl = "http://res.cloudinary.com/nequalszero/image/upload/v1484255711/REI_Clone/Home_Page/opt-outside_l90yn7.jpg";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentBanner: "marmot"};

    this.homepageBanner = this.homepageBanner.bind(this);
  }

  homepageBanner() {
    switch(this.state.currentBanner) {
      case "marmot":
        return <MarmotBanner onClickAction={() => this.props.search("Marmot")}
                             router={this.props.router}/>;
    }
  }

  render() {
    return (
      <div className="splash-page-container">
        {this.homepageBanner()}
        <section>
          <div className="opt-outside">
            <img src={optOutsideUrl}></img>
          </div>
          <div className="featured-items-container">
            <NemoVeda props={this.props}/>
            <div className="medium-featured-items-container">
              <MHLamina props={this.props}/>
              <MarmotPlasma props={this.props}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SplashPage;
