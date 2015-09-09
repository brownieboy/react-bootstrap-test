import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

export default class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle='primary'>Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle='success'>Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle='info'>Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle='warning'>Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle='danger'>Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle='link'>Link</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

// IndexComponent.defaultProps = {
//   items: []
// };
