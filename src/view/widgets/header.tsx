import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import theme from '../../shared/theme';

export default function HeaderWidget() {
    return (
        <SafeAreaView style={[{ backgroundColor: theme.colors.background }]}>
            <View>
                <Text style={[{ color: theme.colors.text }]}>
                    Bom dia Adriana, bora gerenciar?
                </Text>
            </View>
        </SafeAreaView>
    );
};
