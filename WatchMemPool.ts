import BlocknativeSdk from 'bnc-sdk';
import { TransactionData, TransactionEventLog, InitializationOptions } from 'bnc-sdk/dist/types/src/interfaces';
import WebSocket from 'ws';
require('dotenv').config();
const apiKey = process.env.apikey!;
interface NetOptions {
    NetworkId: number;
    Address: string;
}
const BscTestNetOptions: NetOptions = { NetworkId: 97, Address: "0xa555fC018435bef5A13C6c6870a9d4C11DEC329C" };
const RinkebyNetOptions: NetOptions = { NetworkId: 4, Address: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B" };
const VRFv2RinkebyNetOptions: NetOptions = { NetworkId: 4, Address: "0x6168499c0cFfCaCD319c818142124B7A15E857ab" };
const faucetRinkebyNetOptions: NetOptions = { NetworkId: 4, Address: "0x31B98D14007bDEe637298086988A0bBd31184523"};

const LNetworkOptions = faucetRinkebyNetOptions;


let resubscribe = function () {
    console.log("Stub");
}
// create options object
const options: InitializationOptions = {
    dappId: apiKey,
    networkId: LNetworkOptions.NetworkId,
    //   system: 'bitcoin', 
    transactionHandlers: [(event: any) => console.log(event.transaction)],
    ws: WebSocket, // only neccessary in server environments
    onopen: () => { console.log("WebSocket opened...") },
    ondown: (closeEvent: any) => { console.log("Closing WebSocket...") },
    onerror: (error: any) => { console.log(error) }, //optional, use to catch errors
    onreopen: () => {
        console.log("Reconnected to WebSocket.");
        resubscribe();
    },
    onclose: () => { console.log("WebSocket closed...") }
};

// initialize and connect to the api
const blocknative = new BlocknativeSdk(options);

(blocknative as any)._socket.options.allClearResetTime = 3600 * 1000;
(blocknative as any)._socket.options.retryTime = 100;
(blocknative as any)._socket.options.debug = true;
// grab the primary account
const address = LNetworkOptions.Address;

const { emitter, details } = blocknative.account(address);

// {status: 'pending', monitorId: 'Geth_4_D_PROD', monitorVersion: '0.109.0', pendingTimeStamp: '2022-02-09T13:27:50.096Z', pendingBlockNumber: 10139385, …}
// {status: 'confirmed', monitorId: 'Geth_4_A_PROD', monitorVersion: '0.109.0', timePending: '14250', blocksPending: 1, …}
/*  ** Pending transaction **
    asset:'ETH'
    blockHash:null
    blockNumber:null
    contractCall:undefined
    counterparty:'0xC68b4573794ee051C80851233310aaC9D726934d'
    direction:'incoming'
    dispatchTimestamp:'2022-02-09T14:37:06.816Z'
    eventCode:'txPool'
    from:'0xC68b4573794ee051C80851233310aaC9D726934d'
    gas:1000000
    pendingBlockNumber:10139662
    pendingTimeStamp:'2022-02-09T14:37:06.810Z'
    r:'0xc2e1464a347576c14afffebb794e22f4c1357714ac858093d4c15ecb501cee55'
    s:'0x67a846d524eb582a762c795ef73da87bda9a28d9016c3f2fdbb4d74037a855e9'
    serverVersion:'0.128.0'
    status:'pending'
    system:'ethereum'
    timeStamp:'2022-02-09T14:37:06.810Z'
    to:'0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
    type:0
    v:'0x2c'
    value:'0'
    watchedAddress:'0xb3dccb4cf7a26f6cf6b120cf5a73875b7bbc655b'
*/
/*  ** Confirmed transaction **
    asset:'ETH'
    baseFeePerGas:'419149069'
    baseFeePerGasGwei:0.419
    blockHash:'0xf6d4eb503ae2c04f25924ffea36f4d82517680da8055dbb30cb1e10af9c219a5'
    blockNumber:10139665
    blocksPending:1
    contractCall:undefined
    counterparty:''
    direction:''
    dispatchTimestamp:'2022-02-09T14:37:51.095Z'
    eventCode:'txConfirmed'
    from:'0x8b682e8485A877F614ADd886339BFF8185837e13'
    gas:174062
    gasPrice:'1440546884'
    gasPriceGwei:1.44
    hash:'0xaf2279cbf210f09c8b01cfba608c68f6bcdefa2c8a5a586b08ba1babeb98bd12'
    input:'0x1593a8c7'
    internalTransactions: [
        0: {
            from:'0x81b701cad8c879026b3f75445f74cc08784fd8bd'
            gas:135852
            gasUsed:98043
            input:'0x4000aea0000000000000000000000000b3dccb4cf7a26f6cf6b120cf5a73875b7bbc655b000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000402ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c13110000000000000000000000000000000000000000000000000000000000000000'
            to:'0x01be23585060835e02b77ef475b0cc51aa1e0709'
            type:'CALL'
            value:'0'
        }
        1: {
            from:'0x01be23585060835e02b77ef475b0cc51aa1e0709'
            gas:114317
            gasUsed:78155
            input:'0xa4c0ed3600000000000000000000000081b701cad8c879026b3f75445f74cc08784fd8bd000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000402ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c13110000000000000000000000000000000000000000000000000000000000000000'
            to:'0xb3dccb4cf7a26f6cf6b120cf5a73875b7bbc655b'
            type:'CALL'
            value:'0'        
        }
    ],
    monitorId:'Geth_4_D_PROD'
    monitorVersion:'0.109.0'
    netBalanceChanges:(0) []
    network:'rinkeby'
    nonce:32
    pendingBlockNumber:10139664
    pendingTimeStamp:'2022-02-09T14:37:37.753Z'
    r:'0x58f46c49e51ac5d206135a86604b2c1ea2ee4a1b252ee7eb12ad8d003f77ec5e'
    s:'0x4bb65ea8bef32ee5a326f3ff112a6fd98474dedd7aa026599a9b8330ffb87db6'
    serverVersion:'0.128.0'
    status:'confirmed'
    system:'ethereum'
    timePending:'12537'
    timeStamp:'2022-02-09T14:37:50.290Z'
    to:'0x81b701CAD8C879026b3F75445f74Cc08784Fd8bD'
    type:0
    v:'0x2c'
    value:'0'
    watchedAddress:'0xb3dccb4cf7a26f6cf6b120cf5a73875b7bbc655b'
*/

resubscribe = function () {
    try {
        emitter.on("txPool", (transaction: TransactionData | TransactionEventLog) => {
            console.log("Pending pool transaction...");
            console.log(JSON.stringify(transaction));
            console.log("End transaction");
            return true;
        });
        emitter.on("txConfirmed", (transaction: TransactionData | TransactionEventLog) => {
            console.log("Confirmed transaction...");
            console.log(JSON.stringify(transaction));
            console.log("End transaction");
            return true;
        })
    } catch (err) {

    } finally {

    }
}

resubscribe();
