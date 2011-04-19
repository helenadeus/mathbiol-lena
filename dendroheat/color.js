var color = {
	map : function (L, min_color, max_color) {
			//this gets the association between a color and a bin
				if(typeof(L)=='undefined'){ var L = 10; }
				if(typeof(min_color)=='undefined')
				{var min_color = [0,255,0]; var max_color =[255,0,0]; }
				
				//we are deadling with 3 variables: red, green and blue
				 var redIncrement = (max_color[0]-min_color[0])/(L-1);
				 var greenIncrement = (max_color[1]-min_color[1])/(L-1);
				 var blueIncrement = (max_color[2]-min_color[2])/(L-1);
				
				//now create the color array for each of the ninsOrdered
				var colors = [];
				
				 for (var i=0; i<L; i++) {
					colors.push([ min_color[0]+(redIncrement*i),  min_color[1]+(greenIncrement*i),  min_color[2]+(blueIncrement*i) ]);
				 }
				
				//data.colorLookUp = colorLookUp;
			  return colors;
		
		},
	lookup: function (bins, colormap) {
		
		if(bins.length!==colormap.length){
			console.log('Bins and colormap should have the same length');
			//return colormap; //smoething not right
		}
		else {
			this.sortNumber = function(a, b) {	return a - b;};  
			var lookupcolor = {};
			//sort the bins for the look up table if the are numeric
			 var binsOrdered = [];
			
			 if(typeof(bins[0]*1)=='number'){
				binsOrdered = bins.sort(this.sortNumber);
			 }
			 else {
				binsOrdered = bins.sort();
			 }
			
			for (var i=0; i<binsOrdered.length; i++) {
				var val = binsOrdered[i];
				lookupcolor[val] = colormap[i];
			}
			
		return lookupcolor;
		}
	
	},
	
	colormap2rgb : function (colormap) {
		
		var rgb = [];
		for (var i=0; i<colormap.length; i++) {
			rgb[i] = color2rgb(colormap[i]);
		}
		return rgb;
	},

	toRgb : function (color) {
		var rgb = Math.round(color[0])+','+Math.round(color[1])+','+Math.round(color[2]);
		return rgb;
	}
}