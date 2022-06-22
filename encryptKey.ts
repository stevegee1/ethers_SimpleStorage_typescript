//JAVASCRIPT EDITION COMMENTED LEAVING TYPESCRIPT EDITION OF THE CODE
// const ether = require("ethers"); //we import ethers library
// const { readFileSync } = require("fs-extra"); //we import fs-extra package
// const fs = require("fs-extra"); //fs-extra package
// require("dotenv").config(); //We import dotenv to read our .env file
import { ethers } from "ethers";
import * as fs from "fs-extra";
import "dotenv/config";

async function main() {
     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
     const encryptJsonKey = await wallet.encrypt(
          process.env.PRIVATE_KEY_PASSWORD!
     );
     fs.writeFileSync("./.encryptedKey.json", encryptJsonKey);
}
main()
     .then(() => process.exit(0))
     .catch((error) => {
          console.error(error);
          process.exit(1);
     });
