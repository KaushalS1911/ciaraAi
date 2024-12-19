import React from 'react';
import {Box} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomButton from "../button/Button";
import {useRouter} from "next/navigation";

function PlaybookHeader() {
    const router = useRouter()
    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2} sx={{height: '67px'}}>
                <Box onClick={() => router.push('/')} sx={{cursor:'pointer'}}><KeyboardBackspaceIcon /></Box>
                <Box sx={{fontSize: 20}}>Untitled Playbook</Box>
                <Box>
                    <CustomButton
                        variant="contained"
                        fullWidth
                    >
                        Activate
                    </CustomButton>
                </Box>
            </Box>
        </>
    );
}

export default PlaybookHeader;