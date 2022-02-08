const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("WineMart", function () {
  it("create nft market, create nft, put nft on market and make a sale", async function () {
    const WineMart = await ethers.getContractFactory("WineMart");
    const winemart = await WineMart.deploy();
    await winemart.deployed();
    const winemartContractAddress = winemart.address

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(winemartContractAddress);
    await nft.deployed();
    const nftContractAddress = nft.address

    let listingPrice = await winemart.getListingPrice()
    listingPrice  = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('100', 'ether')
    await nft.createToken('https://www.1.si3mshady.com')
    await nft.createToken('https://www.2.si3mshady.com')

    await winemart.createMarketItem(nftContractAddress, 1,auctionPrice, {value: listingPrice} )
    await winemart.createMarketItem(nftContractAddress, 2,auctionPrice, {value: listingPrice} )
    
 const [_, buyerAddress, buyer2] = await ethers.getSigners() //walletaccounts
 
 console.log(buyer2)

 await winemart.connect(buyerAddress).createMarketSale(nftContractAddress, 1, {value: auctionPrice} )

 const items = await winemart.fetchMarketItems()
console.log(items)



  });
});
