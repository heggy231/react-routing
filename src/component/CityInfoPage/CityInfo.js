import React, { Component } from 'react';
import './CityInfo.css'
import {Link} from 'react-router-dom';
import London from './London';
import Sydney from './Sydney';
import SanFrancisco from './SanFrancisco';
import Seattle from './Seattle';

class CityInfo extends Component {
  render() {
    // if someone click London is clicked and show London in right column
    var selectedCity;
    debugger;
    if (this.props.selectedCity === "London") {
      selectedCity = <London />
    } else if (this.props.selectedCity === "Sydney") {
      selectedCity = <Sydney />
    } else if (this.props.selectedCity === "SanFrancisco") {
      selectedCity = <SanFrancisco />
    } else if (this.props.selectedCity === "seattle") {
      selectedCity = <Seattle />
    }

    return (
      <div>
        <div class="row">
        {/* left column */}
          <div class="column">Cities:
            <div>London
              <Link to="/CityInfo/London"><button>London CityInfo</button></Link>
            </div>
            <div>Sydney
              <Link to="/CityInfo/Sydney"><button>Sydney CityInfo</button></Link>
            </div>
            <div>San Francisco</div>
            <div>Seattle</div>
          </div>
        {/* right column */}
          <div class="column">more info about my cities
            { selectedCity }
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;