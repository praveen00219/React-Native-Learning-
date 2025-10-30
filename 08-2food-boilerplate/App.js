import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleRemove = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1601924638867-3ec3a2f0b9b4' }}
          style={styles.foodImage}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.foodName}>Margherita Pizza</Text>
          <Text style={styles.foodDesc}>Classic cheese pizza with tomato sauce and basil.</Text>

          <View style={styles.bottomRow}>
            <Text style={styles.price}>₹250</Text>

            <View style={styles.cartControls}>
              <TouchableOpacity onPress={handleRemove}>
                {/* <Ionicons name="remove-circle-outline" size={26} color="#444" /> */}
              </TouchableOpacity>

              <Text style={styles.count}>{count}</Text>

              <TouchableOpacity onPress={handleAdd}>
                {/* <Ionicons name="add-circle-outline" size={26} color="#1e90ff" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  foodImage: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 15,
  },
  foodName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  foodDesc: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});
