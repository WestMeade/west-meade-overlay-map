var size = 0;
var placement = 'point';

var style_WestMeadeOverlayParcelsIncluded_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("WebLabel") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get("WebLabel"));
    }
    
        function rules_WestMeadeOverlayParcelsIncluded_9(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_WestMeadeOverlayParcelsIncluded_9rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(50,50,50,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_WestMeadeOverlayParcelsIncluded_9rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(50,50,50,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5}),fill: new ol.style.Fill({color: 'rgba(0,0,255,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_WestMeadeOverlayParcelsIncluded_9(feature, value);
        ;

    return style;
};
