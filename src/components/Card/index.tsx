import React, { memo } from "react"
import { Text, View } from "react-native"

type Props = {
  id: number;
  name: string
}

const ListCard = (data: Props) => {
  return (
    <View style={{ width: 400, height: 50, justifyContent: 'center', backgroundColor: '#f3b1b1'}}>
      <Text style={{ color: '#000', fontSize: 15}}>{data.name}</Text>
    </View>
  )
}

export const Card = memo(ListCard, (prev, next) => {
  return Object.is(prev, next)
})