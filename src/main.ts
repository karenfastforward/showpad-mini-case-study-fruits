import { Showpad } from '@showpad/experience-app-sdk';
import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'

import 'ant-design-vue/dist/antd.less'

interface Config extends Showpad.ConfigJSON {
  labels: {
    settings: {
      oauth: {
        client_id: Showpad.Label;
        client_secret: Showpad.Label;
        allowed_emails: Showpad.Label;
      };
    };
  };
}

const ERROR_PARSE_LABEL = 'Could not parse label value as array.';
const csvToArray = (csv: Showpad.Label): string[] => {
  try {
    return csv.value.replace(/\s/g, '').split(',');
  } catch (error) {
    throw new Error(ERROR_PARSE_LABEL);
  }
};

export const getShowpadInstance = async () => {
  const isAdmin = await Showpad.isAdmin()

  if(isAdmin) {
    return Showpad.getShowpadInstance('v3');
  } else {
    const { labels } = await Showpad.parseConfig<Config>();
    const { client_id, client_secret, allowed_emails } = labels.settings.oauth;
    const allowedEmails = csvToArray(allowed_emails);
    return Showpad.getShowpadOAuthInstanceInteractive(
      client_id.value,
      client_secret.value,
      allowedEmails,
      'v3'
    );
  }
}

const displaySuccessToast = (text: string): Promise<Showpad.ToastReason> =>
  Showpad.displayToast({
    type: 'success',
    text,
    actionText: 'dismiss',
  });

const main = async (): Promise<void> => {
  await Showpad.onShowpadLibLoaded();
  const app = createApp(App)
  try {
    const showpadInstance = await getShowpadInstance();
    await Showpad.createStore("Client-Store", showpadInstance);
    displaySuccessToast('Created Store');
  } catch (error) {
    Showpad.handleErrorWithToast(error);
  }
  app.use(Antd)
  app.mount('#app')
};

main()
