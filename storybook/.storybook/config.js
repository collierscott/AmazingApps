import { addDecorator, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { setConsoleOptions } from '@storybook/addon-console';

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Add the filters to Drupal.
twigDrupal(Twig);

// Automatically import all files ending in *.stories.js
const twig = require.context('../twig', true, /\.stories\.(ts|js)$/);
const editor = require.context('../editor', true, /\.stories\.(ts|js)$/);
function loadStories() {
  twig.keys().forEach(filename => twig(filename));
  editor.keys().forEach(filename => editor(filename));
}

// Helps make UI components more accessible.
addDecorator(withA11y);
setConsoleOptions({
  panelExclude: [],
});

configure(loadStories, module);
