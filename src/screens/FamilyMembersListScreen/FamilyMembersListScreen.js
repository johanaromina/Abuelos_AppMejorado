import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const FamilyMembersListScreen = () => {
    const username = 'Juan';

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
        
    }

    return (
        <View>
            <Text>Configuración</Text>

            <CustomButton
                onPress={callHospital}
                text="Guardar"
                backgroundColor='#01579B'
                foregroundColor='#FFFFFF'
            />

            <CustomButton
                onPress={callFarmacy}
                text="Guardar"
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
        </View>
    )
}

export default FamilyMembersListScreen;