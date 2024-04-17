import { useEffect, useState } from "react";
import api from "../../services/api";

useState;

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPeople, setPopularPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[2]);
    }
    console.log(movie);

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      console.log(results);
      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      console.log(results);
      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      console.log(results);
      setPopularSeries(results);
    }

    async function getPopularPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      console.log(results);
      setPopularPeople(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getPopularPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButton>
                <Button red>Assitir o filme</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assitir o trailer
                </Button>
              </ContainerButton>
            </Info>

            <Poster>
              <img alt="poster-movie" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {popularPeople && (
        <Slider info={popularPeople} title={"Artistas Populares"} />
      )}
    </>
  );
}

export default Home;
