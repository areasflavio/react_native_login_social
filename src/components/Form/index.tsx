import * as AuthSession from 'expo-auth-session';
import { useState } from 'react';

import { GCP_CLIENT_ID, GCP_REDIRECT_URI } from 'react-native-dotenv';

import { Button } from '../Button';
import { User, UserProps } from '../User';

import { Container } from './styles';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function Form() {
  const [userData, setUserData] = useState<UserProps | null>(null);

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

      if (!(type === 'success')) throw new Error('Auth session error.');

      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
      );
      const user = await response.json();

      setUserData(user);
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

      {userData && <User {...userData} />}
    </Container>
  );
}
