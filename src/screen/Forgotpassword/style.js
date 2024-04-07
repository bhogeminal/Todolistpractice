import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    marginTop: moderateVerticalScale(64),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lockIconContainer: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(30),
  },
  lockIconText: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(30),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: colors.grayText,
  },
  inputContainer: {
    marginBottom: moderateVerticalScale(30),
  },
  buttonContainer: {
    alignItems: 'center',
  },
  sendButton: {
    width: moderateScale(120),
    height: moderateVerticalScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: colors.primary,
  },
});

export default styles;
