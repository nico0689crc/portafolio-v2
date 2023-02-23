import { Divider, Stack } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";

const SidebarContent = () => {

  return (
    <Stack rowGap={1} sx={{height: '100vh'}}>
      <SidebarHeader />
      <Divider className="MuiDividerCustomized"/>
      <SidebarItems />
    </Stack>
  )
}

export default SidebarContent;
