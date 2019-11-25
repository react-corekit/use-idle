# @react-corekit/use-idle

> Detecting when the user becomes inactive (idle) or active

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
  const isIdle = useIdle({ timeToIdle: 1000 });
  return <div>{isIdle ? "Are you still there?" : "Yes, you are here"}</div>;
};
```

## License

MIT © [glongh](https://github.com/glongh)
