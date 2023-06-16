import React from "react";
import { Stack, Container } from "@mui/material";
import { HeaderStyles } from "@/styles/layout/HeaderStyles";
import Image from "next/image";
import img from "@/assets/images/Logo-small.webp";
import { Hamburger } from "@/assets/icons/Hamburger";
import AlertDialog from "@/components/AlertDialog";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <Stack
          direction="row"
          className="header"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="img-wrapper">
            <Link href="/">
              {" "}
              <Image src={img} fill alt="" />
            </Link>
          </div>

          <div className="menu-wrapper">
            <AlertDialog />
          </div>
        </Stack>
      </Container>
    </HeaderStyles>
  );
};
