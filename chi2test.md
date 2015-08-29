# Example #
```
//1. The data 
Observed = [40, 20, 16, 4];
ExpRatio = [9, 3, 3, 1]; // weight for each expected category
chiV = chi2test(Observed, ExpRatio);
console.log('chi squared value is: '+chiV);

//now all is needed is to determine, based on the degrees of freedom and expected probability, what is the minimum value of chi squared to reject the null hypothesis
//Need to include http://www.fourmilab.ch/rpkp/experiments/analysis/chiCalc.js in the final version for this to work
pval = 0.05; df = Observed.length-1;
expChi = calc_q_df(pval, df);


console.log('min chi squared value for df='+df+' and p-val='+pval+' is '+expChi);
var reject = chiV>expChi;
if(!reject){
console.log('since '+chiV+' is not larger than '+expChi+' than the null hypothesis CANNOT be rejected');
}
else {
console.log('since '+Math.round(chiV*1000)/1000+'>'+Math.round(expChi*1000)/1000+' the null hypothesis IS rejected');	
}

function calc_q_df(prob, df) {
        minChi = critchi(prob, df);
		return minChi;
}
```