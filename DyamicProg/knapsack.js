//Correct

function knapSack(W, wt, val, n)
    {
        let i, w;
        let K = new Array(n + 1);
  
        // Build table K[][] in bottom up manner
        for (i = 0; i <= n; i++)
        {
            K[i] = new Array(W + 1);
            for (w = 0; w <= W; w++)
            {
                if (i == 0 || w == 0)
                    K[i][w] = 0;
                else if (wt[i - 1] <= w)
                    K[i][w]
                        = Math.max(val[i - 1]
                         + K[i - 1][w - wt[i - 1]],
                         K[i - 1][w]);
                else
                    K[i][w] = K[i - 1][w];
            }
        }

        console.log(K);
  
        return K[n][W];
    }
     
    // let val = [ 60, 100, 120 ];
    var val = [8, 4, 0, 5, 3];
    var wt = [1, 2, 3, 2, 2];
    // let wt = [ 10, 20, 30 ];
    let W = 4;
    let n = val.length;
    console.log(knapSack(W, wt, val, n));

    //Youtube sal