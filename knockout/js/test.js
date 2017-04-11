$(function(){
	ko.applyBindings(new ViewModel());
	
});
function ViewModel(){
    this.id=88;
    this.name=ko.observable("Apple");
};
