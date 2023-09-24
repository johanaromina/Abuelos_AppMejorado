import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const username = 'Johana';
    const navigation = useNavigation();

    // Función para realizar la llamada al 911 y enviar una alerta roja al familiar
    const handleCall911AndAlertFamily = () => {
        // Realizar la llamada al 911 (puedes usar la funcionalidad de llamada telefónica de React Native)
        // ...

        // Enviar una alerta al familiar a cargo (aquí puedes implementar tu lógica específica)
        // Por ejemplo, podrías mostrar una alerta en la aplicación o enviar un mensaje a través de una API de mensajería.
        Alert.alert(
            'Alerta Roja Enviada',
            'Se ha enviado una alerta roja al familiar a cargo.',
            [
                { text: 'OK', onPress: () => console.log('Alerta Roja Enviada OK') }
            ],
            { cancelable: false }
        );
    }

    const handleHospitalListPressed = () => {
        navigation.navigate('Hospital List'); 
    }

    const handleFarmacyListPressed = () => {
        navigation.navigate('Farmacy List'); 
    }

    const handleFamilyMembersListPressed = () => {
        navigation.navigate('Family Members List'); // Navega a la pantalla 'Familiares'
    }

    const handleConfigurationPressed = () => {
        navigation.navigate('Configuration'); 
    }
    
    const handleReturnPressed = () => {
        navigation.goBack(); // Esto llevará al usuario de regreso a la pantalla anterior
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/foto2.png')}
                style={styles.image}
            />
            <Text style={styles.welcomeText}>¡Bienvenido, {username}!</Text>

            <View style={styles.buttonContainer}>
                <CustomButton
                    onPress={handleCall911AndAlertFamily} // Cambio de función aquí
                    text="Llamar al 911"
                    backgroundColor="#D50000"
                    foregroundColor="#FFFFFF"
                    iconSize={50}
                    style={styles.button}
                />

                <CustomButton
                    onPress={handleHospitalListPressed}
                    text="Consultorios"
                    backgroundColor="#01579B"
                    foregroundColor="#FFFFFF"
                    iconSize={50}
                    style={styles.button}
                />

                <CustomButton
                    onPress={handleFarmacyListPressed}
                    text="Farmacia"
                    backgroundColor="#388E3C"
                    foregroundColor="#FFFFFF"
                    iconSize={50}
                    style={styles.button}
                />

                <CustomButton
                    onPress={handleFamilyMembersListPressed}
                    text="Familiares"
                    backgroundColor="#FFD600"
                    foregroundColor="#000000"
                    iconSize={50}
                    style={styles.button}
                />
            </View>

            <CustomButton
                onPress={handleReturnPressed}
                text="Volver"
                type="tertiary"
                style={styles.button}
            />

            <CustomButton
                onPress={handleConfigurationPressed}
                text="Configuración"
                type="tertiary"
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FBFC',
    },
    image: {
        width: '12%', // Ajusta el ancho de la imagen según tus necesidades
        height: '35%', // Ajusta la altura de la imagen según tus necesidades
        marginBottom: 2,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column', // Cambia de 'row' a 'column'
        justifyContent: 'space-between', // Espacio uniforme entre los botones
        width: '40%', // Ajusta el ancho de los botones para ocupar más espacio verticalmente
        marginBottom: 20,
    },
    button: {
        marginBottom: 10, // Espacio entre los botones
    },
});

export default HomeScreen;




