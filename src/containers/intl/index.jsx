import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

const { locale, localeData, localeMessages } = window.__data;
addLocaleData(localeData);

export const intl = (child) => {
  return (
    <IntlProvider locale={locale} messages={localeMessages}>
      {child}
    </IntlProvider>
  );
};
