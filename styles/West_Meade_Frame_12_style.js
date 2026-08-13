var style_West_Meade_Frame_12 = function(feature, resolution) {

    var geom = feature.getGeometry();

    // Huge Web Mercator rectangle covering the world
    var outer = [
        [-20037508.34, -20037508.34],
        [ 20037508.34, -20037508.34],
        [ 20037508.34,  20037508.34],
        [-20037508.34,  20037508.34],
        [-20037508.34, -20037508.34]
    ];

    var inner;

    // Handle either Polygon or MultiPolygon
    if (geom.getType() === 'Polygon') {
        inner = geom.getCoordinates()[0];
    }
    else if (geom.getType() === 'MultiPolygon') {
        inner = geom.getCoordinates()[0][0];
    }
    else {
        return null;
    }

    var mask = new ol.geom.Polygon([
        outer,
        inner
    ]);

    return [
        new ol.style.Style({
            geometry: mask,
            fill: new ol.style.Fill({
                color: 'rgba(255,255,255,1.0)'
            }),
            stroke: null
        })
    ];
};