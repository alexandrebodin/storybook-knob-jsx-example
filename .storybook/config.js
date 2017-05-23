import '@kadira/storybook/addons'
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
