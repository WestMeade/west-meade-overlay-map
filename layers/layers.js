var wms_layers = [];


        var lyr_StreetMap_0 = new ol.layer.Tile({
            'title': 'Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_WestMeadeHillshades_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'West Meade Hillshades<br />\
    <img src="styles/legend/WestMeadeHillshades_1_0.png" /> 1<br />\
    <img src="styles/legend/WestMeadeHillshades_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/WestMeadeHillshades_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
        //    imageExtent: [-9676300.882646, 4312342.753007, -9669934.219866, 4318898.685146]
            imageExtent: [-9677514.986453, 4311734.852541, -9671799.683558, 4318600.187176] 
        })
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
                interactive: false,
                title: '<img src="styles/legend/TreeCanopy_2.png" /> Tree Canopy'
            });
var format_ElevationContours_3 = new ol.format.GeoJSON();
var features_ElevationContours_3 = format_ElevationContours_3.readFeatures(json_ElevationContours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElevationContours_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElevationContours_3.addFeatures(features_ElevationContours_3);
var lyr_ElevationContours_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElevationContours_3, 
                style: style_ElevationContours_3,
                popuplayertitle: 'Elevation Contours',
                interactive: true,
                title: '<img src="styles/legend/ElevationContours_3.png" /> Elevation Contours'
            });
var format_ProblemSoilAreas_4 = new ol.format.GeoJSON();
var features_ProblemSoilAreas_4 = format_ProblemSoilAreas_4.readFeatures(json_ProblemSoilAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProblemSoilAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProblemSoilAreas_4.addFeatures(features_ProblemSoilAreas_4);
var lyr_ProblemSoilAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProblemSoilAreas_4, 
                style: style_ProblemSoilAreas_4,
                popuplayertitle: 'Problem Soil Areas',
                interactive: true,
    title: 'Problem Soil Areas<br />\
    <img src="styles/legend/ProblemSoilAreas_4_0.png" /> BODINE-SULPHURA COMPLEX, 20 TO 50 PERCENT SLOPES<br />\
    <img src="styles/legend/ProblemSoilAreas_4_1.png" /> DELLROSE CHERTY SILT LOAM, 12 TO 20 PERCENT SLOPES<br />\
    <img src="styles/legend/ProblemSoilAreas_4_2.png" /> DELLROSE CHERTY SILT LOAM, 20 TO 40 PERCENT SLOPES<br />\
    <img src="styles/legend/ProblemSoilAreas_4_3.png" /> NEWARK SILT LOAM<br />\
    <img src="styles/legend/ProblemSoilAreas_4_4.png" /> TAFT SILT LOAM<br />' });
var format_WestMeadeLandslideRegions2010_5 = new ol.format.GeoJSON();
var features_WestMeadeLandslideRegions2010_5 = format_WestMeadeLandslideRegions2010_5.readFeatures(json_WestMeadeLandslideRegions2010_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestMeadeLandslideRegions2010_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestMeadeLandslideRegions2010_5.addFeatures(features_WestMeadeLandslideRegions2010_5);
var lyr_WestMeadeLandslideRegions2010_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestMeadeLandslideRegions2010_5, 
                style: style_WestMeadeLandslideRegions2010_5,
                popuplayertitle: 'West Meade Landslide Regions (2010)',
                interactive: false,
                title: '<img src="styles/legend/WestMeadeLandslideRegions2010_5.png" /> West Meade Landslide Regions (2010)'
            });
var format_WestMeadeSteepSlopes_6 = new ol.format.GeoJSON();
var features_WestMeadeSteepSlopes_6 = format_WestMeadeSteepSlopes_6.readFeatures(json_WestMeadeSteepSlopes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestMeadeSteepSlopes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestMeadeSteepSlopes_6.addFeatures(features_WestMeadeSteepSlopes_6);
var lyr_WestMeadeSteepSlopes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestMeadeSteepSlopes_6, 
                style: style_WestMeadeSteepSlopes_6,
                popuplayertitle: 'West Meade Steep Slopes',
                interactive: true,
    title: 'West Meade Steep Slopes<br />\
    <img src="styles/legend/WestMeadeSteepSlopes_6_0.png" /> 15-20<br />\
    <img src="styles/legend/WestMeadeSteepSlopes_6_1.png" /> 20-25<br />\
    <img src="styles/legend/WestMeadeSteepSlopes_6_2.png" /> >=25<br />' });
