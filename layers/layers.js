var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Contours_1 = new ol.format.GeoJSON();
var features_Contours_1 = format_Contours_1.readFeatures(json_Contours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_1.addFeatures(features_Contours_1);
var lyr_Contours_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_1, 
                style: style_Contours_1,
                opacity: 1,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_1.png" /> Contours'
            });
var format_TreeCanopy_2 = new ol.format.GeoJSON();
var features_TreeCanopy_2 = format_TreeCanopy_2.readFeatures(json_TreeCanopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeCanopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeCanopy_2.addFeatures(features_TreeCanopy_2);
var lyr_TreeCanopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeCanopy_2, 
                style: style_TreeCanopy_2,
                popuplayertitle: 'Tree Canopy',
                interactive: true,
                title: '<img src="styles/legend/TreeCanopy_2.png" /> Tree Canopy'
            });
var lyr_West_Meade_Hillshade_Web_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'West_Meade_Hillshade_Web<br />\
    <img src="styles/legend/West_Meade_Hillshade_Web_3_0.png" /> 1<br />\
    <img src="styles/legend/West_Meade_Hillshade_Web_3_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/West_Meade_Hillshade_Web_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9676300.882646, 4312342.753007, -9669934.219866, 4318898.685146]
        })
    });
var lyr_West_Meade_2023_Ortho_Web_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'West_Meade_2023_Ortho_Web<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/West_Meade_2023_Ortho_Web_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9676239.914500, 4312400.285300, -9669991.414500, 4318841.285300]
        })
    });
