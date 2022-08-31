import React, { useState } from "react";
import { View, TouchableOpacity , FlatList } from 'react-native';
import { useSelector} from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Component
import PImage from '../../component/Image';
import PText from '../../component/Text'; 
import PModal from '../../component/Modal';
import PInput from '../../component/Input';
import CustomButton from '../../utils/CustomButton';
import PFlatList from '../../component/Flatlist';

// styles
import styles from './styles';
import { images } from '../../utils/Images';

export default Home = ( { navigation }) => {
  const { name , phone , email } = useSelector(state => state.userReducer);
  
  const [modalVisible, setModalVisible] = useState(false);

  const { goBack } = navigation;

  const _countryModal = () => {
    if(modalVisible === false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
  ];

  const renderItem = ({ item }) => {
    return(
      <PText 
        value={item.title}
        style={styles.nameText}
      />
    );
  };

  const schema = yup
  .object()
  .shape({
      about: yup.string().required('Please Write a short information about yourself'),
  })
  .required();

  const { control , handleSubmit , formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
      reValidateMode: 'onChange',
  });

  const setAbout = async (data) => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backBtn}>
        <PImage
            style={styles.backIcon}
            source={images.back}
        />
        <PText style={styles.backText} value={'Back'}/>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <PImage
            style={styles.profileIcon}
            source={require('../../assets/img/profile.png')}
        />
        <TouchableOpacity onPress={() => _countryModal()} style={styles.editImageContainer}>
          <PImage
                style={styles.editIcon}
                source={images.icons.edit}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentBox}>
        <PText 
          value={name}
          style={styles.nameText}
        />
      </View>
      <PText 
          value={phone+' - '+email}
          style={styles.subText}
      />
      <View style={styles.aboutMeCoutainer}>
        <View style={styles.seperator} />
        <PText 
          value={'SENIOR FULLSTACK DEVELOPER WEBSITE & MOBILE APPLICATION'}
          style={styles.roleText}
        />
        <PText 
            value={"I’m Professional Website and Mobile Developer. I describe myself as a passionate developer who loves coding, open-source, mobile apps, and the web platform. I have a Bachelor's Degree in Computer Science with an emphasis on Software Development from the University of Tehran. I have been a web developer for the last 12 years and have many great experiences with frontend and backend languages. Also, I use React Native for the last 5 years to develop mobile applications."}
            style={styles.aboutMe}
        />
        <View style={styles.seperator} />
        <TouchableOpacity onPress={() => _countryModal()} style={styles.editContainer}>
          <PImage
                style={styles.editIcon}
                source={images.icons.edit}
          />
        </TouchableOpacity>
        <PText 
          value={'QUALIFICATION SUMMARY'}
          style={styles.skillText}
        />
        <PFlatList
          data={DATA}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
      <PModal 
        visible={modalVisible} 
        event={_countryModal} 
        animationType={'slide'}
      >
        <PText 
          value={'Describe yourself'}
          style={styles.nameText}
        />
        <Controller
          control={control}
          name="about"
          render={({ field: { onChange, onBlur } }) => (
            <PInput
              style={styles.input}
              placeholder='Descrip yourself'
              placeholderTextColor="#696969"
              onChangeText={onChange}
              autoCapitalize={'words'}
              multiline={true}
              onBlur={onBlur}
              errorMessage={errors.about?.message}
            />
          )}
        />
        <CustomButton
          title='Update'
          color='#00BFFF'
          onPressFunction={handleSubmit(setAbout)}
          style={styles.aboutBtn}
        />
      </PModal>
    </View>
  );
}

