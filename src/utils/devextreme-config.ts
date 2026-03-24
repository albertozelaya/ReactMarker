const licenseKey = import.meta.env.VITE_DEVEXTREME_KEY;

import config from "devextreme/core/config";
import { loadMessages, locale } from "devextreme/localization";
import esMessages from "devextreme/localization/messages/es.json";

export function configureDevExtreme() {
  // Establece la clave de licencia
  config({ licenseKey });

  // Carga los mensajes de localización en español
  loadMessages(esMessages);

  // Configura el idioma predeterminado
  locale("es");
}
