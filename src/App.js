import Button from './lib/components/Button';
import Badge from './lib/components/Badge';

import './App.css';

const App = () => (
  <div>
    <p>Miramixi Storyteller</p>
    <h5>A notification badge:</h5>
    <Badge value={3} />
    <br />
    <h5>A button:</h5>
    <Button label="Enter" kind="primary" />
  </div>
);

export default App;
