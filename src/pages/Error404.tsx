import React, { FC } from "react";
import Container from "./elements/Container";

const Error404: FC = () => (
  <Container header="Error 404">
    <p>Страница не найдена - введенный адрес не используется на нашем сайте.</p>
  </Container>
);

export default Error404;
