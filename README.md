# Tile Name Derivation

Mathematical relationships which can be used to derive tile names (ZXY and WMTS) from coordinates at a particular zoom level and vice-versa.

## EPSG:27700 Tile Matrix Set

Any calculations will require the following inputs:

1. False origin for the tile matrix set.
```
originX = -238375.0
originY = 1376256.0
```

2. Tile size (in metres) for the requested zoom level.
```
tileMeters = 256 * resolution
```
NOTE: Tiles are 256 × 256 pixel PNG files.

| Zoom | Resolution (metres per pixel) | Tile Size (metres) |
| --- | --- | --- |
| 0 | 896.0 | 229376 |
| 1 | 448.0 | 114688 |
| 2 | 224.0| 57344 |
| 3 | 112.0 | 28672 |
| 4 | 56.0 | 14336 |
| 5 | 28.0 | 7168 |
| 6 | 14.0 | 3584 |
| 7 | 7.0 | 1792 |
| 8 | 3.5 | 896 |
| 9 | 1.75 | 448 |
| 10 | 0.875 | 224 |
| 11 | 0.4375 | 112 |
| 12 | 0.21875 | 56 |
| 13 | 0.109375 | 28 |

### Coordinates to XY

Formula to derive the X (*tileCol*) and Y (*tileRow*) for a map tile from a given coordinate:
```
x = floor((easting - originX) / tileMeters)
y = floor((originY - northing) / tileMeters)
```

Worked example:
```
easting = 337297
northing = 503695

zoom = 7

tileMeters = 256 * 7.0 = 1792

x = floor((337297 - -238375.0) / 1792) = 321
y = floor((1376256.0 - 503695) / 1792) = 486
```

### XY to Coordinates

Formula to derive a coordinate from a given X (*tileCol*) and Y (*tileRow*) for a map tile:
```
easting = originX + (x * tileMeters)
northing = originY - (y * tileMeters)
```

Worked example:
```
x = 321
y = 486

zoom = 7

tileMeters = 256 * 7.0 = 1792

easting = -238375.0 + (321 * 1792) = 336857
northing = 1376256.0 - (486 * 1792) = 505344
```
NOTE: Returned coordinate will always equate to top-left edge of tile.

## EPSG:3857 Tile Matrix Set

Please see the following [page](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Derivation_of_tile_names) on the OpenStreetMap Wiki for an implementation (with pseudo-code) for the Web Mercator projection .

## Licence

The contents of this repository are licensed under the [Open Government Licence 3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/)

![Logo](http://www.nationalarchives.gov.uk/images/infoman/ogl-symbol-41px-retina-black.png "OGL logo")
