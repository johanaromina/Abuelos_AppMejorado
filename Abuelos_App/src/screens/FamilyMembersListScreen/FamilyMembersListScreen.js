import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'; // Agrega useWindowDimensions
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

import logo from '../../../assets/foto1.png';

const FamilyMembersListScreen = () => {
    const username = 'Johana';
    const { height } = useWindowDimensions(); // Obtén la altura de la pantalla
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFamilyMember, setSelectedFamilyMember] = useState(null);
    const [alarmType, setAlarmType] = useState('');

    const callPolice = () => {
        console.warn('Llamando a la policia');
    }

    const callFamilyMember = () => {
        console.warn('Llamando a Martín');
    }

    const callHospital = () => {
        console.warn('Llamando a consultorio');
    }
    
    const callFarmacy = () => {
        console.warn('Llamando a farmacia');
    }

    const handleConfigurationPressed = () => {
        // Navegar a la pantalla de configuración.
    }

    const openAlarmModal = (type) => {
        setAlarmType(type);
        setModalVisible(true);
    }

    const closeAlarmModal = () => {
        setModalVisible(false);
    }

    const sendAlarm = () => {
        // Implementa la lógica para enviar una alarma por WhatsApp al familiar seleccionado.
        // Puedes usar librerías como 'react-native-communications' para abrir WhatsApp.
        closeAlarmModal();
    }

    return (
        <View>
            <Text>Bienvenida/o {username}</Text>


            <Image
                    source={logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
            />
            <Text> Si tienes una emergencia llama  {username}</Text>
            <CustomButton
                onPress={callPolice}
                text="Llamar a la policía"
                backgroundColor='#D50000'
                foregroundColor='#FFFFFF'
            />
            
            <Text> Envía alarma:  {username}</Text>
        
            <CustomButton
                onPress={() => openAlarmModal('red')}
                text="Alarma Roja"
                backgroundColor='#D50000'
                foregroundColor='#FFFFFF'
            />

            <CustomButton
                onPress={() => openAlarmModal('yellow')}
                text="Alarma Amarilla"
                backgroundColor='#FFD600'
                foregroundColor='#000000'
            />

            <CustomButton
                onPress={() => openAlarmModal('green')}
                text="Alarma Verde"
                backgroundColor='#388E3C'
                foregroundColor='#FFFFFF'
            />

            <CustomButton
                onPress={callFamilyMember}
                text="Llamar a familiar"
            />

            <CustomButton
                onPress={handleConfigurationPressed}
                text="Configuración"
                type="tertiary"
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeAlarmModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Enviar Alarma {alarmType}</Text>
                    <CustomInput
                        placeholder="Mensaje"
                    />
                    <CustomButton
                        onPress={sendAlarm}
                        text="Enviar"
                    />
                    <CustomButton
                        onPress={closeAlarmModal}
                        text="Cancelar"
                        type="tertiary"
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: '70%',
        maxHeight: 200,
    },
});

export default FamilyMembersListScreen;
