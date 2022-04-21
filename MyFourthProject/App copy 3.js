import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default function MyScrollViewApp() {
  
  const dog = {
    uri: "https://www.europuppy.com/wp-content/uploads/2020/01/xIMG_9625-1.jpg.pagespeed.ic.aB3wA1tr1a.jpg",
    width: 64,
    height: 64
  }
  return (
    <ScrollView>
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize: 80}}> Try to scroll down </Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
    </ScrollView>
  );
}


