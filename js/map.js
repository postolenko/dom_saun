if( document.getElementsByClassName("map-box")[0] ) {

			var map;

			var marker;
			var image = 'img/map_marker.png';

			var styles;

			function initMap() {

				var styles = [
						    {
						        "featureType": "administrative",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": "-100"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.province",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 65
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": "50"
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": "-100"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "all",
						        "stylers": [
						            {
						                "lightness": "30"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "all",
						        "stylers": [
						            {
						                "lightness": "40"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "hue": "#ffff00"
						            },
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -97
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -100
						            }
						        ]
						    }
						];


				var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});

				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.680000, lng: 37.5170273},
					// 55.677679,37.5414273
					scrollwheel: false,
					scaleControl: false,
					zoom: 14
				});

				marker = new google.maps.Marker({
					map: map,
					draggable: false,
					animation: google.maps.Animation.DROP,
					position: {lat: 55.677679, lng: 37.5414273},
					map: map,
					icon: image,
					title: 'Dom Saun'
				});

				marker.addListener('click', toggleBounce);

				//Associate the styled map with the MapTypeId and set it to display.
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');


			}

				function toggleBounce() {
				  if (marker.getAnimation() !== null) {
				    marker.setAnimation(null);
				  } else {
				    marker.setAnimation(google.maps.Animation.BOUNCE);
				  }
				}

		}



