(function(global){
	var companyMap;
	companyMap = global.mapPage = {};
	companyMap = {
		map:null
	}
})(this);

function mapPageInt(){
	companyMap.map = new BMap.Map("companyMap");
	companyMap.map.enableScrollWheelZoom();
	//地图定位
	var point = new BMap.Point(118.1951,24.532547);
	//119.275161, 26.029327
	companyMap.map.centerAndZoom(point, 12);
	var infoWindow = new BMap.InfoWindow(document.getElementById("map-address0").innerHTML);
	var marker = new BMap.Marker(point);
	marker.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow);
	});
	companyMap.map.addOverlay(marker);
}