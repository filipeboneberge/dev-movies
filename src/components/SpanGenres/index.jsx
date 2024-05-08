/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "./styles";

function SpanGenres({ genres }) {
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
}

export default SpanGenres;
