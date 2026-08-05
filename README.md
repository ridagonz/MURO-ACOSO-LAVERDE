# Muro de Acoso de Jorge Eliécer Laverde

Código fuente editable del sitio **Muro de Acoso de Jorge Eliécer Laverde**.

## Requisitos

- Visual Studio Code
- Node.js 22.13 o posterior
- npm (incluido con Node.js)

## Abrir y ejecutar en Visual Studio Code

1. Descomprime el archivo ZIP.
2. En Visual Studio Code, elige **Archivo → Abrir carpeta** y selecciona esta carpeta.
3. Abre **Terminal → Nueva terminal**.
4. Instala las dependencias:

   ```bash
   npm install
   ```

5. Inicia el sitio local:

   ```bash
   npm run dev
   ```

6. Abre en el navegador la dirección `http://localhost:3000` o la dirección que muestre la terminal.

## Dónde editar

- `app/page.tsx`: textos, enlaces, secciones y contenido principal.
- `app/globals.css`: colores, tipografía, diseño adaptable y animaciones.
- `app/components/ImageUploader.tsx`: interfaz para cargar imágenes.
- `app/api/uploads/route.ts`: lectura y almacenamiento de imágenes.
- `public/`: fotografías, capturas, favicon y otros recursos públicos.
- `app/layout.tsx`: título y descripción que aparecen en el navegador y buscadores.

## Comandos útiles

```bash
npm run dev      # servidor local con actualización automática
npm run build    # comprueba que el sitio puede compilarse
npm test         # compila y ejecuta las pruebas del proyecto
npm run lint     # revisa el código
```

## Carga de imágenes

El proyecto declara un almacenamiento R2 con el nombre `UPLOADS`. Durante el desarrollo local, Wrangler crea una copia local dentro de `.wrangler/`; esas imágenes no son las mismas que ya estén guardadas en la versión publicada.

## Publicación

El archivo `.openai/hosting.json` vincula este código con el proyecto existente de Sites. Conserva el valor de `project_id` si deseas seguir publicando sobre el mismo sitio.

No subas archivos `.env` ni credenciales al repositorio.
