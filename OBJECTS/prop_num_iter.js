var a = {}
a["0"] = 0
a["1"] = 1
a["2"] = 2
a["3"] = 3
a["4"] = 4
a["5"] = 5
var i = 0
while(i!= 5){
    i+= 1
    a[i] += 5
    console.log(a[i])
}

function d(b){
	i = 0
	while(i!= 5){
		b[i] += 1
	    i+= 1
	    console.log(b[i])
	}	
}


function c(a){
	i = 0
	while(i!= 5){
		a[i] = 100
	    console.log(a[i])
	    i+= 1
	}	
}

// d(a)
c(a)
console.log(a)