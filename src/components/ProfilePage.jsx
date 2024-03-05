import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/signin");
  };


  return (
    <>
      <Container maxWidth disableGutters>
        <AppBar position="static" style={{ backgroundColor: "steelblue" }}>
          <Toolbar>
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="h5">Profile Page</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box display={"flex"} margin={"10px"}>
          <Button
            onClick={logout}
            variant="contained"
            style={{ backgroundColor: "steelblue", marginLeft: "auto" }}
          >
            Logout
          </Button>
        </Box>
        <ProfileContainer />
      </Container>
    </>
  );
};

export default ProfilePage;
