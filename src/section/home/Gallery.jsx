import Image from "next/image";
import { Grid, Container } from "@mui/material";
import { GalleryStyles } from "@/styles/home/GalleryStyles";
import img1 from "@/assets/images/portfolio-1.jpeg";
import img2 from "@/assets/images/portfolio-2.jpeg";
import img3 from "@/assets/images/portfolio-3.jpeg";
import img4 from "@/assets/images/portfolio-4.jpeg";
import img5 from "@/assets/images/portfolio-5.jpeg";
import img6 from "@/assets/images/portfolio-6.jpeg";
import img7 from "@/assets/images/portfolio-7.jpeg";
import img8 from "@/assets/images/portfolio-8.jpeg";
import img9 from "@/assets/images/portfolio-9.jpeg";

export const Gallery = () => {
  return (
    <GalleryStyles>
      <Container className="gallery">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div className="image-wrapper">
              <Image className="image" src={img1} alt="" fill />

              <div className="text">
                <p>
                  CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <div className="image-wrapper">
              <Image className="image" src={img2} alt="" fill />

              <div className="text">
                <p>
                  CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                </p>
              </div>
            </div>
          </Grid>

          <Grid container item xs={12} md={8} spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="image-wrapper-flex">
                <Image className="image" src={img3} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="image-wrapper-flex">
                <Image className="image" src={img4} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className="image-wrapper-flex">
                <Image className="image" src={img5} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4} spacing={3}>
            <Grid item xs={12} md={12}>
              <div className="image-wrapper long">
                <Image className="image" src={img6} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={8} spacing={3}>
            <Grid item xs={12} md={12}>
              <div className="image-wrapper long">
                <Image className="image" src={img7} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={4} spacing={3}>
            <Grid item xs={12} md={12}>
              <div className="image-wrapper-flex">
                <Image className="image" src={img8} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className="image-wrapper-flex">
                <Image className="image" src={img9} alt="" fill />

                <div className="text">
                  <p>
                    CLIENT <br></br> <span>PARIATUR COMPANY INC.</span>{" "}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </GalleryStyles>
  );
};
