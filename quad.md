## Example ##

```
handle = '@(t)Math.pow(Math.E, -Math.pow(t,2))';
a = 0;
b = 10;
a = quad(handle, a,b);
//a = 0.8862;
```