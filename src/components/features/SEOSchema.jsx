import React from 'react';
import { WHATSAPP_NUMBER } from '../../constants/data';

const SEOSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Pizza Station",
      "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "servesCuisine": "Pizza",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "telephone": WHATSAPP_NUMBER
    })}
  </script>
);

export default SEOSchema;
