import * as AuthSession from 'expo-auth-session';

import { GCP_CLIENT_ID, GCP_REDIRECT_URI } from 'react-native-dotenv';

import { Button } from '../Button';
import { User } from '../User';

import { Container } from './styles';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function Form() {
  async function handleGoogleSignIn() {
    try {
      const clientId = GCP_CLIENT_ID;
      const redirectUri = GCP_REDIRECT_URI;
      const responseType = 'token';
      const scope = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      console.log({ params, type });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com Google"
        onPress={handleGoogleSignIn}
      />

      {/* <User /> */}
    </Container>
  );
}
