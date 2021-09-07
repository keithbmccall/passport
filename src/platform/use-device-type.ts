import {usePlatformContext} from './context';

export const useDeviceType = () => {
  return usePlatformContext()?.device;
};
