const web3 = new AlchemyWeb3.createAlchemyWeb3(" ----COPY AND PASTE YOUR API KEY URL HERE----"); 
//"https://matic-mainnet.g.alchemy.com/v2/ " needs to be matic mainnet URL for it to work
console.log(web3)

// function to get the user's account address from MetaMask
document.getElementById('connect').onclick = async function getAccount() {
  try {
    // Request account access if needed
    await window.ethereum.enable();
    // Retrieve the list of accounts in the user's MetaMask wallet
    const accounts = await web3.eth.getAccounts();
    // Return the first account in the list (assuming there's only one account connected)
    return accounts[0];
	console.log(accounts[0])
  } catch (error) {
    console.error(error);
  }
}

// example usage of the getAccount() function
async function confirmWalletAddress() {
  wallet = await web3.eth.getAccounts();
  console.log("User's wallet address:", wallet);
  // now you can verify that the user's wallet address matches the expected address
  // (e.g., by prompting the user to enter their wallet address or by comparing it with a stored value)
}
async function a () {
	  wallet = await web3.eth.getAccounts();

	const walletInfo = await fetch("https://lok-nft.leagueofkingdoms.com/api/drago/inventory", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "content-type": "application/json;charset=UTF-8",
  },
  "referrer": "https://leagueofkingdoms.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"address\":\"${wallet}\",\"includeRent\":true}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
	const DSAinfo = await fetch("https://api-lok-beta.leagueofkingdoms.com/api/drago/rent/info", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "content-type": "application/json;charset=UTF-8",
  },
  "referrer": "https://leagueofkingdoms.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"address\":\"${wallet}\"}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

	const DSA1 = await DSAinfo.json();
	const ds2 = DSA1.unclaimedProfit;
	
	let adiv = document.getElementById('DSA');
	let contentA = `<text>  ${ds2} </text>`
	adiv.innerHTML += contentA;

	const walletResponse = await walletInfo.json()
	let D = walletResponse.myDragos;
	D.forEach( e => {
		let ID = e.tokenId;
		let level = e.level;
		let rentStats = e.rent.stats;
		let oW = e.rent.to; 
		let cDSA = rentStats.currentDSA;
		let cProfit = rentStats.currentProfit;
		let tDSA = rentStats.totalDSA;
		let tProfit = rentStats.totalProfit;
		let p1 = e.parents[0];
		let p2 = e.parents[1];
		let breed = e.breed;
		let share = e.rent.profitShareRatio;
		let sD = e.rent.startDate;
		let eD = e.rent.expireDate;
		let cG = rentStats.currentGathering;
		let tG = rentStats.totalGathering;
			tProfit = tProfit || 0
			tDSA = tDSA || 0
			cProfit = cProfit || 0
			cDSA = cDSA || 0			
		  let cDiv = document.getElementById('dragoo');
  let content1 = `<div style='display: inline-block'>
  <img id='btn${ID}'style='width:45%' src='https://lok-nft.leagueofkingdoms.com/api/card/drago/${ID}' onclick="document.getElementById('btn${ID}').onclick = myModal${ID}.style.display = 'block'"></img>
  <p> Drago: ${ID} Lvl: ${level} </p>
  <p> Rental Profit: ${cProfit} DSA  | Rental Total: ${cDSA} DSA </p>
  <p>  </p>
  <p> Total Profit: ${tProfit} DSA | Total DSA: ${tDSA} DSA </p>
  </div>
  	
	
		<div id="myModal${ID}" class="modal">
		<div class="modal-content">
			<span id='span${ID}' onclick="document.getElementById('span${ID}').onclick = myModal${ID}.style.display = 'none'" class="close" >&times;</span>
			  <p> Drago: ${ID} Lvl: ${level} </p>
			  <p> Breed: ${breed}/7 </p>
  <img style='width:45%; float: left' src='https://lok-nft.leagueofkingdoms.com/api/card/drago/${ID}'></img>
  <div class='text-container'>
  <p> PARENTS: </p>
  <p> ${p1} | ${p2} </p>
  <p> Rented to: ${oW} | Profit Share: ${share} </p>
  <p> Rent Start Date: ${sD} </p>
  <p> Rent End Date: ${eD} </p>
  <p> Current Rental DSA Gatherings: ${cG} | Total DSA Gatherings: ${tG} </p>
    <p> Rental Profit: ${cProfit} DSA  | Rental Total: ${cDSA} DSA </p>
  <p>  </p>
  <p> Total Profit: ${tProfit} DSA | Total DSA: ${tDSA} DSA </p>
  </div>
	</div>
		</div>
` 
  cDiv.innerHTML += content1;
	})

};

document.getElementById('claim').onclick = async function () {
	// claims DST for the user
		const claim = await fetch("https://api-lok-beta.leagueofkingdoms.com/api/drago/rent/claim", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "content-type": "application/json;charset=UTF-8",
  },
  "referrer": "https://leagueofkingdoms.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"address\":\"${wallet}\"}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
	const claim2 = await claim.json();
	console.log(claim2);
};
// lazy so just copy and pasting fom discord bots
async function fetchCoingeckoData() {
 wallet = await web3.eth.getAccounts();
      const coingeckoData = await fetch("https://api.geckoterminal.com/api/v2/networks/polygon_pos/pools/0x9AC431aA4a30f8881D01eA0ab648208aA5b842D2", {
        headers: {
          Accept: "application/json"
        }
      })
          const coingeckoData2 = await coingeckoData.json()
          const coingeckoData3 = coingeckoData2.data.attributes;
          const coingeckoData4 = coingeckoData3.base_token_price_usd;
          console.log(coingeckoData4)
        //Pull in the price as USD & saves it to the variable 'price'.
		const price = Number(coingeckoData4).toFixed(4);
	// gets DST in account and adds price + users amount to HTML	
	const uC = '0x3b7E1ce09aFe2bB3A23919AFb65a38E627CfbE97'

    let uR = await web3.alchemy.getTokenBalances(`${wallet}`, [uC]);
    const uu = uR.tokenBalances;
    const uuu = uu[0];
    const uuuu = uuu.tokenBalance;
    const uuuuu = uuuu / Math.pow(10, 18);
    const uuuuuu = uuuuu.toFixed(2);
	console.log(uuuuuu)
			let qDuv = document.getElementById('dsaBal');
			let content9 = `
			<text> ${uuuuuu} </text>
			`
			qDuv.innerHTML += content9;
			let fDiv = document.getElementById('dsaPrice');
			let content7 = `
			<text> $${price} </text>
			
			`
		fDiv.innerHTML += content7;
	 };
  

window.onload = a();
window.onload = fetchCoingeckoData();
