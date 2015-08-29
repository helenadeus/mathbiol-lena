# Example #

Remember that, in order to draw in the HTML document, you will need to run the code only after the window has completed loading. Encapsulate the draw dendrogram code inside a function and call it as soon as window loads:

```
 <!--[if IE]><script type="text/javascript" src="../excanvas.js"></script><![endif]-->
<script type="text/javascript" src="squareform.js"></script>
<script type="text/javascript" src="pdist.js"></script>
<script type="text/javascript" src="linkage.js"></script>
<script type="text/javascript" src="dendrogram.js"></script>
<script type="text/javascript">
window.onload = draw_dendrogram;

function draw_dendrogram() {

	var x = [
					[31,     4,     1,     4,    12,     1,    10],
					[2,     2,     2,     2,     6,     3,     2],
					[1,    65,     1,     4,    12,     1,    10],
					[2,     4,     1,     8,     4,     4,     3]
			];

	var p=pdist(x); 

	var L = linkage(p, 'average');
	dendrogram(L, {labels : ['A','B','C', 'D']});

}

</script>

```


You can try it here: http://analytics.mathbiol-lena.googlecode.com/hg/dendroheat/dendroheat.html

A nice example of this tools working:
<img src=''></img>