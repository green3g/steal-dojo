# steal-dojo
A simple dojo loader for stealjs

# Synposis 

```bash
npm install steal steal-tools https://github.com/roemhildtg/steal-dojo.git --save
```

```html
<!-- index.html -->
<div id="map"></div>
<script src="https://js.arcgis.com/3.20/"></script>
<script src="./node_modules/steal/steal.js" data-main="main"></script>
```

```javascript
// main.js
import EsriMap from 'esri/map!steal-dojo';
var map = new Map("map", {
    center: [-118, 34.5],
    zoom: 8,
    basemap: "topo"
  });
```
