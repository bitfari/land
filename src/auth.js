import { AppConfig, UserSession, showConnect } from '@stacks/connect-react';
import { Buffer } from "@stacks/common";
import { Person } from '@stacks/profile';

global.Buffer = global.Buffer || Buffer;
const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Digital Land NFTs - Bitfari',
      icon: 'https://bitfari.com/assets/logo-hiro-wallet.png',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}
