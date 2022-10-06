import { Container, Email, Name, Photo } from './styles';

export type UserProps = {
  name: string;
  email: string;
  picture: string;
};

export function User({ email, name, picture }: UserProps) {
  return (
    <Container>
      <Photo source={{ uri: picture }} />

      <Name>{name}</Name>

      <Email>{email}</Email>
    </Container>
  );
}
