function nonConstructibleChange(coins) {
	
    // Write your code here.
      coins.sort((a,b)=>a-b)
      let currentChangeCreated=0;
      for(const coin of coins){
          if(coin > currentChange+1) return currentChangeCreated + 1;
          currentChangeCreated += coin;
      }
    return currentChangeCreated+1;
}