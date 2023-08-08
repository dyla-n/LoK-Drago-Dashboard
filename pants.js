const web3 = new AlchemyWeb3.createAlchemyWeb3(" ----COPY AND PASTE YOUR API KEY URL HERE----"); //v2.0
//"https://matic-mainnet.g.alchemy.com/v2/ " needs to be matic mainnet URL for it to work


// function to get the user's account address from MetaMask
document.getElementById('connect').onclick = async function getAccount() {
  try {
    // Request account access if needed
    await window.ethereum.enable();
    // Retrieve the list of accounts in the user's MetaMask wallet
    const accounts = await web3.eth.getAccounts();
    // Return the first account in the list (assuming there's only one account connected)
    return accounts[0];
  } catch (error) {
    console.error(error);
  }
}

async function confirmWalletAddress() {
  wallet = await web3.eth.getAccounts();
  console.log("User's wallet address:", wallet);
  // now you can verify that the user's wallet address matches the expected address
  // (e.g., by prompting the user to enter their wallet address or by comparing it with a stored value)
}

  // using coingeck API to get the DSA price from teh uniswap pool

    
async function a () {
    wallet = await web3.eth.getAccounts();
    const coingeckoData = await fetch("https://api.geckoterminal.com/api/v2/networks/polygon_pos/pools/0x9AC431aA4a30f8881D01eA0ab648208aA5b842D2", {
      headers: {
        Accept: "application/json"
      }
    })
        const coingeckoData2 = await coingeckoData.json()
        const coingeckoData3 = coingeckoData2.data.attributes;
        const coingeckoData4 = coingeckoData3.base_token_price_usd;
      //Pull in the price as USD & saves it to the variable 'price'.
   const price = Number(coingeckoData4).toFixed(4);
  
const uC = '0x3b7E1ce09aFe2bB3A23919AFb65a38E627CfbE97'

  let uR = await web3.alchemy.getTokenBalances(`${wallet}`, [uC]);
  const uu = uR.tokenBalances;
  const uuu = uu[0];
  const uuuu = uuu.tokenBalance;
  const uuuuu = uuuu / Math.pow(10, 18);
  const uuuuuu = uuuuu.toFixed(2);
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

	  wallet = await web3.eth.getAccounts();
// getting dragos in user's wallet and info for rentals
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
// parsing unclaimed DSA
	const DSA1 = await DSAinfo.json();
	const ds2 = DSA1.unclaimedProfit;
// adding to HTML
	let adiv = document.getElementById('DSA');
	let contentA = `<text>  ${ds2} </text>`
	adiv.innerHTML += contentA;
  let totalTPS = 0;
  let totalAPS = 0;
//
const HERstory = await fetch("https://api-lok-beta.leagueofkingdoms.com/api/drago/rent/manage/history", {
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
let HISstory = await HERstory.json();

let X = HISstory.history;
console.log(X)
X.forEach((P) => {
  let ID = P.dragoTokenId;
  let Date = P.logDate;
  let Con = P.worldId;

  let datas = [
    {'Drago ID': `${ID}`, 'Continent':`${Con}`, Date: `${Date}` }
  ]
  let headers = Object.keys(datas[0]);
 
  // Generate table headers
  let tableHeaders = headers.map((header) => `<th>${header}</th>`).join('');
  // Generate table rows with corresponding values
  let tableRows = datas.map((item) => {
    let cells = headers.map((header) => `<td>${item[header]}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  console.log(datas)
  let div = document.getElementById('whazt');
  let content = `
  <div style="text-align: center">
  <table>
      <thead>
        <tr>${tableHeaders}</tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table></center>
    </div>
    <style>
    /* Style for the table */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
    }

    th, td {
      border: 1px solid #dddddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #dddddd;
    }
  </style>`;
  div.innerHTML += content;
})

//
//const pages = await fetch("https://api-lok-beta.leagueofkingdoms.com/api/drago/rent/manage/history", {
//"headers": {
 // "accept": "application/json, text/plain, */*",
 // "content-type": "application/json;charset=UTF-8",
// },
// "referrer": "https://leagueofkingdoms.com/",
//"referrerPolicy": "strict-origin-when-cross-origin",
// "body": `{\"address\":\""${wallet}\",\"page\":2}`,
// "method": "POST",
// "mode": "cors",
// "credentials": "omit"


  // getting all rental info we want
	const walletResponse = await walletInfo.json()
	let D = walletResponse.myDragos;
  D.forEach((e) => {
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
    tProfit = tProfit || 0;
    tDSA = tDSA || 0;
    cProfit = cProfit || 0;
    cDSA = cDSA || 0;
    cG = cG || 0;
    tG = tG || 0;
    oW = oW || 'Not Rented';
    share = share || 'Not Rented';
    // date stuff
    var currentDate = new Date();
  
    var dateS = new Date(sD);
    var dateE = new Date(eD);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    };
    let formattedDateS = dateS.toLocaleString("en-US", options);
    let formattedDateE = dateE.toLocaleString("en-US", options);
  
    formattedDateE = formattedDateE || "Not Rented";
    formattedDateS = formattedDateS || "Not Rented";
  
    var timeDiff = currentDate.getTime() - dateS.getTime();
    var timeDiff2 = dateE.getTime() - currentDate.getTime();
  
    // Convert the time difference from milliseconds to days
    var dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var dayDiff2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24));
    dayDiff2 = dayDiff2 || 0
    var avgGather = cG !== 0 ? cG / dayDiff : 0;
    dayDiff = dayDiff || 0
    var avgProfit = dayDiff !== 0 ? (cProfit / dayDiff).toFixed(2) : 0;
    avgGather = avgGather || 0
    avgProfit = avgProfit || 0

  
    //getting total profit,current rental profit, and average profit in $ value
    var tPS = ((tProfit / 100) * price).toFixed(4);
    var cPS = ((cProfit / 100) * price).toFixed(4);
    var aPS = ((avgProfit / 100) * price).toFixed(4);
    tPS = tPS || 0;
    aPS = aPS || 0;
    
    totalTPS+= parseFloat(tPS);
    totalAPS+= parseFloat(aPS);

    // generating drago info to HTML and creating modals
    let cDiv = document.getElementById("dragoo");
    let content1 = `<div style='display: inline-block'>
    <img id='btn${ID}' style='width:45%' src='https://lok-nft.leagueofkingdoms.com/api/card/drago/${ID}' onclick="document.getElementById('btn${ID}').onclick = myModal${ID}.style.display = 'block'"></img>
    <p> Drago: ${ID} Lvl: ${level} </p>
    <p> Rental Profit: ${cProfit} DSA  | Rental Total: ${cDSA} DSA </p>
    <p>  </p>
    <p> Total Profit: ${tProfit} DSA | Total DSA: ${tDSA} DSA </p>
    </div>
    
    <div id="myModal${ID}" class="modal">
      
        <span id='span${ID}' onclick="document.getElementById('span${ID}').onclick = myModal${ID}.style.display = 'none'"class="close">&times;</span>
        <p> Drago: ${ID} Lvl: ${level} </p>
        <p> Breed: ${breed}/7 </p>
        <div class="modal-content">
        <img style='width:45%; float: left' src='https://lok-nft.leagueofkingdoms.com/api/card/drago/${ID}'></img>
        <div class='text-container'>
          <p> PARENTS: </p>
          <p> ${p1} | ${p2} </p>
          <p> Rented to: ${oW} | Profit Share: ${share} </p>
          <p> Rent Start Date: ${formattedDateS} </p>
          <p> Rent End Date: ${formattedDateE} </p>
          <p> Current Rental Time: ${dayDiff} Days | Time Remaining: ${dayDiff2} Days  <p>
          <p> Current Rental DSA Gatherings: ${cG} | Total DSA Gatherings: ${tG} </p>
          <p> Average Daily Gathering: ${avgGather} | Average Daily Profit: ${avgProfit} DSA </p>
          <p> Rental Profit: ${cProfit} DSA  | Rental Total: ${cDSA} DSA </p>
          <p>  </p>
          <p> Total Profit: ${tProfit} DSA | Total DSA: ${tDSA} DSA </p>
          <p> Total Profit: $${tPS} | Current Rental Profit: $${cPS} | Average Daily Profit: $${aPS} </p>
          <div id='pp${ID}'>
            <p> Time to ROI </p>
            <label id='label${ID}' for='a${ID}'>Cost in USD: </label>
            <input id='a${ID}' type='number'></input>
            <button id='b${ID}' onclick='bread${ID}()'> MATH TIME </button>
          </div>
        </div>
      </div>
    </div>`;
    cDiv.innerHTML += content1;
    document.getElementById(`pp${ID}`).onload = cheese(ID);
 
  
   
    // appending the math script into the body of the HTML tag so the button works
    // why can I not just add it in innerHTML I don't know...
    function cheese(ID) {
//a
      const script = document.createElement("script");
      script.type = "text/javascript";
      let scriptScript = `

      function bread${ID}() {
        const aaa = document.getElementById('a${ID}').value;
        console.log(aaa)
        const aa =  aaa - ${tPS};
        console.log(aa + 'this should equal left amount')
        const cR = aa / ${aPS};
        console.log(cR + 'this should equal days remaining with average' )
        const aaaa = cR.toFixed(0)
        console.log(aaaa);
        window.alert(aaaa + ' Days Remaining until ROI')
      };
      `;
      script.appendChild(document.createTextNode(scriptScript));
      document.body.appendChild(script);
   }

   let data = [
    { ID: `${ID}`, level: `${level}`, 'Average Times Gathering': `${avgGather}`, 'Current Rental Profit': `${cProfit}`, 'DST From Rental': `${cDSA}`, 'Total Profit': `${tProfit}`, 'Total DST': `${tDSA}`, 'Rental Time Remaining': `${dayDiff2}` + ' days', 'Rentee': `${oW}` },
  ]; 
  // Function to generate the table dynamically based on the data
    // Get the headers (placeholders) from the first object in the data
    let headers = Object.keys(data[0]);
 
    // Generate table headers
    let tableHeaders = headers.map((header) => `<th>${header}</th>`).join('');
    // Generate table rows with corresponding values
    let tableRows = data.map((item) => {
      let cells = headers.map((header) => `<td>${item[header]}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    // Combine headers and rows to create the table
    let tDiv = document.getElementById('tDrag');
    let table = `
    <div style="text-align: center">
    <table>
        <thead>
          <tr>${tableHeaders}</tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table></center>
      </div>
      <style>
      /* Style for the table */
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 20px 0;
      }
  
      th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
      }
  
      th {
        background-color: #f2f2f2;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
  
      tr:hover {
        background-color: #dddddd;
      }
    </style>
    `;
    
    tDiv.innerHTML += table;
  });

  console.log(totalAPS +' HERE')
  console.log(totalTPS + ' HERE')
  let APS2 = totalAPS.toFixed(4);
  let TPS2 = totalTPS.toFixed(4)
  let inW = (uuuuuu * price).toFixed(4);
  let mDiv = document.getElementById('money')
  let content3 = `
  <text>  Average Daily Earnings: $${APS2} | Total Earnings: $${TPS2} | Your DST: $${inW} </text>`
   mDiv.innerHTML += content3;
     
};
// claims DSA to wallet + forces a refresh
document.getElementById('claim').onclick = async function () {
	
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
			window.location.reload();	
};

window.onload = a();
