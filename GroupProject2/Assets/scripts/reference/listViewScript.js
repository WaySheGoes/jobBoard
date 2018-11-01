//This script is used in viewRequests.php
jQuery(document).ready(function(){
	//Delegated Event Handler for table row clicks
	$("table").on("click", "tr", function(){
		var url = $(this).data('href');
		//Retrieves Type/Status from inputs
		var type = $("#type").val();
		var status = $('#status').val();
		//Builds url with GET attributes to be used for querying records
		var appendedUrl = url + "&type=" + type + "&status=" + status;
		//Sets window to appendedUrl
		window.location.href = appendedUrl;
	});

	//Event handler
	$(".selector").change(function(){
		//Gets type and status from input fields
		var type = $("#type").val();
		var status = $("#status").val();

		//URL for individual record
		var url = "ajaxSelectRecords.php?type=" + type + "&status=" + status;

		//Instantiating AJAX request object
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function(){
			//When request state is "4: request finished and 
			//response is ready" and status is "200: "OK""
			if(this.readyState == 4 && this.status == 200){
				//Store 
				var response = this.responseText;
				//Removes the trailing comma
				var response = response.slice(0, -1);
				//Split response into array at comment
				var response = response.split(",");
				//First index of response is record type (new/exiting)
				//and the rest is fields to be parsed
				buildHeader(response[0]);
				//Pass in type and fields
				buildTable(response[0], response);
			}
		};
		//This bit I don't understand. It submits the request to the server
		//but it seems as though it should occur before the status check - who knows
		xmlHttp.open("GET", url, true);
		xmlHttp.send();
	});

	function buildHeader(type){
		//Table head row stored in variable
		var tableHead = $("table thead tr");
		//empty() is a jQuery
		tableHead.empty();
		//Builds header based on record type
		if(type == "new"){
			//Appends elements to the bottom of the table head row
			tableHead.append("<th scope='col'>ID</th>");
			tableHead.append("<th scope='col'>Name</th>");
			tableHead.append("<th scope='col'>Title</th>");
			tableHead.append("<th scope='col'>Department</th>");
			tableHead.append("<th scope='col'>Created Date</th>");
		}
		else if(type == "exiting"){
			//Appends elements to the bottom of the table head row
			tableHead.append("<th scope='col'>ID</th>");
			tableHead.append("<th scope='col'>Name</th>");
			tableHead.append("<th scope='col'>Created Date</th>");
			tableHead.append("<th scope='col'>Exit Date</th>");
			tableHead.append("<th scope='col'>Location</th>");
		}
	}
	
	function buildTable(type, response){
		//Base url for all records, attributes to be appended for GET
		var recordURLBase = 'http://localhost/projects/userRequestsMockup/requestRecord.php/?id=';
		//Store tbody element in variable
		var tableBody = $("tbody");
		//and remove child elements with empty()
		tableBody.empty();

		if(type == "new"){
			//Loops through the response and appends each record as a row
			//with it's individual record url stored in data-href attr
			var i = 1;
			while(i < response.length){
				tableBody.append("<tr class='clickable-row' data-href='" 
					+ recordURLBase + response[i] + '&name=' + response[i+1] 
					+ "'><td><b>"+ response[i] +"</b></td><td>"+ response[i+1] +"</td><td>"+ response[i+2] +"</td><td>" + response[i+3] + "</td><td>" + response[i+4] + "</td></tr>");
				//Advance by 5 because there are 5 attributes/record
				i = i + 5;
			}			
		}else if(type == "exiting"){
			//Loops through the response and appends each record as a row
			//with it's individual record url stored in data-href attr
			var i = 1;
			while(i < response.length){
				tableBody.append("<tr class='clickable-row' data-href='" 
					+ recordURLBase + response[i] + '&name=' + response[i+1] 
					+ "'><td><b>"+ response[i] +"</b></td><td>"+ response[i+1] 
					+ "</td><td>"+ response[i+2] +"</td><td>" + response[i+3] 
					+ "</td><td>" + response[i+4] + "</td></tr>");
				//Advance by 5 because there are 5 attributes/record
				i = i + 5;
			}
		}
	}
});