import React from 'react';
import '../../stylesheets/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div class="text-center">
          <p>
            <strong>Holman Collision </strong>| 900 N Andrews Ave, Fort Lauderdale, FL 33311 | Calls us: (954) 926-3590
          </p>
          <p>
            Copyright 2018 Holman Collision.  All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}
