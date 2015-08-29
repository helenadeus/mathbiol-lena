# Introduction #

Pairwise distance between 2 vectors. Designed to match matlab's pdist - http://www.mathworks.com/access/helpdesk/help/toolbox/stats/pdist.html


# Example #


```

<script src="http://compstats.mathbiol-lena.googlecode.com/hg/pdist.js" type= type="text/javascript"></script>
<script type="text/javascript">


var x = [
		[31,     4,     1,     4,    12,     1,    10],
		[2,     2,     2,     2,     6,     3,     2],
		[1,    65,     1,     4,    12,     1,    10],
		[2,     4,     1,     8,     4,     4,     3]
	];

p=pdist(x); 
// returns p = [30.886890422961002, 67.97793759742936, 31.28897569432403, ...]

p1=pdist(x, 'minkowski',3); 
// returns p1 = [29.295434296560515, 63.32867617339933, 29.370204438217286,...]

p2=pdist(x, 'correlation'); 
// returns p2 = [0.9578924039466741, 1.199007770840824, 1.2915510635441443,...]

</script>
```