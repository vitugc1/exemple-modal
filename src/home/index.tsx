import React, { useEffect, useRef, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Container, Button, ButtonText } from './styles';
import Modal from '../components/Modal';
import { api } from '../services/api';
import { Card } from '../components/Card';

type DataProps = {
  id: number;
  name: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMoreData, setHasMoreData] = useState(true)

  useEffect(() => {
    handleGetAllEpisodes()
  }, [])

  const handleGetAllEpisodes = async () => {
    if(!hasMoreData) return;

    setLoading(true)
    const { data } = await api.get(`/api/episode?page=${page}`)
    if(data.results) {
      const current = data.results;
      setData(prev => [...prev, ...current])
      if(data.info.next){
        setPage(prev => prev + 1)
      }else{
        setHasMoreData(false)
      }
    }
    setLoading(false)
  }


  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Card id={item.id} name={item.name} />}
        onEndReached={handleGetAllEpisodes}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <View style={{ marginTop: 15}} />}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#f3b1b1" /> : null}
      />
      <Modal />
    </Container>
  );
};
