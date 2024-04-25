import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";
import {
  getMovies,
  getPopularPeople,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPeople, setPopularPeople] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    // async function getAllData() {
    //   setMovie(await getMovies());
    //   setTopMovies(await getTopMovies());
    //   setTopSeries(await getTopSeries());
    //   setPopularSeries(await getPopularSeries());
    //   setPopularPeople(await getPopularPeople());
    // }

    // getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps

    async function getAllData() {
      console.time("time");
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPeople(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, popularPeople]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setPopularPeople(popularPeople);
        })
        .catch((error) => console.error(error));
      console.timeEnd("time");
    }

    getAllData();
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
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assitir o filme
                </Button>
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
