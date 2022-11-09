import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

export default function ChatItem({isMe, text, date}) {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }

  return <Other text={text} date={date} />;
}

const styles = StyleSheet.create({});
