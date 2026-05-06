# MedicExpress

Sitio estatico independiente para el dominio `medicexpress.com.co`.

## Despliegue en Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Dominio principal: `https://medicexpress.com.co`
- Sitemap publico: `https://medicexpress.com.co/sitemap.xml`

## Desarrollo local

```bash
npm install
npm run dev
```

## Framework

- Astro para SEO, rutas estaticas y rendimiento.
- TypeScript para datos y rutas seguras.
- Tailwind CSS para sistema visual moderno y consistente.
- Lucide Astro para iconografia ligera.

## Regla SEO critica

Las rutas actuales deben mantenerse sin cambios para proteger la indexacion existente. Si una URL cambia en el futuro, debe existir una redireccion 301 equivalente en `_redirects`.

## Rol estrategico

MedicExpress funciona como marca satelite y canal de captacion. Su objetivo es atraer trafico organico cualificado y dirigirlo hacia los canales comerciales de SMD Vital mediante WhatsApp, llamadas, formularios y medicion con UTM.
