
document.getElementById('go').onclick = async function() {
	
const wallet = document.getElementById('wallet').value;

	const walletInfo = await fetch("https://lok-nft.leagueofkingdoms.com/api/drago/inventory", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Brave\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
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
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Brave\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
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
	console.log(ds2)
	
	let adiv = document.getElementById('DSA');
	let contentA = `<p> UNCLAIMED DSA: ${ds2} </p>`
	adiv.innerHTML += contentA;

	const walletResponse = await walletInfo.json()
	let D = walletResponse.myDragos;
	console.log(D)
	D.forEach( e => {
		let ID = e.tokenId;
		let rentStats = e.rent.stats;
		let cDSA = rentStats.currentDSA;
		let cProfit = rentStats.currentProfit;
		let tDSA = rentStats.totalDSA;
		let tProfit = rentStats.totalProfit;

			tProfit = tProfit || 0
			tDSA = tDSA || 0
			cProfit = cProfit || 0
			cDSA = cDSA || 0			
		console.log(cDSA)
		console.log(cProfit)
		console.log(tDSA)
		console.log(tProfit)
		  let cDiv = document.getElementById('dragoo');
  let content1 = `<div style='display: inline-block'>
  <img style='width:45%' src='https://lok-nft.leagueofkingdoms.com/api/card/drago/${ID}' ></img>
  <p> Rental Profit: ${cProfit} DSA  | Rental Total: ${cDSA} DSA </p>
  <p>  </p>
  <p> Total Profit: ${tProfit} DSA | Total DSA: ${tDSA} DSA </p>
  </div>` 
  cDiv.innerHTML += content1;
	})
};

document.getElementById('claim').onclick = async function () {
	const wallet = document.getElementById('wallet').value;

		const claim = await fetch("https://api-lok-beta.leagueofkingdoms.com/api/drago/rent/claim", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"112\", \"Brave\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "sec-gpc": "1"
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