import {StyleSheet} from 'react-native';

import Metrics from '../../component/Metrics';
import {FontFamilies} from '../../component/Fonts';

export default StyleSheet.create({
  backBtn: {
    marginTop: Metrics.measure(50),
    flexDirection: 'row',
    borderBottomWidth: Metrics.measure(1),
    borderBottomColor: '#D3D3D3',
    marginLeft: Metrics.measure(15),
    marginRight: Metrics.measure(15),
    paddingBottom: Metrics.measure(10),
  },
  backIcon: {
    resizeMode: 'contain',
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    marginLeft: Metrics.measure(-10),
  },
  backText: {
    fontSize: Metrics.measure(16),
    color: '#000',
    marginTop: Metrics.measure(6),
    fontFamily: FontFamilies.regular,
    marginLeft: Metrics.measure(-3),
  },
  nameText: {
    fontSize: Metrics.measure(16),
    color: '#000',
    marginTop: Metrics.measure(5),
    fontFamily: FontFamilies.bold,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: Metrics.measure(16),
    color: '#ff8290',
    marginTop: Metrics.measure(5),
    fontFamily: FontFamilies.bold,
    textAlign: 'center',
  },
  subText: {
    fontSize: Metrics.measure(10),
    color: '#A9A9A9',
    marginTop: Metrics.measure(7),
    fontFamily: FontFamilies.regular,
    textAlign: 'center',
  },
  aboutMe: {
    fontSize: Metrics.measure(10),
    color: '#A9A9A9',
    marginTop: Metrics.measure(10),
    fontFamily: FontFamilies.regular,
    textAlign: 'justify',
    paddingLeft: Metrics.measure(15),
    paddingRight: Metrics.measure(15),
  },
  seperator: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    margin: Metrics.measure(15),
  },
  container: {
    flex: 1,
  },
  contentBox: {
    width: '100%',
    marginTop: Metrics.measure(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileIcon: {
    resizeMode: 'contain',
    width: Metrics.measure(70),
    height: Metrics.measure(70),
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.measure(30),
  },
  editContainer: {
    position: 'absolute',
    top: Metrics.measure(29),
    right: Metrics.measure(15),
    backgroundColor: '#DCDCDC',
    padding: Metrics.measure(5),
    borderRadius: Metrics.measure(12),
    overflow: 'hidden',
  },
  editIcon: {
    resizeMode: 'contain',
    width: Metrics.measure(14),
    height: Metrics.measure(14),
  },
  roleText: {
    fontSize: Metrics.measure(9),
    color: '#000',
    marginTop: Metrics.measure(5),
    fontFamily: FontFamilies.bold,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#DCDCDC',
    padding: Metrics.measure(10),
    marginTop: Metrics.measure(20),
    width: Metrics.measure(270),
    borderRadius: Metrics.measure(5),
    height: Metrics.measure(180),
    paddingTop: Metrics.measure(10),
  },
  aboutBtn: {
    width: Metrics.measure(270),
    marginTop: Metrics.measure(20),
  },
  skillText: {
    fontSize: Metrics.measure(9),
    color: '#000',
    marginTop: Metrics.measure(0),
    fontFamily: FontFamilies.bold,
    textAlign: 'center',
  },
  editImageContainer: {
    position: 'absolute',
    top: Metrics.measure(6),
    right: Metrics.measure(137),
    backgroundColor: '#DCDCDC',
    padding: Metrics.measure(5),
    borderRadius: Metrics.measure(12),
    overflow: 'hidden',
  },
  codingLanguageImg: {
    resizeMode: 'contain',
    width: Metrics.measure(35),
    height: Metrics.measure(35),
  },
  qualificationText: {
    fontSize: Metrics.measure(10),
    color: '#000',
    marginTop: Metrics.measure(5),
    fontFamily: FontFamilies.regular,
    textAlign: 'center',
  },
  qualificationBoxContainer: {
    margin: Metrics.measure(5),
    height: Metrics.measure(70),
    width: Metrics.measure(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: Metrics.measure(3),
  },
});
