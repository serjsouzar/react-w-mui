import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { SideBarInfo } from "./SideBarInfo";

export default function SideBarMenu() {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>{"Click me"}</Button>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
        <SideBarInfo close={toggleDrawer}/>
      </Drawer>
    </div>
  );
}