var format_LandslidesMay2010_7 = new ol.format.GeoJSON();
var features_LandslidesMay2010_7 = format_LandslidesMay2010_7.readFeatures(json_LandslidesMay2010_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandslidesMay2010_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslidesMay2010_7.addFeatures(features_LandslidesMay2010_7);
var lyr_LandslidesMay2010_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandslidesMay2010_7, 
                style: style_LandslidesMay2010_7,
                popuplayertitle: 'Landslides (May 2010)',
                interactive: true,
                title: '<img src="styles/legend/LandslidesMay2010_7.png" /> Landslides (May 2010)'
            });
var format_LandslidesMarch1975_8 = new ol.format.GeoJSON();
var features_LandslidesMarch1975_8 = format_LandslidesMarch1975_8.readFeatures(json_LandslidesMarch1975_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandslidesMarch1975_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandslidesMarch1975_8.addFeatures(features_LandslidesMarch1975_8);
var lyr_LandslidesMarch1975_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandslidesMarch1975_8, 
                style: style_LandslidesMarch1975_8,
                popuplayertitle: 'Landslides (March 1975)',
                interactive: true,
                title: '<img src="styles/legend/LandslidesMarch1975_8.png" /> Landslides (March 1975)'
            });
var format_WestMeadeOverlayParcelsIncluded_9 = new ol.format.GeoJSON();
var features_WestMeadeOverlayParcelsIncluded_9 = format_WestMeadeOverlayParcelsIncluded_9.readFeatures(json_WestMeadeOverlayParcelsIncluded_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestMeadeOverlayParcelsIncluded_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestMeadeOverlayParcelsIncluded_9.addFeatures(features_WestMeadeOverlayParcelsIncluded_9);
var lyr_WestMeadeOverlayParcelsIncluded_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestMeadeOverlayParcelsIncluded_9, 
                style: style_WestMeadeOverlayParcelsIncluded_9,
                popuplayertitle: 'West Meade Overlay Parcels Included',
                interactive: true,
    title: 'West Meade Overlay Parcels Included<br />\
    <img src="styles/legend/WestMeadeOverlayParcelsIncluded_9_0.png" /> false<br />\
    <img src="styles/legend/WestMeadeOverlayParcelsIncluded_9_1.png" /> true<br />' });
var lyr_WestMeadeOrthophoto2023_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'West Meade Orthophoto (2023)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/WestMeadeOrthophoto2023_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9676239.914500, 4312400.285300, -9669991.414500, 4318841.285300]
        })
    });
var format_BedrockFormationBoundaries2023_11 = new ol.format.GeoJSON();
var features_BedrockFormationBoundaries2023_11 = format_BedrockFormationBoundaries2023_11.readFeatures(json_BedrockFormationBoundaries2023_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BedrockFormationBoundaries2023_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BedrockFormationBoundaries2023_11.addFeatures(features_BedrockFormationBoundaries2023_11);
var lyr_BedrockFormationBoundaries2023_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BedrockFormationBoundaries2023_11, 
                style: style_BedrockFormationBoundaries2023_11,
                popuplayertitle: 'Bedrock Formation Boundaries (2023)',
                interactive: true,
                title: '<img src="styles/legend/BedrockFormationBoundaries2023_11.png" /> Bedrock Formation Boundaries (2023)'
            });
var format_West_Meade_Frame_12 = new ol.format.GeoJSON();
var features_West_Meade_Frame_12 = format_West_Meade_Frame_12.readFeatures(json_West_Meade_Frame_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_West_Meade_Frame_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_West_Meade_Frame_12.addFeatures(features_West_Meade_Frame_12);
var lyr_West_Meade_Frame_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_West_Meade_Frame_12, 
                style: style_West_Meade_Frame_12,
                popuplayertitle: 'West_Meade_Frame',
                interactive: false  //,
                //title: 'West_Meade_Frame'
            });
var format_West_Meade_Clip_Boundary_13 = new ol.format.GeoJSON();
var features_West_Meade_Clip_Boundary_13 = format_West_Meade_Clip_Boundary_13.readFeatures(json_West_Meade_Clip_Boundary_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_West_Meade_Clip_Boundary_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_West_Meade_Clip_Boundary_13.addFeatures(features_West_Meade_Clip_Boundary_13);
var lyr_West_Meade_Clip_Boundary_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_West_Meade_Clip_Boundary_13, 
                style: style_West_Meade_Clip_Boundary_13,
                popuplayertitle: 'West_Meade_Clip_Boundary',
                interactive: false  //,
                //title: '<img src="styles/legend/West_Meade_Clip_Boundary_13.png" /> West_Meade_Clip_Boundary'
            });

lyr_West_Meade_Frame_12.setZIndex(900);
lyr_West_Meade_Clip_Boundary_13.setZIndex(901);

