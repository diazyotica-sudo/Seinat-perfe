# Seinat Perfec — versión GRATIS

Proyecto Android privado para uso personal.

## Incluye
- 2 voces femeninas + 1 masculina mediante el motor TTS del teléfono.
- Diálogo automático por turnos.
- Pantalla de configuración para guardar la dirección de un motor local.
- Sin OpenAI, Higgsfield ni claves API para las voces.
- Preparado para conectar un motor de vídeo IA local gratuito (por ejemplo ComfyUI en un PC).

## Abrir en Android Studio
1. Descomprime `SeinatPerfec-GRATIS-AndroidStudio.zip`.
2. Abre Android Studio y selecciona la carpeta `SeinatPerfec`.
3. Espera la sincronización de Gradle.
4. Conecta tu Android por USB con Depuración USB o usa un emulador.
5. Pulsa **Run ▶**.
6. Para crear el APK: **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
7. Android Studio mostrará dónde quedó el APK, normalmente `app/build/outputs/apk/debug/app-debug.apk`.

## Voces
Las voces usan el motor de texto a voz instalado en Android. La app modifica tono/velocidad para distinguir Mujer 1, Mujer 2 y Hombre. El resultado exacto depende de las voces instaladas en el teléfono.

## Vídeo sin pagar
La app no llama a una API de vídeo de pago. Para generar vídeo IA sin pagar una API hay que ejecutar un motor local en un PC compatible. En la pantalla **Configuración** puedes guardar la dirección local para la futura conexión.

## Importante
Este proyecto fuente está preparado para Android Studio, pero el APK debe compilarse en un entorno con Android SDK/Gradle. No se debe colocar ninguna clave privada de API dentro del APK.
