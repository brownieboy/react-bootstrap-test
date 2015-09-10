'use strict';

import React from 'react';
import TestButtons from './components/TestButtons.jsx';
import ExampleModal from './components/ExampleModal.jsx';

React.render(<TestButtons />, document.getElementById("buttonTest"));
React.render(<ExampleModal />, document.getElementById("modalTest"));
