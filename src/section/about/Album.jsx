import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { AlbumStyles } from "@/styles/about/AlbumStyles";
import img1 from "@/assets/images/mission.jpeg";
import img2 from "@/assets/images/camera-man2-o3rc4k0cu62tjo5s3bm2gu868otk2sqqgxkii3inle.jpeg";
import img3 from "@/assets/images/library-woman-o3rc76y20fp2cl00uzzm886qfj1qb677sq7gzivdnq.jpeg";
import img4 from "@/assets/images/horse-production-o3rc8d8qbaed9w2pdkexcqd8i5uvkdqe2p3ik6ulx4.jpeg";


export const Album = () => {
  return (
    <AlbumStyles>
      <Container className="album">
        <Grid container spacing={3}>
          <Grid container item spacing={3} lg={6}>
            <Grid item xs={12} md={6}>
              <div className="image-wrapper">
                <Image className="image" src={img1} alt="" fill />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="image-wrapper short three">
                <Image className="image" src={img2} alt="" fill />
              </div>
            </Grid>
          </Grid>
          <Grid container className="second" item spacing={3} alignItems={"END"} lg={6}>
            <Grid item xs={12} md={6}>
              <div className="image-wrapper short one">
                <Image className="image" src={img3} alt="" fill />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="image-wrapper two">
                <Image className="image" src={img4} alt="" fill />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AlbumStyles>
  );
};
