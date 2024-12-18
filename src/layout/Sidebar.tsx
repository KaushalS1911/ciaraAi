"use client";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo/logo.png";

interface SidebarProps {
    open: boolean;
    handleDrawerClose: () => void;
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             open,
                                             mobileOpen,
                                             handleDrawerToggle,
                                         }) => {
    const drawerWidth = 275;
    return (
        <Box>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Image src={logo} alt="logo" />
            </Drawer>

            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundColor: "#f7f7f7",
                    },
                }}
            >
                <Box sx={{ overflowX: "hidden" }}>
                    <Image src={logo} alt="logo" />
                </Box>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
