function winPrint(){
	bdhtml = window.document.body.innerHTML;
	startStr = "<!--startprint-->";
	endStr = "<!--endprint-->";
	prnhtml = bdhtml.substr(bdhtml.indexOf(startStr) + 17);
	prnhtml = prnhtml.substring(0,prnhtml.indexOf(endStr));
	window.document.body.innerHTML = prnhtml;
	window.print();
	window.document.body.innerHTML = bdhtml;
}
