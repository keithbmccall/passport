import React, {createContext, FC, useContext, useMemo, useState} from 'react';
import {Platform} from 'react-native';
import {Nullable} from './types';

type PlatformContextType = {
  device: {
    isIOS: Nullable<boolean>;
    isIpad: Nullable<boolean>;
  };
  isDarkMode: boolean;
};

const PlatformContext = createContext<PlatformContextType>({
  device: {
    isIOS: null,
    isIpad: null,
  },
  isDarkMode: true,
});

export const usePlatformContext = () => useContext(PlatformContext);

const getIsIOS = () => Platform.OS === 'ios';
const getIsIpad = () => Platform.OS === 'ios' && Platform.isPad;

export const PlatformContextProvider: FC = ({children}) => {
  const [isDarkMode] = useState(true);

  const value = useMemo(() => {
    return {
      device: {
        isIOS: getIsIOS(),
        isIpad: getIsIpad(),
      },
      isDarkMode,
    };
  }, [isDarkMode]);

  return (
    <PlatformContext.Provider value={value}>
      {children}
    </PlatformContext.Provider>
  );
};
