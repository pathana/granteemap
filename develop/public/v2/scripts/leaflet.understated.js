/**
 * Leaflet.Understated
 * A Leaflet plugin to assist with US/Statebased maps 
 * which feature groups/grantees
 */
L.Understated = {
    /**
     * Reset map location and zoom
     */
    resetZoom: function( zoomLevel, coordinates ) {
        zoomLevel = zoomLevel || 4;
        coordinates = coordinates || [37.8, -96];
        map.setView(coordinates, zoomLevel );
    },

    /**
     * Reset the background colors of states
     */
    resetStateOpacity: function(stateData, mapSettings) {
        for (var stateKey in stateData) {
            // loop grantees in each state
            for (var i = 0, len = stateData[stateKey].grantees.length; i < len; i++) {
                fillOpacity = mapSettings.opacity.active;
            }

            $( ".state-" + stateKey  ).attr( 'fill-opacity', fillOpacity );
            $( ".state-" + stateKey  ).removeAttr( 'data-active' );
        }   
    },

    /**
     * Set the background fill color to the default for all states.  Takes into account the grantees count.
     */
    resetStateFill: function(stateData) {
        for (var stateKey in stateData) {
            var granteeCount = stateData[stateKey].grantees.length;
            var fillColor = getColor(granteeCount);
            $( ".state-" + stateKey  ).attr( 'fill', fillColor );
        }   
    },
    
    /**
     * Show all Grantees (after a dropdown select, for example)
     */
    showAllGrantees: function(granteeData) {
        $("#stateName").html("All Grantees");

        var granteesUl = '';
        for (var key in granteeData) {
            granteesUl = granteesUl + '<option value="' + key + '" data-group="' + key + '" data-key="'+key+'" data-op="addLayer">' + granteeData[key]['name'] + '</option>';
        }     
        $("#stateGrantees").html('<option value="all">All Grantees</option>' + granteesUl);
        $("#stateInfo").show();

        L.Understated.resetStateFill(stateData);
    }
}
