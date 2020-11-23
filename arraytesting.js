var statchances = [0.0771604938272, 0.308641975309+0.771604938272, 1.62037037037+2.93209876543, 4.78395061728+7.02160493827, 9.41358024691+11.4197530864, 12.8858024691+13.2716049383, 12.3456790123+10.1080246914, 7.25308641975+4.16666666667, 1.62037037037];
var rollprobs = [0.1375,0.15725,0.20325,0.19875,0.14925,0.14925,0.08225,0.027,0.00425];
var values = [1,2,3,4,5,6,7,8];
var results = [];

var distributions = [
[statchances[0]*0.01,statchances[1]*0.01,statchances[2]*0.01,statchances[3]*0.01],
[statchances[1]*0.01,statchances[2]*0.01,statchances[3]*0.01,statchances[4]*0.01],
[statchances[2]*0.01,statchances[3]*0.01,statchances[4]*0.01,statchances[5]*0.01],
[statchances[3]*0.01,statchances[4]*0.01,statchances[5]*0.01,statchances[6]*0.01],
[statchances[4]*0.01,statchances[5]*0.01,statchances[6]*0.01,statchances[7]*0.01],
[statchances[5]*0.01,statchances[6]*0.01,statchances[7]*0.01,statchances[8]*0.01],
[statchances[6]*0.01,statchances[7]*0.01,statchances[8]*0.01,statchances[9]*0.01],
[statchances[7]*0.01,statchances[8]*0.01,statchances[9]*0.01,statchances[10]*0.01]
];

for (s = 0; s < 64; s++) {
    results.push(0);
}


for (i = 0; i < 8; i++) {
   for (x = 0; x < 8; x++) {
      results[values[i]+values[x]] += probs[i] * rollprobs[x];
   }
}
console.log(probs[0]);
var sum = 0;
for (h = 1; h < 17; h++) {
console.log(h + ": " + results[h]);
  sum += results[h];
}
console.log(distributions[0][0]);
