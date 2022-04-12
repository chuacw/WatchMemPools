import BlocknativeSdk from 'bnc-sdk';
import { TransactionData, TransactionEventLog, InitializationOptions, EthereumTransactionData, Emitter } from 'bnc-sdk/dist/types/src/interfaces';
import WebSocket from 'ws';
import { PolygonVRFABI } from "./consts/PolygonVRFABI";

const abiDecoder = require("abi-decoder"); // NodeJS

require('dotenv').config();
const apiKey = process.env.apikey!;

interface NetOptions {
    NetworkId: number;
    Address: string;
}
const EthereumRegistry: NetOptions = { NetworkId: 1, Address: "0x7b3EC232b08BD7b4b3305BE0C044D907B2DF960B" };
const KovanRegistry: NetOptions = { NetworkId: 42, Address: "0x4Cb093f226983713164A62138C3F718A5b595F73" };
const BscTestNetRegistry: NetOptions = { NetworkId: 97, Address: "0xA3E3026562a3ADAF7A761B10a45217c400a4054A" };
const BscMainnetRegistry: NetOptions = { NetworkId: 56, Address: "0x7b3EC232b08BD7b4b3305BE0C044D907B2DF960B" };
const RinkebyNetRegistry: NetOptions = { NetworkId: 4, Address: "0x409CF388DaB66275dA3e44005D182c12EeAa12A0" };
// const VRFv2RinkebyNetOptions: NetOptions = { NetworkId: 4, Address: "0x6168499c0cFfCaCD319c818142124B7A15E857ab" };
// const faucetRinkebyNetOptions: NetOptions = { NetworkId: 4, Address: "0x31B98D14007bDEe637298086988A0bBd31184523" };
// const Eth2DepositContract: NetOptions = { NetworkId: 1, Address: "0x00000000219ab540356cBB839Cbe05303d7705Fa" };
const PolygonMumbaiRegistry: NetOptions = { NetworkId: 80001, Address: "0x6179B349067af80D0c171f43E6d767E4A00775Cd" };
const PolygonMainnetRegistry: NetOptions = { NetworkId: 137, Address: "0x7b3EC232b08BD7b4b3305BE0C044D907B2DF960B" };

function enableDebug(instance: BlocknativeSdk) {
    (instance as any)._socket.options.allClearResetTime = 3600 * 1000;
    (instance as any)._socket.options.retryTime = 100;
    // (instance as any)._socket.options.debug = true;
}

abiDecoder.addABI(PolygonVRFABI);

class ListenToAddress {
    FNetOptions: NetOptions;
    FOptions: InitializationOptions;
    FEmitter: Emitter;
    FBlocknative: BlocknativeSdk;

    constructor(ANetOptions: NetOptions) {
        this.FNetOptions = ANetOptions;
        this.FOptions = {
            dappId: apiKey,
            networkId: this.FNetOptions.NetworkId,
            //   system: 'bitcoin', 
            transactionHandlers: [
                (event: any) => {
                    console.log(`event for Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}.`);
                    console.log(`${JSON.stringify(event)}`);
                    console.log(JSON.stringify(event.transaction));
                    console.log();
                }
            ],
            ws: WebSocket, // only necessary in server environments
            onopen: () => { console.log(`WebSocket opened for Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}.`) },
            ondown: (closeEvent: any) => {
                console.log(`Closing WebSocket for ${this.FNetOptions.Address}.`)
                console.log();
            },
            onerror: (error: any) => {
                console.log(`error on Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address} error: ${error}.`)
                console.log();
            }, 
            onreopen: () => {
                console.log(`Reconnected to WebSocket for Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}.`);
                console.log();
                this.resubscribe();
            },
            onclose: () => {
                console.log(`WebSocket closed for Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}.`);
                console.log();
            }
        };
        this.FBlocknative = new BlocknativeSdk(this.FOptions);
        enableDebug(this.FBlocknative);
        const { emitter, details } = this.FBlocknative.account(this.FNetOptions.Address);
        this.FEmitter = emitter;
    }

    resubscribe() {
        try {
            this.FEmitter.on("txPool", (transaction: TransactionData | TransactionEventLog) => {
                console.log(`Pending pool transaction Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}: ${typeof transaction} `);
                console.log(JSON.stringify(transaction));
                console.log("End transaction");
                console.log();
                return true;
            });
            this.FEmitter.on("txConfirmed", (transaction: TransactionData | TransactionEventLog) => {
                console.log(`Confirmed transaction Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}: ${typeof transaction} `);
                let data = transaction as EthereumTransactionData;
                if (data.input) {
                    let input = data.input;
                    try {
                        const LMethod = abiDecoder.decodeMethod(input);
                        switch (LMethod.name) {
                            case "performUpkeep":
                                console.log(`Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address} method: ${LMethod.name}.`);
                                console.log();
                                break;
                            case "cancelUpkeep": // method name
                            case "UpkeepCanceled": // event name, shouldn't be matched here:
                                console.log(`cancelUpkeep on Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address}`);
                                console.log();
                                break;
                            default:
                                console.log(`Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address} ${LMethod}`);
                                console.log(`Network: ${this.FOptions.networkId}, ${this.FNetOptions.Address} ${JSON.stringify(transaction)}`);
                                console.log();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                return true;
            })
        } catch (err) {
            console.log(`Unable to subscribe! Error: ${err}`)
        } finally {

        }
    }

}

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const AllNetOptions: NetOptions[] = [
        EthereumRegistry,
        RinkebyNetRegistry,
        KovanRegistry,
        BscMainnetRegistry,
        BscTestNetRegistry,
        PolygonMainnetRegistry,
        PolygonMumbaiRegistry
    ]
    const AllListeners: ListenToAddress[] = [];
    for (const LNetOptions of AllNetOptions) {
        const LListener = new ListenToAddress(LNetOptions);
        LListener.resubscribe();
        // await sleep(500);
        AllListeners.push(LListener);
    }
})();