var format_West_Meade_Overlay_Parcels_Flagged_5 = new ol.format.GeoJSON();
var features_West_Meade_Overlay_Parcels_Flagged_5 = format_West_Meade_Overlay_Parcels_Flagged_5.readFeatures(json_West_Meade_Overlay_Parcels_Flagged_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_West_Meade_Overlay_Parcels_Flagged_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_West_Meade_Overlay_Parcels_Flagged_5.addFeatures(features_West_Meade_Overlay_Parcels_Flagged_5);
var lyr_West_Meade_Overlay_Parcels_Flagged_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_West_Meade_Overlay_Parcels_Flagged_5, 
                style: style_West_Meade_Overlay_Parcels_Flagged_5,
                popuplayertitle: 'West_Meade_Overlay_Parcels_Flagged',
                interactive: true,
    title: 'West_Meade_Overlay_Parcels_Flagged<br />\
    <img src="styles/legend/West_Meade_Overlay_Parcels_Flagged_5_0.png" /> false<br />\
    <img src="styles/legend/West_Meade_Overlay_Parcels_Flagged_5_1.png" /> true<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Contours_1.setVisible(true);lyr_TreeCanopy_2.setVisible(true);lyr_West_Meade_Hillshade_Web_3.setVisible(true);lyr_West_Meade_2023_Ortho_Web_4.setVisible(true);lyr_West_Meade_Overlay_Parcels_Flagged_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Contours_1,lyr_TreeCanopy_2,lyr_West_Meade_Hillshade_Web_3,lyr_West_Meade_2023_Ortho_Web_4,lyr_West_Meade_Overlay_Parcels_Flagged_5];
lyr_Contours_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_TreeCanopy_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Area': 'Area', });
lyr_West_Meade_Overlay_Parcels_Flagged_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'APN': 'APN', 'FeatureType': 'FeatureType', 'FloorOrder': 'Floor Order', 'UnitID': 'Unit ID', 'ParID': 'ParID', 'DateEst': 'DateEst', 'IsActive': 'IsActive', 'DateInact': 'DateInact', 'Tract': 'Tract', 'Council': 'Council', 'TaxDist': 'TaxDist', 'ParType': 'ParType', 'Owner': 'Owner', 'OwnDate': 'OwnDate', 'SaleCode': 'SaleCode', 'SaleSrc': 'SaleSrc', 'ValidSale': 'ValidSale', 'OwnInstr': 'OwnInstr', 'OwnAddr1': 'OwnAddr1', 'OwnAddr2': 'OwnAddr2', 'OwnAddr3': 'OwnAddr3', 'OwnCity': 'OwnCity', 'OwnState': 'OwnState', 'OwnCountry': 'OwnCountry', 'OwnZip': 'OwnZip', 'PropAddr': 'PropAddr', 'PropHouse': 'PropHouse', 'PropStreet': 'PropStreet', 'PropSuite': 'PropSuite', 'PropCity': 'PropCity', 'PropState': 'PropState', 'PropZip': 'PropZip', 'LegalDesc': 'LegalDesc', 'PropInstr': 'PropInstr', 'PropDate': 'PropDate', 'Front': 'Front', 'Side': 'Side', 'IsRegular': 'IsRegular', 'LUCode': 'LUCode', 'LUDesc': 'LUDesc', 'AssessDate': 'AssessDate', 'PropFraction': 'PropFraction', 'StatedArea': 'StatedArea', 'SalePrice': 'SalePrice', 'Acres': 'Acres', 'LandAppr': 'LandAppr', 'ImprAppr': 'ImprAppr', 'TotlAppr': 'TotlAppr', 'LandAssd': 'LandAssd', 'ImprAssd': 'ImprAssd', 'TotlAssd': 'TotlAssd', 'STANPAR': 'STANPAR', 'DeededAcreage': 'DeededAcreage', 'Zoning': 'Zoning', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', 'WebLabel': 'WebLabel', 'WestMeadeOverlay': 'In Overlay', });
lyr_Contours_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_TreeCanopy_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Area': 'TextEdit', });
lyr_West_Meade_Overlay_Parcels_Flagged_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'APN': 'TextEdit', 'FeatureType': 'TextEdit', 'FloorOrder': 'TextEdit', 'UnitID': 'TextEdit', 'ParID': 'TextEdit', 'DateEst': 'DateTime', 'IsActive': 'TextEdit', 'DateInact': 'DateTime', 'Tract': 'TextEdit', 'Council': 'TextEdit', 'TaxDist': 'TextEdit', 'ParType': 'TextEdit', 'Owner': 'TextEdit', 'OwnDate': 'DateTime', 'SaleCode': 'TextEdit', 'SaleSrc': 'TextEdit', 'ValidSale': 'TextEdit', 'OwnInstr': 'TextEdit', 'OwnAddr1': 'TextEdit', 'OwnAddr2': 'TextEdit', 'OwnAddr3': 'TextEdit', 'OwnCity': 'TextEdit', 'OwnState': 'TextEdit', 'OwnCountry': 'TextEdit', 'OwnZip': 'TextEdit', 'PropAddr': 'TextEdit', 'PropHouse': 'TextEdit', 'PropStreet': 'TextEdit', 'PropSuite': 'TextEdit', 'PropCity': 'TextEdit', 'PropState': 'TextEdit', 'PropZip': 'TextEdit', 'LegalDesc': 'TextEdit', 'PropInstr': 'TextEdit', 'PropDate': 'DateTime', 'Front': 'TextEdit', 'Side': 'TextEdit', 'IsRegular': 'TextEdit', 'LUCode': 'TextEdit', 'LUDesc': 'TextEdit', 'AssessDate': 'DateTime', 'PropFraction': 'TextEdit', 'StatedArea': 'TextEdit', 'SalePrice': 'TextEdit', 'Acres': 'TextEdit', 'LandAppr': 'TextEdit', 'ImprAppr': 'TextEdit', 'TotlAppr': 'TextEdit', 'LandAssd': 'TextEdit', 'ImprAssd': 'TextEdit', 'TotlAssd': 'TextEdit', 'STANPAR': 'TextEdit', 'DeededAcreage': 'TextEdit', 'Zoning': 'TextEdit', 'Shape.STArea()': 'TextEdit', 'Shape.STLength()': 'TextEdit', 'WebLabel': 'TextEdit', 'WestMeadeOverlay': 'CheckBox', });
lyr_Contours_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_TreeCanopy_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_West_Meade_Overlay_Parcels_Flagged_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'APN': 'hidden field', 'FeatureType': 'hidden field', 'FloorOrder': 'hidden field', 'UnitID': 'hidden field', 'ParID': 'hidden field', 'DateEst': 'hidden field', 'IsActive': 'hidden field', 'DateInact': 'hidden field', 'Tract': 'hidden field', 'Council': 'inline label - visible with data', 'TaxDist': 'hidden field', 'ParType': 'hidden field', 'Owner': 'hidden field', 'OwnDate': 'hidden field', 'SaleCode': 'hidden field', 'SaleSrc': 'hidden field', 'ValidSale': 'hidden field', 'OwnInstr': 'hidden field', 'OwnAddr1': 'hidden field', 'OwnAddr2': 'hidden field', 'OwnAddr3': 'hidden field', 'OwnCity': 'hidden field', 'OwnState': 'hidden field', 'OwnCountry': 'hidden field', 'OwnZip': 'hidden field', 'PropAddr': 'inline label - visible with data', 'PropHouse': 'hidden field', 'PropStreet': 'hidden field', 'PropSuite': 'hidden field', 'PropCity': 'hidden field', 'PropState': 'hidden field', 'PropZip': 'hidden field', 'LegalDesc': 'inline label - visible with data', 'PropInstr': 'hidden field', 'PropDate': 'hidden field', 'Front': 'hidden field', 'Side': 'hidden field', 'IsRegular': 'hidden field', 'LUCode': 'hidden field', 'LUDesc': 'hidden field', 'AssessDate': 'hidden field', 'PropFraction': 'hidden field', 'StatedArea': 'hidden field', 'SalePrice': 'hidden field', 'Acres': 'inline label - visible with data', 'LandAppr': 'hidden field', 'ImprAppr': 'hidden field', 'TotlAppr': 'hidden field', 'LandAssd': 'hidden field', 'ImprAssd': 'hidden field', 'TotlAssd': 'hidden field', 'STANPAR': 'hidden field', 'DeededAcreage': 'hidden field', 'Zoning': 'inline label - visible with data', 'Shape.STArea()': 'hidden field', 'Shape.STLength()': 'hidden field', 'WebLabel': 'no label', 'WestMeadeOverlay': 'no label', });
lyr_West_Meade_Overlay_Parcels_Flagged_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});