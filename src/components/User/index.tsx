import { Container, Email, Name, Photo } from './styles';

export function User() {
  return (
    <Container>
      <Photo source={{ uri: 'https://github.com/areasflavio.png' }} />

      <Name>Flávio</Name>

      <Email>flavio@email.com</Email>
    </Container>
  );
}
