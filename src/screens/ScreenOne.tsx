import { Text, ScrollView, View, FlatList } from 'react-native'

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
  { id: '11', title: 'Item Eleven' },
  { id: '12', title: 'Item Twelve' },
  { id: '13', title: 'Item Thirteen' },
  { id: '14', title: 'Item Fourteen' },
  { id: '15', title: 'Item Fifteen' },
  { id: '16', title: 'Item Sixteen' },
  { id: '17', title: 'Item Seventeen' },
  { id: '18', title: 'Item Eighteen' },
  { id: '19', title: 'Item Nineteen' },
  { id: '20', title: 'Item Twenty' },
]

export default function ScreenOne() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
    </View>
  )
}
