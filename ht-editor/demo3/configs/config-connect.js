//拓展ht.DataModel方法
ht.DataModel.prototype.connectInit = function() {
    var me = this;
    var dataSetList = me.getDataSet();
    if(dataSetList.length < 1){
    	return;
    }
    var O ='http://192.168.7.47:10000';
    var socket = io.connect(O);
    socket.on("connect", function() {
		console.log('连接')
	})
    
    socket.emit('explore',me.getDataSet(),document.cookie);
    
    socket.on("20456/data", function(data) {
    	var item = JSON.parse(data);
    	for(var i = 0; i < item.length; i++){
    		me.nodeReassignment(item[i]);
    	}
	})
    socket.on("disconnect", function() {
		console.log('断开')
	})
};
//获取图元上的数据集
ht.DataModel.prototype.getDataSet = function(){
	var me = this,dataSetList = [];
	me.each(function(data) {
    	var dataBindings = data.getDataBindings();
    	var dataSet = data.a('dataSet');
    	if (dataBindings && dataSet) {
    		for (var name in dataBindings.a) {
                var db = dataBindings.a[name];
                if(db.fieldName){
                	dataSetList.push(dataSet);
                }
            }
    	}
    })
	me.dataSetList = [];
	for(var i = 0; i < dataSetList.length; i++){
		if(me.dataSetList.indexOf(dataSetList[i]) == -1){
			me.dataSetList.push(dataSetList[i]);
		}
	}
	return me.dataSetList;
}
//获取绑定字段详情
ht.DataModel.prototype.getDataSetFiledInfo = function(){
	var me = this;
	var fieldList = []
	var dataSetList = me.dataSetList ? me.dataSetList : me.getDataSet();
	for(var i = 0; i < dataSetList.length; i++){
		var item = {
			dataSetId: dataSetList[i],
			bindingNode:[]
		}
		fieldList.push(item);
	}
	me.each(function(data) {
    	var dataBindings = data.getDataBindings();
    	var dataSet = data.a('dataSet');
    	if (dataBindings && dataSet) {
    		for (var name in dataBindings.a) {
                var db = dataBindings.a[name];
                if(db.fieldName){
                	for(var j = 0; j < fieldList.length; j++){
                		if(fieldList[j].dataSetId === dataSet){
                			var info = {
		                		propertyName : name,
		                		fieldName : db.fieldName,
		                		nodeId : data.getId()
		                	}
                			fieldList[j].bindingNode.push(info)
                		}
                	}
                }
            }
    	}
    })
	me.filedInfoList = fieldList;
	return fieldList;
}
//根据获取值刷新图元
ht.DataModel.prototype.nodeReassignment = function(data){
	var me = this;
	var infoList = me.filedInfoList ? me.filedInfoList : me.getDataSetFiledInfo();
	for(var i = 0; i < infoList.length; i++){
		if(data.id === infoList[i].dataSetId){
			var item = data.data;
			for(var k = 0; k < item.length; k++){
				if(infoList[i].bindingNode && infoList[i].bindingNode.length > 0){
					for(key in item[k]){
						for(var j = 0; j < infoList[i].bindingNode.length; j++){
							if(key === infoList[i].bindingNode[j].fieldName){
								var selNode = infoList[i].bindingNode[j];
								me.setDataValueById(selNode.nodeId,selNode.propertyName,item[k][key]);
							}
						}
					}
				}
			}
		}
	}
	data.dataSetId
}
//设置图元属性值
ht.DataModel.prototype.setDataValueById = function(id,name,value){
	if(!id && !name){
		return;
	}
	var me = this;
	var node = me.getDataById(id);
	node.a(name,value);
}
//根据name获取cookie
function getCookie(name) {
	var cookies = document.cookie;
	var list = cookies.split("; ");

	for(var i = 0; i < list.length; i++) {
		var arr = list[i].split("=");
		if(arr[0] == name){
			return decodeURIComponent(arr[1]);
		}
	}
  return "";
}