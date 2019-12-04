# @react-corekit/use-idle

> Detecting when the user becomes inactive (idle) or active.

[![NPM](https://img.shields.io/npm/v/@react-corekit/use-idle.svg)](https://www.npmjs.com/package/@react-corekit/use-idle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-corekit/use-idle
```

## Usage

```jsx
import React, { Component } from "react";

import { useIdle } from "@react-corekit/use-idle";

const Example = () => {
  const options = { timeToIdle: 1000 };
  const isIdle = useIdle(options);
  return <div>{isIdle ? "Are you still there?" : "Yes, you are here"}</div>;
};
```

**mousemove** event is ignored by default, to include it add the following line to the options object:

```javascript
const options = { ignoredEventsWhenIdle: [] };
```

### Advanced options

Activity detector allows you to configure some parameters:

- `timeToIdle`: number of milliseconds of inactivity which makes activity detector transition to 'idle' (`30000` by default)
- `activityEvents`: the user events which make activity detector transition from 'idle' to 'active'. The default list of activityEvents is `['click', 'mousemove', 'keydown', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'focus']`
- `inactivityEvents`: the list of events which make the activity detector transition from 'active' to 'idle' without waiting for `timeToIdle` timeout. By default: `['blur']`
- `ignoredEventsWhenIdle`: list of events to ignore in idle state. By default: `['mousemove']`
- `initialState`: can be `"idle"` or `"active"` (`"active"` by default)

## Additional documentation

[Activity Detector Reference](https://github.com/tuenti/activity-detector/blob/master/README.md)

[Standard events Reference](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events)

## License

MIT © [glongh](https://github.com/glongh)
