function readData(evt) {
//read data content inside id
var parsed = [];

if(document.getElementById('data').value!=''){
var data = document.getElementById('data').value;
//split the lines;
lines = data.split(/\n/);
var header = lines[0].split(/\t/);

	for (var i=1; i<lines.length-1; i++) {
		parsed[i-1] = lines[i].split(/\t/);
	
	}
	
drawTable(header, parsed) 
json_data = getJsonData(header, parsed);
}

}

function getJsonData(header, parsed) {
	var json_data = [];
	for (var i=1; i<lines.length-1; i++) {
			parsed[i-1] = lines[i].split(/\t/);
			
			//also create a json structure using the header
			
			if(parsed[i-1].length == header.length){
				json_data[i-1] = [];
				for (var p=0; p<parsed[i-1].length; p++) {
					//also clean the header
					var head = header[p].trim().replace(/ /,'_');
					json_data[i-1][head] = parsed[i-1][p];		
				}
			}
		
		}
		return json_data;
}

function drawTable(header, parsedData) {
	
	 //start by hiding the textarea
	 document.getElementById('data').style.display = 'none';
	
	var table = document.createElement('table');
	table.id = 'datatable';
	document.body.appendChild(table);
	//create tbody
	tbody = document.createElement('tbody');
	table.appendChild(tbody);

	//create the header
	var head_tr = document.createElement('tr');
	tbody.appendChild(head_tr);
	table.border = 1;
	for (var h=0; h<header.length; h++) {
		var htd = document.createElement('td');
		htd.setAttribute('style','background: blue; color: yellow');
		htd.innerHTML = header[h];
		head_tr.appendChild(htd);
		
	}
		
	//now for each line, create a td  with the value inside
	for (i = 0; i < parsedData.length; i++) {
	   	var tr = document.createElement('tr');
		tbody.appendChild(tr);

		for (var j=0; j<parsedData[i].length; j++) {
			var td = document.createElement('td');
			td.id = 'tr_'+i+'_td'+j;
			td.setAttribute('style','vertical-align:top');
			td.innerHTML = parsedData[i][j];
			tr.appendChild(td);
			
		}
		
	}
	
	return false;

}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}