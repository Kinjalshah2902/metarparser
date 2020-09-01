function reportSubmit()
{
	var input = document.getElementById('report');
	if(input)
	{
		parseReport(input.value);
	}
}
function parseReport(format){
	var formatParts = format.split(' ');
	var icao = formatParts[0];
	var timestamp = formatParts[1];
	var windinfo = formatParts[2];
	if(!timestamp.endsWith('Z'))
	{
		alert("Invalid date");
	}
	var dayOfMonth = timestamp.substring(0,2);
	if (dayOfMonth > 31)
	{
		alert("Invalid date");
	}
	var hours = timestamp.substring(2,4);
	var minutes = timestamp.substring(4,6);
	var direction = windinfo.substring(0,3);
	var speed = windinfo.substring(3,indexOfG);
	var indexOfG = windinfo.indexOf("G");
	var indexOfM = windinfo.indexOf("M");
	var indexOfK = windinfo.indexOf("K");
	var gusts;
	var unit;
	var windinfoLength = windinfo.Length;
	var avg = speed.length;
	if(indexOfG > -1)
	{
		speed = windinfo.substring(3, indexOfG);	
		gusts = windinfo.substring(indexOfG + 1, indexOfG + 3);	
		document.getElementById('gusts').value = gusts;
	}
	else
	{
		if (indexOfK > -1 )
		{
			speed = windinfo.substring(3, indexOfK);
			unit = windinfo.substring(indexOfK, windinfoLength - 1);
		}
		
		else if(indexOfM > -1)
		{
			unit = windinfo.substring(indexOfM, windinfoLength - 1);
			speed = windinfo.substring(3, indexOfM);
		}
	}
	if (indexOfM > -1 )
	{
		speed = speed / 2;
	}
	
	
	
	document.getElementById('airport').value = icao;
	document.getElementById('date').value = dayOfMonth;
	document.getElementById('time').value = hours;
	document.getElementById('mins').value = minutes;
	document.getElementById('direction').value = direction;
	document.getElementById('speed').value = speed;
	document.getElementById('unit').value = "KT";
	
}




