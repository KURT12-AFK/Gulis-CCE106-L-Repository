import { StyleSheet, Text, View, Image } from 'react-native';

export default function StatCard(props) {
    return (
        <View style={[styles.card, { backgroundColor: props.bgColor }]}>
            <Text style={styles.title}>{props.title}<Image source={props.image} style={styles.image} /></Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 12,
        marginVertical: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '800',
    },
    value: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5,
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
});