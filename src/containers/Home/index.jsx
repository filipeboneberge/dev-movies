import { useEffect, useState } from "react";
import api from "../../services/api";

useState;

import Button from "../../components/Button";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";

function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[2]);
    }
    console.log(movie);

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movie && (
        <Background
          $img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButton>
                <Button red>Assitir o filme</Button>
                <Button>Assitir o trailer</Button>
              </ContainerButton>
            </Info>

            <Poster>
              <img
                alt="poster-movie"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;
