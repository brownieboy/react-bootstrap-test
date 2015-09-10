import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle='primary' disabled>Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle='success'>Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle='info' href="http://www.theguardian.com">Guardian</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle='warning'>Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle='danger' active>Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle='link'>Link</Button>
        </ButtonToolbar>
        <br />
        <ButtonGroup>
          <DropdownButton bsStyle="success" title="Dropdown">
            <MenuItem key="1" id="menuItem1">Dropdown link 1</MenuItem>
            <MenuItem key="2" id="menuItem2">Dropdown link 2</MenuItem>
          </DropdownButton>
          <Button bsStyle="info">Middle</Button>
          <Button bsStyle="info">Right</Button>
      </ButtonGroup>

      </div>
    );
  }
}

// IndexComponent.defaultProps = {
//   items: []
// };
