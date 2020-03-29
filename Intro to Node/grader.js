function average(arr, size)
{
	size = arr.length;
	var sum = 0;
	for(var i=0; i<size; i++)
	{
		sum+=arr[i];
	}
	var avg = sum/size;
	console.log(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 54, 73, 63, 95, 49];
average(scores2);
