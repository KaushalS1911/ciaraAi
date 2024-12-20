"use client";
import Image from "next/image";
import {useState} from "react";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText, TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CustomButton from "../components/button/Button";
import {ChevronRight, Clear, Search} from "@mui/icons-material";
import dartBoard from "../assets/images/playbook/dartBoard.png"
import magnifyingGlass from "../assets/images/playbook/magnifyingGlass.png"
import moneyBag from "../assets/images/playbook/moneyBag.png"
import shoppingBag from "../assets/images/playbook/shoppingBag.png"
import head from "../assets/images/playbook/lightning.png"
import {useRouter} from "next/navigation";

export default function Home() {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const categories = ["Lead Generation & Sales", "Agent Management", "Engagement & Follow-ups", "Meeting & Schedule"];
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };
    const playbookData = [
        {
            icon: dartBoard,
            title: 'Free Trial Follow-up',
            description: 'Student completes free trial -> AI agent calls to get feedback',
            description1: 'and schedule demo call',
        },
        {
            icon: magnifyingGlass,
            title: 'Lead Qualification Router',
            description: 'New lead submits inquiry -> AI agent evaluates requirements',
            description1: 'and assigns to best sales rep',
        },
        {
            icon: moneyBag,
            title: 'Price Quote Follow-up',
            description: 'Price quote sent 24h ago -> AI agent checks decision status',
            description1: 'and addresses pricing questions',
        },
        {
            icon: shoppingBag,
            title: 'Abandoned Cart Recovery',
            description: 'Course added to cart but not purchased -> AI agent sends',
            description1: 'personalized message with course benefits',
        },{
            icon: dartBoard,
            title: 'Free Trial Follow-up',
            description: 'Student completes free trial -> AI agent calls to get feedback',
            description1: 'and schedule demo call',
        },
        {
            icon: magnifyingGlass,
            title: 'Lead Qualification Router',
            description: 'New lead submits inquiry -> AI agent evaluates requirements',
            description1: 'and assigns to best sales rep',
        },
        {
            icon: moneyBag,
            title: 'Price Quote Follow-up',
            description: 'Price quote sent 24h ago -> AI agent checks decision status',
            description1: 'and addresses pricing questions',
        },
        {
            icon: shoppingBag,
            title: 'Abandoned Cart Recovery',
            description: 'Course added to cart but not purchased -> AI agent sends',
            description1: 'personalized message with course benefits',
        },
    ];
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: "wrap"}}>
                <Box>
                    <Box sx={{color: 'blue', fontSize: 24, fontWeight: 600}}>
                        Workflows
                    </Box>
                    <Typography sx={{color: 'textGray', fontSize: 14}}>Create automated sequences to handle repetitive
                        tasks with AI agents.</Typography>

                </Box>
                <Box sx={{mt: {xs: 2, lg: 0}}}>
                    <CustomButton startIcon={<AddIcon/>} variant={'contained'} onClick={handleOpen}>Create
                        Playbook</CustomButton>
                </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Dialog
                    open={Boolean(open)}
                    onClose={handleClose}
                    maxWidth="lg"
                    sx={{overflow: "hidden", ' > div > div': {borderRadius: '16px', width: '1080px'},backgroundColor: 'rgba(255, 255, 255, 0.7)'}}
                >
                    <DialogTitle>
                        <Box
                            sx={{
                                py: {xs: 0, md: 2},
                                borderBottom: "1px solid #F2F2F2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: {xs: "column", sm: "row"},
                            }}
                        >
                            <Box
                                order={{sm: 1, xs: 2}}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: {xs: 2, sm: 0},
                                }}
                            >
                                <Box>
                                    <Image src={head} alt={"head"}/>
                                </Box>
                                <Box ml={2}>
                                    <Typography variant="h7" color={"blue"} fontWeight="500">
                                        Create a New Playbook
                                    </Typography>
                                    <Typography sx={{color: "textGray", fontSize: 14}}>
                                        Pick from our templates or build from scratch
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                order={{sm: 2, xs: 1}}
                                sx={{
                                    cursor: "pointer",
                                    marginLeft: "auto",
                                }}
                                onClick={handleClose}
                            >
                                <Clear/>
                            </Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent sx={{px: 0}}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {xs: "column", sm: "row"},
                                height: {xs: "auto", sm: "70vh"},
                                overflowY:'hidden'
                            }}
                        >
                            <Box
                                sx={{
                                    width: {xs: "100%", sm: "32%", md: "28%"},
                                    borderRight: {xs: "none", sm: "1px solid #F2F2F2"},
                                    paddingBlock: {xs: 1, sm: 2},
                                    mb: {xs: 2, sm: 0},
                                }}
                            >
                                <Typography color={"textGray"} mb={2} ml={2} sx={{fontSize: 14}}>
                                    Categories (5)
                                </Typography>
                                <List>
                                    {categories.map((category, index) => (
                                        <ListItem
                                            key={index}
                                            selected={selectedIndex === index}
                                            onClick={() => handleListItemClick(index)}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                backgroundColor: selectedIndex === index ? "#F0F0F0" : "transparent",
                                                "&:hover": {
                                                    backgroundColor: selectedIndex === index
                                                        ? "#F0F0F0"
                                                        : "#F7F7F7",
                                                },
                                                cursor: "pointer",
                                            }}
                                        >
                                            <ListItemText
                                                sx={{color: "blue"}}
                                                primary={category}
                                            />
                                            <ListItemSecondaryAction>
                                                <ChevronRight/>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                                </List>
                                <Box sx={{px: 3}}>
                                    <CustomButton
                                        startIcon={<AddIcon/>}
                                        variant="contained"
                                        sx={{mt: 2, width: '100%',textWrap: 'nowrap'}}
                                        onClick={() => router.push("/playbook")}
                                    >
                                        Start from scratch
                                    </CustomButton>
                                </Box>
                            </Box>

                            <Box sx={{flex: 1, padding: {xs: 2, sm: 4}}}>
                                <TextField
                                    variant="outlined"
                                    placeholder="Search a template by name, trigger or action"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: <Search sx={{mr: 1, color: 'textGray'}}/>,
                                    }}
                                    sx={{
                                        mb: 4,
                                        " input": {
                                            height: 7,
                                        },
                                        " .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#D0D5DD",
                                            borderRadius: '6px'
                                        }, " .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#667085",
                                        },
                                        " .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#334155",
                                        },
                                    }}
                                />
                            <Box sx={{overflowY:"scroll",height:'100%',pb:4,pr:1}} className={"scrollbar"}>
                                <Typography variant={"h7"} color={"blue"} fontWeight="500" sx={{fontSize: 20}}>
                                    {selectedIndex == 0 ? 'Lead Generation & Sales' : selectedIndex == 1 ? "Agent Management" : selectedIndex == 2 ? "Engagement & Follow-ups" : "Meeting & Schedule"}
                                </Typography>
                                <Box sx={{mt: 2}}>
                                    {playbookData.map((data, ind) => (
                                        <Box key={ind}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: {xs: "column", sm: "row"},
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    border: "1px solid #F2F2F2",
                                                    borderRadius: 4,
                                                    padding: 2,
                                                    mb: 2,
                                                }}
                                            >
                                                <Box display="flex" flexDirection={{xs: "column", sm: "row"}}>
                                                    <Box mr={2}>
                                                        <Image src={data.icon} alt={"head"}
                                                               sx={{height: 28, width: 28}}/>
                                                    </Box>
                                                    <Box>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color={"blue"}
                                                            fontWeight="600"
                                                        >
                                                            {data.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color={"textGray"}
                                                            sx={{color: "text.secondary", fontSize: 13}}
                                                        >
                                                            {data.description}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color={"textGray"}
                                                            sx={{color: "text.secondary"}}
                                                        >
                                                            {data.description1}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{display: 'flex',justifyContent: 'right',width: {xs:'100%',sm: 'auto'}}}>
                                                    <CustomButton variant="outlined" size="small"
                                                                  sx={{fontSize: " 14",textWrap: 'nowrap'}}>
                                                        Set up
                                                    </CustomButton>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            </Box>
                        </Box>
                    </DialogContent>
                </Dialog>

            </Box>
        </>
    );
}
