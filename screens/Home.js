import React, {useState} from 'react';
import { View, ScrollView, Modal } from 'react-native';
import UserInfo from '../components/UserInfo';
import ChooseService from '../components/ChooseService';
import SelectedServiceInfo from '../components/SelectedServiceInfo';

const Home = ({route, navigation}) => {
    const[visible, setVisible] = useState(false);

    return(
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <ScrollView>
                <Modal visible={visible}>
                    <SelectedServiceInfo service={route.params.service} setVisible={setVisible}/>
                </Modal>
                <UserInfo routeToProfile={route}/>
                <ChooseService choosedService={route.params.service}
                    stackNavigation={route.params.stackNavigation}
                    tabNavigation={navigation}
                    setVisible={setVisible}
                />
            </ScrollView>
        </View>
    );
}

export default Home;