const { Tooltip, IconButton, alpha } = require("@mui/material");

const IconButtonSocialMedia = ({children, href, title}) => {

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        component="a"
        href={href}
        aria-label="social"
        target="_blank" 
        sx={{
          transition: "all .3s ease",
          color: theme => "dark" === theme.palette.mode ? 'primary' : 'default',
          "&:hover": {
            transform: 'translateY(-5px);',
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.5)
          }
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}

export default IconButtonSocialMedia;