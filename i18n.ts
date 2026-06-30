import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async (context) => {
  // Support both next-intl 3.x (locale) and 4.x (requestLocale)
  const resolvedLocale = await (context.locale || context.requestLocale);
  const locale = resolvedLocale || 'fr';
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
