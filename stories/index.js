import React from 'react';

import { storiesOf } from '@storybook/react';

import Timeline from "../src/timeline/Timeline";

storiesOf('timeline', module)
  .add('test', () => <Timeline />);
