import React from 'react';
import Button from './lib/components/Button/Button';
import Badge from './lib/components/Badge';

import './lib/components/styles/_button.scss';

const App = () => (
  <div>
    <p>Miramixi Storyteller</p>
    <h5>A notification badge:</h5>
    <Badge value={3} />
    <br />
    <h5>A button:</h5>
    <Button
      type="secondary"
      value="Button"
      size="large"
      disabled={false}
      active={true}
      isLoading={true}
    />
  </div>
);

export default App;
