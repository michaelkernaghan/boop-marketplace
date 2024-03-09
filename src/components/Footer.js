// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Credits to <a href="https://www.dappuniversity.com/" target="_blank" rel="noopener noreferrer">Dapp University</a> for project templates.</p>
        <ul>
          <li><a href="https://testnets.opensea.io/collection/nose-boop-cats-1" target="_blank" rel="noopener noreferrer">BOOP NFT Collection on OpenSea</a></li>
          <li><a href="https://boopstokenstatus.netlify.app/" target="_blank" rel="noopener noreferrer">BOOP Coin Status</a></li>
          <li><a href="https://testnet-explorer.etherlink.com/address/0x3825D921DD50FfFf508208cd3183efC71FE82C21" target="_blank" rel="noopener noreferrer">Marketplace Smart Contract</a></li>
          <li><a href="https://www.youtube.com/channel/UCjTUPyFEr2xDGN6Cg8nKDaA" target="_blank" rel="noopener noreferrer">Smart Contract verified with Remix</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;