/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileContainer = () => {
  const [ProfileData, setProfileData] = useState([]);
  const [edit, setEdit] = useState(true);

  const handleChange = (event) => {
    setProfileData({
      ...ProfileData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get("http://localhost:8000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) setProfileData(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const submitUpdatedValues = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await axios.post(
        "http://localhost:8000/users/updateUser",
        ProfileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setEdit(true);
        fetchData();
        alert("Profile Updated");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {ProfileData && (
        <Container
          key={ProfileData.UID}
          style={{
            height: "80vh",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography
              variant="h5"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Profile
            </Typography>
          </Box>
          <Box
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "40px",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <TextField
                label="Username"
                disabled={edit}
                value={ProfileData.Username}
                onChange={handleChange}
                name="Username"
                id="Username"
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <TextField
                label="Email"
                value={ProfileData.Email}
                disabled
                id="Email"
                name="Email"
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <TextField
                label="Firstname"
                id="Firstname"
                value={ProfileData.Firstname}
                onChange={handleChange}
                disabled={edit}
                name="Firstname"
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <TextField
                label="Lastname"
                disabled={edit}
                value={ProfileData.Lastname}
                onChange={handleChange}
                id="Lastname"
                name="Lastname"
              />
            </Box>
          </Box>
          <Box padding={"10px"} width={"100%"} display={"flex"}>
            {edit && (
              <Button
                variant="contained"
                onClick={() => setEdit(false)}
                style={{ marginLeft: "auto" }}
              >
                Edit
              </Button>
            )}
            {!edit && (
              <Button
                variant="contained"
                onClick={submitUpdatedValues}
                style={{ marginLeft: "auto" }}
              >
                Save
              </Button>
            )}
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProfileContainer;
