import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useStyles, useTheme} from '../../hooks';
import {Text} from '../Text';
import stylesheet from './styles';

export type HeaderProps = {
  showLogo?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: string;
};

export const HeaderScreen: React.FC<HeaderProps> = ({showLogo = true, left, right, title}) => {
  const {theme} = useTheme();
  const styles = useStyles(stylesheet);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <View style={styles.content}>
        {left}

        {showLogo && (
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/pepe-logo.png')} />
            {/* <AFKIcon color={theme.colors.text} width={96} height={16} /> */}
          </View>
        )}

        {title && (
          <View style={styles.title}>
            <Text weight="bold" color="textStrong" align="center" fontSize={18}>
              {title}
            </Text>
          </View>
        )}

        {right}

        {/* {right ?? (
          <View style={styles.buttons}>
            <IconButton icon="BellIcon" size={20} />
          </View>
        )} */}
      </View>
    </SafeAreaView>
  );
};
