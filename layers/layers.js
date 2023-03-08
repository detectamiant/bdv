var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_positiusbarberdelvalls_1 = new ol.format.GeoJSON();
var features_positiusbarberdelvalls_1 = format_positiusbarberdelvalls_1.readFeatures(json_positiusbarberdelvalls_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positiusbarberdelvalls_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positiusbarberdelvalls_1.addFeatures(features_positiusbarberdelvalls_1);
var lyr_positiusbarberdelvalls_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_positiusbarberdelvalls_1, 
                style: style_positiusbarberdelvalls_1,
                interactive: true,
                title: '<img src="styles/legend/positiusbarberdelvalls_1.png" /> positius barberà del vallès'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_positiusbarberdelvalls_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_positiusbarberdelvalls_1];
lyr_positiusbarberdelvalls_1.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'heightBelowGround': 'heightBelowGround', 'heightBelowGround_uom': 'heightBelowGround_uom', 'numberOfFloorsBelowGround': 'numberOfFloorsBelowGround', 'layer': 'layer', 'path': 'path', });
lyr_positiusbarberdelvalls_1.set('fieldImages', {'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'numberOfFloorsAboveGround': 'Range', 'heightBelowGround': 'Range', 'heightBelowGround_uom': 'TextEdit', 'numberOfFloorsBelowGround': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_positiusbarberdelvalls_1.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'numberOfFloorsAboveGround': 'no label', 'heightBelowGround': 'no label', 'heightBelowGround_uom': 'no label', 'numberOfFloorsBelowGround': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_positiusbarberdelvalls_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});