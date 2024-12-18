import React from 'react';
import {Box} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomButton from "../button/Button";
import {useRouter} from "next/navigation";

function PlaybookHeader(props) {
    const router = useRouter()
    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2} >
                <Box onClick={() => router.push('/')} sx={{cursor:'pointer'}}><KeyboardBackspaceIcon /></Box>
                <Box>Untitled Playbook</Box>
                <Box>
                    <CustomButton
                        variant="contained"
                        fullWidth
                    >
                        Active
                    </CustomButton>
                </Box>
            </Box>
        </>
    );
}

export default PlaybookHeader;