lyr_StreetMap_0.setVisible(true);lyr_WestMeadeHillshades_1.setVisible(true);lyr_TreeCanopy_2.setVisible(false);lyr_ElevationContours_3.setVisible(true);lyr_ProblemSoilAreas_4.setVisible(false);lyr_WestMeadeLandslideRegions2010_5.setVisible(true);lyr_WestMeadeSteepSlopes_6.setVisible(true);lyr_LandslidesMay2010_7.setVisible(true);lyr_LandslidesMarch1975_8.setVisible(true);lyr_WestMeadeOverlayParcelsIncluded_9.setVisible(true);lyr_WestMeadeOrthophoto2023_10.setVisible(false);lyr_BedrockFormationBoundaries2023_11.setVisible(false);lyr_West_Meade_Frame_12.setVisible(true);lyr_West_Meade_Clip_Boundary_13.setVisible(true);
//var layersList = [lyr_StreetMap_0,lyr_WestMeadeHillshades_1,lyr_TreeCanopy_2,lyr_ElevationContours_3,lyr_ProblemSoilAreas_4,lyr_WestMeadeLandslideRegions2010_5,lyr_WestMeadeSteepSlopes_6,lyr_LandslidesMay2010_7,lyr_LandslidesMarch1975_8,lyr_WestMeadeOverlayParcelsIncluded_9,lyr_WestMeadeOrthophoto2023_10,lyr_BedrockFormationBoundaries2023_11,lyr_West_Meade_Frame_12,lyr_West_Meade_Clip_Boundary_13];
var layersList = [
    lyr_StreetMap_0,
    lyr_WestMeadeHillshades_1,
    lyr_TreeCanopy_2,
    lyr_ElevationContours_3,
    lyr_ProblemSoilAreas_4,
    lyr_WestMeadeLandslideRegions2010_5,
    lyr_WestMeadeSteepSlopes_6,
    lyr_LandslidesMay2010_7,
    lyr_LandslidesMarch1975_8,
    lyr_WestMeadeOverlayParcelsIncluded_9,
    lyr_WestMeadeOrthophoto2023_10,
    lyr_BedrockFormationBoundaries2023_11,
    lyr_West_Meade_Frame_12,
    lyr_West_Meade_Clip_Boundary_13
];
lyr_TreeCanopy_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Area': 'Area', });
lyr_ElevationContours_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_ProblemSoilAreas_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'MapUnitSymbol': 'MapUnutSymbol', 'MapUnitKey': 'MapUnitKey', 'MapUnitName': 'MapUnitName', 'SoilType': 'SoilType', 'SSSD': 'SSSD', 'Shape__Area': 'Shape__Area', });
lyr_WestMeadeLandslideRegions2010_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_WestMeadeSteepSlopes_6.set('fieldAliases', {'fid': 'fid', 'Category': 'Category', 'GlobalID': 'GlobalID', 'OBJECTID': 'OBJECTID', });
lyr_LandslidesMay2010_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Date_2': 'Date', });
lyr_LandslidesMarch1975_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DATE_slide': 'Date', });
lyr_WestMeadeOverlayParcelsIncluded_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'APN': 'APN', 'FeatureType': 'FeatureType', 'FloorOrder': 'Floor Order', 'UnitID': 'Unit ID', 'ParID': 'ParID', 'DateEst': 'DateEst', 'IsActive': 'IsActive', 'DateInact': 'DateInact', 'Tract': 'Tract', 'Council': 'Council', 'TaxDist': 'TaxDist', 'ParType': 'ParType', 'FeatureType': 'FeatureType', 'Owner': 'Owner', 'OwnDate': 'OwnDate', 'SaleCode': 'SaleCode', 'SaleSrc': 'SaleSrc', 'ValidSale': 'ValidSale', 'OwnInstr': 'OwnInstr', 'OwnAddr1': 'OwnAddr1', 'OwnAddr2': 'OwnAddr2', 'OwnAddr3': 'OwnAddr3', 'OwnCity': 'OwnCity', 'OwnState': 'OwnState', 'OwnCountry': 'OwnCountry', 'OwnZip': 'OwnZip', 'PropAddr': 'PropAddr', 'PropHouse': 'PropHouse', 'PropStreet': 'PropStreet', 'PropSuite': 'PropSuite', 'PropCity': 'PropCity', 'PropState': 'PropState', 'PropZip': 'PropZip', 'LegalDesc': 'LegalDesc', 'PropInstr': 'PropInstr', 'PropDate': 'PropDate', 'Front': 'Front', 'Side': 'Side', 'IsRegular': 'IsRegular', 'LUCode': 'LUCode', 'LUDesc': 'LUDesc', 'AssessDate': 'AssessDate', 'PropFraction': 'PropFraction', 'StatedArea': 'StatedArea', 'SalePrice': 'SalePrice', 'Acres': 'Acres', 'LandAppr': 'LandAppr', 'ImprAppr': 'ImprAppr', 'TotlAppr': 'TotlAppr', 'LandAssd': 'LandAssd', 'ImprAssd': 'ImprAssd', 'TotlAssd': 'TotlAssd', 'STANPAR': 'STANPAR', 'DeededAcreage': 'DeededAcreage', 'Zoning': 'Zoning', 'Shape.STArea()': 'Shape.STArea()', 'Shape.STLength()': 'Shape.STLength()', 'WebLabel': 'WebLabel', 'WestMeadeOverlay': 'In Overlay', });
lyr_BedrockFormationBoundaries2023_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Type': 'Type', 'IsConcealed': 'IsConcealed', 'LocationConfidenceMeters': 'LocationConfidenceMeters', 'ExistenceConfidence': 'ExistenceConfidence', 'IdentityConfidence': 'IdentityConfidence', 'Label': 'Label', 'Symbol': 'Symbol', 'DataSourceID': 'DataSourceID', 'Notes': 'Notes', 'ContactsAndFaults_ID': 'ContactsAndFaults_ID', });
lyr_West_Meade_Frame_12.set('fieldAliases', {'fid': 'fid', });
lyr_West_Meade_Clip_Boundary_13.set('fieldAliases', {'fid': 'fid', });
lyr_TreeCanopy_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Area': 'TextEdit', });
lyr_ElevationContours_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_ProblemSoilAreas_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'MapUnitSymbol': 'TextEdit', 'MapUnitKey': 'TextEdit', 'MapUnitName': 'TextEdit', 'SoilType': 'TextEdit', 'SSSD': 'TextEdit', 'Shape__Area': 'TextEdit', });
lyr_WestMeadeLandslideRegions2010_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_WestMeadeSteepSlopes_6.set('fieldImages', {'fid': '', 'Category': '', 'GlobalID': '', 'OBJECTID': '', });
lyr_LandslidesMay2010_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Date_2': 'TextEdit', });
lyr_LandslidesMarch1975_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'DATE_slide': 'TextEdit', });
lyr_WestMeadeOverlayParcelsIncluded_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'APN': 'TextEdit', 'FeatureType': 'TextEdit', 'FloorOrder': 'TextEdit', 'UnitID': 'TextEdit', 'ParID': 'TextEdit', 'DateEst': 'DateTime', 'IsActive': 'TextEdit', 'DateInact': 'DateTime', 'Tract': 'TextEdit', 'Council': 'TextEdit', 'TaxDist': 'TextEdit', 'ParType': 'TextEdit', 'FeatureType': 'TextEdit', 'Owner': 'TextEdit', 'OwnDate': 'DateTime', 'SaleCode': 'TextEdit', 'SaleSrc': 'TextEdit', 'ValidSale': 'TextEdit', 'OwnInstr': 'TextEdit', 'OwnAddr1': 'TextEdit', 'OwnAddr2': 'TextEdit', 'OwnAddr3': 'TextEdit', 'OwnCity': 'TextEdit', 'OwnState': 'TextEdit', 'OwnCountry': 'TextEdit', 'OwnZip': 'TextEdit', 'PropAddr': 'TextEdit', 'PropHouse': 'TextEdit', 'PropStreet': 'TextEdit', 'PropSuite': 'TextEdit', 'PropCity': 'TextEdit', 'PropState': 'TextEdit', 'PropZip': 'TextEdit', 'LegalDesc': 'TextEdit', 'PropInstr': 'TextEdit', 'PropDate': 'DateTime', 'Front': 'TextEdit', 'Side': 'TextEdit', 'IsRegular': 'TextEdit', 'LUCode': 'TextEdit', 'LUDesc': 'TextEdit', 'AssessDate': 'DateTime', 'PropFraction': 'TextEdit', 'StatedArea': 'TextEdit', 'SalePrice': 'TextEdit', 'Acres': 'TextEdit', 'LandAppr': 'TextEdit', 'ImprAppr': 'TextEdit', 'TotlAppr': 'TextEdit', 'LandAssd': 'TextEdit', 'ImprAssd': 'TextEdit', 'TotlAssd': 'TextEdit', 'STANPAR': 'TextEdit', 'DeededAcreage': 'TextEdit', 'Zoning': 'TextEdit', 'Shape.STArea()': 'TextEdit', 'Shape.STLength()': 'TextEdit', 'WebLabel': 'TextEdit', 'WestMeadeOverlay': 'CheckBox', });
lyr_BedrockFormationBoundaries2023_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Type': 'TextEdit', 'IsConcealed': 'TextEdit', 'LocationConfidenceMeters': 'TextEdit', 'ExistenceConfidence': 'ValueMap', 'IdentityConfidence': 'ValueMap', 'Label': 'TextEdit', 'Symbol': 'TextEdit', 'DataSourceID': 'TextEdit', 'Notes': 'TextEdit', 'ContactsAndFaults_ID': 'TextEdit', });
lyr_West_Meade_Frame_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_West_Meade_Clip_Boundary_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_TreeCanopy_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Area': 'hidden field', });
lyr_ElevationContours_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - visible with data', });
lyr_ProblemSoilAreas_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'MapUnitSymbol': 'hidden field', 'MapUnitKey': 'hidden field', 'MapUnitName': 'hidden field', 'SoilType': 'inline label - visible with data', 'SSSD': 'hidden field', 'Shape__Area': 'hidden field', });
lyr_WestMeadeLandslideRegions2010_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_WestMeadeSteepSlopes_6.set('fieldLabels', {'fid': 'hidden field', 'Category': 'inline label - visible with data', 'GlobalID': 'hidden field', 'OBJECTID': 'hidden field', });
lyr_LandslidesMay2010_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Date_2': 'inline label - visible with data', });
lyr_LandslidesMarch1975_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'DATE_slide': 'inline label - visible with data', });
lyr_WestMeadeOverlayParcelsIncluded_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'hidden field', 'APN': 'hidden field', 'FeatureType': 'hidden field', 'FloorOrder': 'hidden field', 'UnitID': 'hidden field', 'ParID': 'hidden field', 'DateEst': 'hidden field', 'IsActive': 'hidden field', 'DateInact': 'inline label - visible with data', 'Tract': 'inline label - visible with data', 'Council': 'inline label - visible with data', 'TaxDist': 'hidden field', 'ParType': 'inline label - visible with data', 'FeatureType': 'inline label - visible with data', 'Owner': 'hidden field', 'OwnDate': 'hidden field', 'SaleCode': 'hidden field', 'SaleSrc': 'hidden field', 'ValidSale': 'hidden field', 'OwnInstr': 'hidden field', 'OwnAddr1': 'hidden field', 'OwnAddr2': 'hidden field', 'OwnAddr3': 'hidden field', 'OwnCity': 'hidden field', 'OwnState': 'hidden field', 'OwnCountry': 'hidden field', 'OwnZip': 'hidden field', 'PropAddr': 'inline label - visible with data', 'PropHouse': 'hidden field', 'PropStreet': 'hidden field', 'PropSuite': 'hidden field', 'PropCity': 'hidden field', 'PropState': 'hidden field', 'PropZip': 'hidden field', 'LegalDesc': 'inline label - visible with data', 'PropInstr': 'hidden field', 'PropDate': 'hidden field', 'Front': 'hidden field', 'Side': 'hidden field', 'IsRegular': 'hidden field', 'LUCode': 'hidden field', 'LUDesc': 'hidden field', 'AssessDate': 'hidden field', 'PropFraction': 'hidden field', 'StatedArea': 'hidden field', 'SalePrice': 'hidden field', 'Acres': 'inline label - visible with data', 'LandAppr': 'hidden field', 'ImprAppr': 'hidden field', 'TotlAppr': 'hidden field', 'LandAssd': 'hidden field', 'ImprAssd': 'hidden field', 'TotlAssd': 'hidden field', 'STANPAR': 'hidden field', 'DeededAcreage': 'hidden field', 'Zoning': 'inline label - visible with data', 'Shape.STArea()': 'hidden field', 'Shape.STLength()': 'hidden field', 'WebLabel': 'hidden field', 'WestMeadeOverlay': 'inline label - visible with data', });
lyr_BedrockFormationBoundaries2023_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Type': 'inline label - visible with data', 'IsConcealed': 'hidden field', 'LocationConfidenceMeters': 'hidden field', 'ExistenceConfidence': 'hidden field', 'IdentityConfidence': 'hidden field', 'Label': 'inline label - visible with data', 'Symbol': 'hidden field', 'DataSourceID': 'hidden field', 'Notes': 'inline label - visible with data', 'ContactsAndFaults_ID': 'hidden field', });
lyr_West_Meade_Frame_12.set('fieldLabels', {'fid': 'hidden field', });
lyr_West_Meade_Clip_Boundary_13.set('fieldLabels', {'fid': 'hidden field', });
lyr_West_Meade_Clip_Boundary_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});