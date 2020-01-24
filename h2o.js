
         
         // Creating map options
            var mapOptions = {
                center: [22.7268, 75.8720],
                zoom: 12
            }
         
         // Creating a map object
            var map = new L.map('map', mapOptions);

        // Creating a Layer object
         var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         

         


         // Adding layer to the map
         map.addLayer(layer);

         // Creating latlng object
         var latlngs = [
            [22.685353, 75.873350],
            [22.7062143, 75.8597481],
            [22.7287579, 75.8688841],
            [22.7562091, 75.8724259],
         ];

         // Creating a poly line
         var polyline = L.polyline(latlngs, {color: 'blue'});

         // Adding to poly line to map
         polyline.addTo(map);
        

        // Icon options
        var iconOptions = {
            iconUrl: 'eplogo.png',
            iconSize: [40, 40]
         }
         





            // Icon options
         var iconOptions2 = {
            iconUrl: 'mpicon.png',
            iconSize: [40, 40]
         }
         // Creating a custom icon
         var customIcon = L.icon(iconOptions); 
         var customIcon2 = L.icon(iconOptions2)


         // Options for the marker
         var markerOptions = {
            clickable: true,
            //draggable: true,
           icon: customIcon,            
            }
         
            // Options for the marker
         var markerOptions1 = {
            clickable: true,
            draggable: true,            
            }
            // Options for the marker
                var markerOptions2 = {
                clickable: true,
                //draggable: true,
                icon: customIcon2,            
                }
         // Adding layer to the map
         map.addLayer(layer);
          // Creating a marker
          var marker = L.marker([22.6868, 75.8715], markerOptions);
          var marker1 = L.marker([22.756209, 75.872426], markerOptions1)
          var marker2 = L.marker([22.7590242,75.8686152],markerOptions2)

         

         
         // Adding marker to the map
         // marker.addTo(map);
         // marker1.addTo(map);
         // marker2.addTo(map);
         

         // Adding popup to the marker
         marker.bindPopup('Engineer Philosophy').openPopup();
         // marker.addTo(map); // Adding marker to the map
         marker1.bindPopup('Home').openPopup();
         // marker1.addTo(map); // Adding marker to the map
         marker2.bindPopup('Micro Parcel').openPopup();
         // marker2.addTo(map);
    
      
         
         // Creating latlng object
         var latlngs = [
            [22.705044, 75.871671],
            [22.726174, 75.872015],
            [22.736816, 75.883482]
         ];
         // Creating a polygon
         var polygon = L.polygon(latlngs, {color: 'red'});
         
         // Adding to polygon to map
         polygon.addTo(map);

         var rectOptions = {color: 'GReen', weight: 1}   // Creating rectOptions
        
         // Creating a rectangle
         var rectangle = L.rectangle(latlngs, rectOptions);
         rectangle.addTo(map);   // Adding to rectangle to map
    

         // Creating feature group
         var featureGroup = L.featureGroup([marker, marker1, marker2, polygon]);
         featureGroup.setStyle({color:'blue',opacity:.5});
         featureGroup.bindPopup("Feature Group");
         featureGroup.addTo(map);      // Adding layer group to map

         // Creating a circle
      var circle = L.circle([22.6868, 75.8715], 5000, {color: 'red', fillColor:'#f03', fillOpacity:0.2} );

            var addCircle = function(){
               // Adding circle to the layer group
               featureGroup.addLayer(circle);

            }
         
            

            var removeCircle = function(){
            
            // Removing layer from map
            featureGroup.removeLayer(circle);         

            }
           //On click 
            map.on("click", function(e)
            {
               new L.Marker([e.latlng.lat, e.latlng.lng], markerOptions1).addTo(map);
            })


            // Attribution options
         var attrOptions = {
            prefix: 'IGISMAPS'
         };
         
         // Creating an attribution
         var attr = L.control.attribution(attrOptions);
         attr.addTo(map);  // Adding attribution to the map