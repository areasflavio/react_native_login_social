import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <FontAwesome name={icon} color="#fff" size={24} />
      <Title>{title}</Title>
    </Container>
  );
}
