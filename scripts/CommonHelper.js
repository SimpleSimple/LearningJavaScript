// a=[1,2,3];
// delete a[1];

// console.log(1 in a);
// console.log(a.length);

//window.String = 


function $$(id){
	debugger
	return typeof id === 'String'?document.getElementById(id):'';
}

function getFileSize(byteSize){	
	return byteSize/1024+'KB';
}


var formatDateTime = function(datetime1){
	
}

String.prototype={
	isNullOrEmpty: function(val){
		if(!val || val.length==0 || val == null){
			return false;
		}
		return true;
	}

};


function Student(props){
	this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function(){
	alert('Hello,' + this.name+'!');
}
