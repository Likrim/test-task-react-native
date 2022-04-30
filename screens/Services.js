import React, {useState} from 'react'
import { View, StyleSheet, FlatList, Modal } from 'react-native';
import Service from '../components/Service';
import { ListOfServices } from '../data/ListOfServices';
import SelectedService from './SelectedService';

const Services = ({navigation, route}) => {
const ServicesList = ListOfServices;

    return(
        <View style={styles.mainBlock}>
            <Modal visible={false}><SelectedService service={ServicesList[0]}/></Modal>
            <FlatList 
                data={ServicesList}
                renderItem={({item}) => <Service service={item} 
                navigationStack={navigation} 
                tabNavigation={route.params.tabNavigation}
                setService={route.params.setService}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        backgroundColor: '#fff',
        flex: 1
    }
});

export default Services;