import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.displayName = 'Iconify';

export default Iconify;
