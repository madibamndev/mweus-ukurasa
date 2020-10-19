// Google Maps  

function initMap() {

            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: {
                    lat: -0.02355,
                    lng: 37.90619
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [{
                    lat: -1.29206,
                    lng: 36.82194
                },
                {
                    lat: -4.04347,
                    lng: 39.6682
                },
                {
                    lat: -0.0917,
                    lng: 34.76795
                },
                {
                    lat: 0.28273,
                    lng: 34.75186
                },
                {
                    lat: 0.56952,
                    lng: 34.55837
                },
                {
                    lat: 1.01908,
                    lng: 35.0023
                },
                {
                    lat: 3.31224,
                    lng: 35.56578
                },
                {
                    lat: 2.44264,
                    lng: 37.97845
                },
                {
                    lat: 3.57379,
                    lng: 40.95868
                },
                {
                    lat: -3.00229,
                    lng: 39.81674
                },
                {
                    lat: -4.05749,
                    lng: 39.15436
                },
                {
                    lat: -1.47698,
                    lng: 35.09277
                },
                {
                    lat: -1.33427,
                    lng: 36.77964
                },
                {
                    lat: -2.96442,
                    lng: 37.91111
                },
                {
                    lat: -2.65268,
                    lng: 37.26056
                },
                {
                    lat: -2.38472,
                    lng: 38.29333
                },
                {
                    lat: -1.01208,
                    lng: 36.62526
                },
                {
                    lat: -4.28501,
                    lng: 39.43084
                },
                {
                    lat: 0.62038,
                    lng: 36.08394
                },
                {
                    lat: -0.75577,
                    lng: 33.43835
                },
                {
                    lat: 3.62679,
                    lng: 36.00229
                },
                {
                    lat: 1.89818,
                    lng: 35.33389
                },
                {
                    lat: -1.42517,
                    lng: 38.05614
                },
                {
                    lat: -0.89786,
                    lng: 36.46812
                },
                {
                    lat: -1.27607,
                    lng: 36.81728
                },
                {
                    lat: -1.28883,
                    lng: 36.82323
                }
            ];

            var markers = locations.map(function (location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }