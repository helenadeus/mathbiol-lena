# Details #

See http://www.mathworks.com/access/helpdesk/help/toolbox/stats/linkage.html

# Example #

```

<script type="text/javascript" src="http://compstats.mathbiol-lena.googlecode.com/hg/squareform.js"></script>
<script type="text/javascript" src="http://compstats.mathbiol-lena.googlecode.com/hg/pdist.js"></script>
<script type="text/javascript" src="http://compstats.mathbiol-lena.googlecode.com/hg/linkage.js"></script>
<script type="text/javascript">

var x = [
                [31,     4,     1,     4,    12,     1,    10],
                [2,     2,     2,     2,     6,     3,     2],
                [1,    65,     1,     4,    12,     1,    10],
                [2,     4,     1,     8,     4,     4,     3]
        ];

p=pdist(x); 

var L = linkage(p, 'average');
//returns L = [ [1, 3, 6.855..],
                [0, 4, 31.087...}],
                [2,5, 64.65....]
               ]

</script>

```