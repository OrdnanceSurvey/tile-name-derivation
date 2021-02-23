// os-tile-name-derivation.js v0.2.0

window.os = window.os || {};

os.TileNameDerivation = {
    // Resolutions (metres per pixel) at each tile matrix zoom level.
    // _resolutions: [ 896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75, 0.875, 0.4375, 0.21875, 0.109375 ],

    // False origin for EPSG:27700 tileset.
    _origin: [ -238375.0, 1376256.0 ],

    /**
     * Return tile size (in metres) for the requested zoom level.
     * @param {integer} zoom - The tile matrix zoom level.
     */
    _getTileMeters: function(zoom) {
        // return 256 * this._resolutions[ zoom ];
        // return 256 * (896 / Math.pow(2, zoom));
        return 256 * (896 / (2 ** zoom));
    },

    /**
     * Return  X (tileCol) and Y (tileRow) from an input easting + northing.
     * @param {object} coordinates - The easting + northing to be transformed.
     * @param {integer} zoom - The tile matrix zoom level.
     */
    coordsToXY: function(coordinates, zoom) {
        var tileMeters = this._getTileMeters(zoom);

        var x = Math.floor((coordinates.ea - this._origin[0]) / tileMeters);
        var y = Math.floor((this._origin[1] - coordinates.no) / tileMeters);

        return { x: x, y: y };
    },

    /**
     * Return easting + northing from an input X (tileCol) and Y (tileRow).
     * @param {object} tile - The tile x + y to be transformed.
     * @param {integer} zoom - The tile matrix zoom level.
     */
    xyToCoords: function(tile, zoom) {
        var tileMeters = this._getTileMeters(zoom);

        var ea = this._origin[0] + (tile.x * tileMeters);
        var no = this._origin[1] - (tile.y * tileMeters);

        return { ea: ea, no: no };
    },
};
