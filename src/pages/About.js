import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import CardMember from "../components/CardMember";

const About = () => {
  const currentTab = useLocation().pathname;

  return (
    <>
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="flex-start" style={{ minHeight: "50vh" }}>
        <Stack direction="row" alignItems="center">
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0.5}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Anggota Kelompok 11
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ width: 400, m: 0.5 }} orientation="horizontal" />

        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" xs={6}>
          <CardMember
            member={{
              nama: "Muhammad Ilzam Muhtaromi",
              nim: "21120119120027",
              username: "mim_ilzam",
            }}
          />
          <CardMember
            member={{
              nama: "ANHAR",
              nim: "21120119120012",
              username: "an.harr",
            }}
          />
        </Grid>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" xs={6}>
          <CardMember
            member={{
              nama: "Samuel Imanta Ginting",
              nim: "21120119120010",
              username: "samuel_gts1",
            }}
          />
          <CardMember
            member={{
              nama: "Brigita Lucrecia T V",
              nim: "21120119120031",
              username: "brigita.shb",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default About;
