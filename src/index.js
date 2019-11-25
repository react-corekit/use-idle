import * as React from "react";
import createActivityDetector from "activity-detector";

export const useIdle = options => {
  const [isIdle, setIsIdle] = React.useState(false);
  React.useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on("idle", () => setIsIdle(true));
    activityDetector.on("active", () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);
  return isIdle;
};
