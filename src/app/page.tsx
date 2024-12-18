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
import one from "../assets/images/playbook/one (2).png"
import two from "../assets/images/playbook/two (2).png"
import three from "../assets/images/playbook/three (2).png"
import four from "../assets/images/playbook/four (2).png"
import head from "../assets/images/playbook/head.png"
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
      icon: one,
      title: 'Free Trial Follow-up',
      description: 'Student completes free trial -> AI agent calls to get feedback',
      description1: 'and schedule demo call',
    },
    {
      icon: two,
      title: 'Lead Qualification Router',
      description: 'New lead submits inquiry -> AI agent evaluates requirements',
      description1: 'and assigns to best sales rep',
    },
    {
      icon: three,
      title: 'Price Quote Follow-up',
      description: 'Price quote sent 24h ago -> AI agent checks decision status',
      description1: 'and addresses pricing questions',
    },
    {
      icon: four,
      title: 'Abandoned Cart Recovery',
      description: 'Course added to cart but not purchased -> AI agent sends',
      description1: 'personalized message with course benefits',
    },
  ];
  return (
    <>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:"wrap"}}>
        <Box>
          <Box sx={{color:'header',fontSize:22,fontWeight:600}}>
            Workflows
          </Box>
          <Typography sx={{color:'deta'}}>Create automated sequences to handle repetitive tasks with AI agents.</Typography>

        </Box>
        <Box sx={{mt:{xs:2,lg:0}}}>
          <CustomButton startIcon={<AddIcon />} variant={'contained'} onClick={handleOpen}>Create Playbook</CustomButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Dialog
            open={Boolean(open)}
            onClose={handleClose}
            maxWidth="lg"
            fullWidth
    sx={{borderRadius:20,overflow:"hidden"}}
        >
          <DialogTitle>
            <Box
                sx={{
                  py: {xs:0,md:2},
                  borderBottom: "1px solid #F2F2F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                }}
            >
              <Box
                  order={{sm: 1, xs: 2}}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 2, sm: 0 },
                  }}
              >
                <Box>
                  <Image src={head} alt={"head"} />
                </Box>
                <Box ml={2}>
                  <Typography variant="h7" color={"header"} fontWeight="600">
                    Create a New Playbook
                  </Typography>
                  <Typography sx={{ color: "deta", fontSize: 13 }}>
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
                <Clear />
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent sx={{ px: { xs: 2, sm: 4 } }}>
            <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  height: { xs: "auto", sm: "70vh" },
                }}
            >
              <Box
                  sx={{
                    width: { xs: "100%", sm: "25%" },
                    borderRight: { xs: "none", sm: "1px solid #F2F2F2" },
                    padding: { xs: 1, sm: 2 },
                    mb: { xs: 2, sm: 0 },
                  }}
              >
                <Typography color={"deta"} mb={2}>
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
                            style={{ color: "header !important" }}
                            primary={category}
                        />
                        <ListItemSecondaryAction>
                          <ChevronRight />
                        </ListItemSecondaryAction>
                      </ListItem>
                  ))}
                </List>
                <CustomButton
                    startIcon={<AddIcon />}
                    variant="contained"
                    sx={{ mt: 2 }}
                    fullWidth
                    onClick={() => router.push("/playbook")}
                >
                  Start from scratch
                </CustomButton>
              </Box>

              <Box sx={{ flex: 1, padding: { xs: 2, sm: 4 } }}>
                <TextField
                    variant="outlined"
                    placeholder="Search a template by name, trigger or action"
                    fullWidth
                    InputProps={{
                      startAdornment: <Search sx={{ mr: 1 }} />,
                    }}
                    sx={{
                      mb: 4,
                      "& input": {
                        height: 7,
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#667085",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#334155",
                      },
                    }}
                />
                <Typography variant={"h7"} color={"header"} fontWeight="600">
                    {selectedIndex == 0 ? 'Lead Generation & Sales' : selectedIndex == 1 ? "Agent Management" : selectedIndex == 2 ? "Engagement & Follow-ups" : "Meeting & Schedule" }
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {playbookData.map((data, ind) => (
                      <Box key={ind}>
                        <Box
                            sx={{
                              display: "flex",
                              flexDirection: { xs: "column", sm: "row" },
                              justifyContent: "space-between",
                              alignItems: "center",
                              border: "1px solid #F2F2F2",
                              borderRadius: 2,
                              padding: 2,
                              mb: 2,
                            }}
                        >
                          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                            <Box mr={2}>
                              <Image src={data.icon} alt={"head"} />
                            </Box>
                            <Box>
                              <Typography
                                  variant="subtitle1"
                                  color={"header"}
                                  fontWeight="600"
                              >
                                {data.title}
                              </Typography>
                              <Typography
                                  variant="body2"
                                  color={"deta"}
                                  sx={{ color: "text.secondary" }}
                              >
                                {data.description}
                              </Typography>
                              <Typography
                                  variant="body2"
                                  color={"deta"}
                                  sx={{ color: "text.secondary" }}
                              >
                                {data.description1}
                              </Typography>
                            </Box>
                          </Box>
                          <CustomButton variant="outlined" size="small">
                            Set up
                          </CustomButton>
                        </Box>
                      </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>

      </Box>
    </>
  );
}
