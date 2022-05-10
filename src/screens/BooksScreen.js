import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import BookList from '../components/Booklist';

const BooksScreen = (props) => {

    return (
        <View>   
            <BookList />
        </View>
    );
}

const styles = StyleSheet.create({});

export default BooksScreen;