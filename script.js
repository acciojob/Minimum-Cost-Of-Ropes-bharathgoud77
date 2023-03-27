function calculateMinCost() {
  var ropeLstr = document.querySelector("#rope-lengths").value;
	var ropeLarr = ropeLstr.split(",");
	 var n = ropeLarr.length;

	for (let i = 0; i < n; i++) {
		ropeLarr[i] = Number(ropeLarr[i]) ; 
	}
	var cost =0;
	ropeLarr.sort(function(a,b) {return a-b;	});
	
	while (ropeLarr.length > 1) {
		var newRope = ropeLarr[0] + ropeLarr[1];
		cost += newRope;
	ropeLarr.splice(0,2);
	ropeLarr.push(newRope);
	}
	ropeLarr.sort(function (a,b) { return a-b; }); 
	
	document.querySelector("#result").textContent = res;
}  