import { FlatList, Text } from 'react-native'

const ITEMS = [
  { id: '1', title: 'Item One' },
  { id: '2', title: 'Item Two' },
  { id: '3', title: 'Item Three' },
  { id: '4', title: 'Item Four' },
  { id: '5', title: 'Item Five' },
  { id: '6', title: 'Item Six' },
  { id: '7', title: 'Item Seven' },
  { id: '8', title: 'Item Eight' },
  { id: '9', title: 'Item Nine' },
  { id: '10', title: 'Item Ten' },
]

export default function ScreenTwo() {
  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 12 }}
      data={ITEMS}
      renderItem={({ item }) => (
        <Text
          style={{
            backgroundColor: 'pink',
            fontSize: 16,
            padding: 12,
            marginBottom: 4,
          }}
        >
          {item.title}
        </Text>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}
