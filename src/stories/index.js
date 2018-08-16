import { configure } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';
const req = require.context('../components', true, /_stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);