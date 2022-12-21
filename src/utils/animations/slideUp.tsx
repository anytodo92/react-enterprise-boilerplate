import React from 'react';

// Material UI
import Slide from '@mui/material/Slide';

export const SlideUp = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/no-children-prop
  return <Slide children={<></>} direction='up' ref={ref} {...props} />;
});
