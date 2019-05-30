import React from 'react';

import{Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" sizer={28} color="#665"/>
            <Icon name="visibility-off" sizer={28} color="#665"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 15.000,00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 500,00 recebida de Thiago
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs/>
    </Container>
  )
}