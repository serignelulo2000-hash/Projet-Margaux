var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Enseignes_1 = new ol.format.GeoJSON();
var features_Enseignes_1 = format_Enseignes_1.readFeatures(json_Enseignes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Enseignes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enseignes_1.addFeatures(features_Enseignes_1);
var lyr_Enseignes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enseignes_1, 
                style: style_Enseignes_1,
                popuplayertitle: 'Enseignes',
                interactive: true,
                title: '<img src="styles/legend/Enseignes_1.png" /> Enseignes'
            });
var format_Limitescom_2 = new ol.format.GeoJSON();
var features_Limitescom_2 = format_Limitescom_2.readFeatures(json_Limitescom_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitescom_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescom_2.addFeatures(features_Limitescom_2);
var lyr_Limitescom_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitescom_2, 
                style: style_Limitescom_2,
                popuplayertitle: 'Limites com',
                interactive: true,
                title: 'Limites com'
            });
var group_ImagesSatellitePhotosar = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'Images Satellite &  Photos aér.'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Enseignes_1.setVisible(true);lyr_Limitescom_2.setVisible(true);
var layersList = [group_ImagesSatellitePhotosar,lyr_Enseignes_1,lyr_Limitescom_2];
lyr_Enseignes_1.set('fieldAliases', {'id': 'id', 'Raison soc': 'Raison soc', 'adresse': 'adresse', 'cp': 'cp', 'nom': 'nom', 'effec': 'effec', 'tel': 'tel', 'ville': 'ville', 'email': 'email', });
lyr_Limitescom_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'cdcomm': 'cdcomm', 'population': 'population', 'surface_ha': 'surface_ha', 'siren_epci': 'siren_epci', 'nom_epci': 'nom_epci', });
lyr_Enseignes_1.set('fieldImages', {'id': 'TextEdit', 'Raison soc': 'TextEdit', 'adresse': 'TextEdit', 'cp': 'Range', 'nom': 'TextEdit', 'effec': 'TextEdit', 'tel': 'TextEdit', 'ville': 'TextEdit', 'email': 'TextEdit', });
lyr_Limitescom_2.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'cdcomm': 'TextEdit', 'population': 'Range', 'surface_ha': 'Range', 'siren_epci': 'TextEdit', 'nom_epci': 'TextEdit', });
lyr_Enseignes_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Raison soc': 'inline label - visible with data', 'adresse': 'inline label - visible with data', 'cp': 'inline label - visible with data', 'nom': 'inline label - visible with data', 'effec': 'inline label - visible with data', 'tel': 'inline label - visible with data', 'ville': 'inline label - visible with data', 'email': 'inline label - visible with data', });
lyr_Limitescom_2.set('fieldLabels', {'fid': 'no label', 'nom': 'inline label - visible with data', 'cdcomm': 'no label', 'population': 'no label', 'surface_ha': 'no label', 'siren_epci': 'no label', 'nom_epci': 'no label', });
lyr_Limitescom_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});