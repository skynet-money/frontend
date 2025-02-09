const axios = require("axios");

export async function getTransactions(key) {
  const apiUrl = "https://api.etherscan.io/v2/api";

  const queryParams = new URLSearchParams({
    chainId: "8453",
    module: "account",
    action: "tokentx",
    address: "0x4684da1c981a8732C98ddaCF06bE1668b37423D0",
    sort: "desc",
    page: 1,
    apikey: key,
  });

  try {
    // Make the GET request using axios
    const response = await axios.get(apiUrl, { params: queryParams });
    const data = response.data;

    // Check if the API call was successful
    if (data.status === "1" && data.message === "OK") {
      const transactions = data.result;

      const filteredTransactions = transactions.filter((transaction) => {
        // Convert tokenName to lowercase for case-insensitive comparison
        const tokenName = transaction.tokenName.toLowerCase();

        // Check if tokenName does NOT include "airdrop" or "reward"
        return !tokenName.includes("airdrop") && !tokenName.includes("reward") && transaction.from != "0x0000000000000000000000000000000000000000";
      });

      return filteredTransactions;
    } else {
      console.error("API returned an error:", data.message);
    }
  } catch (error) {
    console.error("There was a problem with the axios request:", error);
  }
}
