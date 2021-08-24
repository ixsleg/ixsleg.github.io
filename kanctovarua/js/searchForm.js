function searchFormParameters(){
	document.forms.searchForm.method = "get";
	document.forms.searchForm.action = "";

	document.getElementById("btnSearchForm").addEventListener('click', submitForm);
}

function submitForm(){
	document.forms.searchForm.submit();
}