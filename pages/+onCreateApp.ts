export { onCreateApp };

import type { OnCreateAppSync } from "vike-vue";
import { createI18n } from "vue-i18n";

import enUSMessages from "../locales/en-us.json";
import esMXMessages from "../locales/es-mx.json";

const onCreateApp: OnCreateAppSync = (
  pageContext
): ReturnType<OnCreateAppSync> => {
  const { app } = pageContext;
  const i18n = createI18n({
    locale: pageContext.locale,
    fallbackLocale: "en-us",
    messages: {
      "en-us": enUSMessages,
      "es-mx": esMXMessages,
    },
  });
  app.use(i18n);
};
