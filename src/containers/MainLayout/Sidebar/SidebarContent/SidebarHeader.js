import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TypographyCustomHeader = ({children, ...restProps}) => {
  return (
    <Typography className="TypographyCustomHeader" letterSpacing={2} variant="h5" textTransform="uppercase" {...restProps}>
      {children}
    </Typography>
  );
}

const SidebarHeader = () => {
  return (
    <Box sx={{ width: '100%', paddingY: 2, paddingX: 4}}>
      <Stack>
        <Stack direction="row" columnGap={1}>
          <TypographyCustomHeader fontWeight="200">Nicolás</TypographyCustomHeader>
          <TypographyCustomHeader fontWeight="200">Ariel</TypographyCustomHeader>
        </Stack>
        <TypographyCustomHeader fontWeight="800">Fernández</TypographyCustomHeader>
      </Stack>
    </Box>
  );
}

export default SidebarHeader;