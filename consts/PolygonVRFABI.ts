const PolygonVRFABI =
    [
        {
            "inputs": [
                { "internalType": "address", "name": "link", "type": "address" },
                { "internalType": "address", "name": "linkEthFeed", "type": "address" },
                { "internalType": "address", "name": "fastGasFeed", "type": "address" },
                { "internalType": "uint32", "name": "paymentPremiumPPB", "type": "uint32" },
                { "internalType": "uint32", "name": "flatFeeMicroLink", "type": "uint32" },
                { "internalType": "uint24", "name": "blockCountPerTurn", "type": "uint24" },
                { "internalType": "uint32", "name": "checkGasLimit", "type": "uint32" },
                { "internalType": "uint24", "name": "stalenessSeconds", "type": "uint24" },
                { "internalType": "uint16", "name": "gasCeilingMultiplier", "type": "uint16" },
                { "internalType": "uint256", "name": "fallbackGasPrice", "type": "uint256" },
                { "internalType": "uint256", "name": "fallbackLinkPrice", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": false, "internalType": "uint32", "name": "paymentPremiumPPB", "type": "uint32" },
                { "indexed": false, "internalType": "uint24", "name": "blockCountPerTurn", "type": "uint24" },
                { "indexed": false, "internalType": "uint32", "name": "checkGasLimit", "type": "uint32" },
                { "indexed": false, "internalType": "uint24", "name": "stalenessSeconds", "type": "uint24" },
                { "indexed": false, "internalType": "uint16", "name": "gasCeilingMultiplier", "type": "uint16" },
                { "indexed": false, "internalType": "uint256", "name": "fallbackGasPrice", "type": "uint256" },
                { "indexed": false, "internalType": "uint256", "name": "fallbackLinkPrice", "type": "uint256" }], "name": "ConfigSet", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": false, "internalType": "uint32", "name": "flatFeeMicroLink", "type": "uint32" }], "name": "FlatFeeSet", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" },
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": false, "internalType": "uint96", "name": "amount", "type": "uint96" }], "name": "FundsAdded", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" },
                { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
                { "indexed": false, "internalType": "address", "name": "to", "type": "address" }], "name": "FundsWithdrawn", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": false, "internalType": "address[]", "name": "keepers", "type": "address[]" },
                { "indexed": false, "internalType": "address[]", "name": "payees", "type": "address[]" }], "name": "KeepersUpdated", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferRequested", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferred", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "keeper", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "PayeeshipTransferRequested", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "keeper", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "PayeeshipTransferred", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "keeper", "type": "address" },
                { "indexed": true, "internalType": "uint256", "name": "amount", "type": "uint256" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
                { "indexed": false, "internalType": "address", "name": "payee", "type": "address" }], "name": "PaymentWithdrawn", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "RegistrarChanged", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" },
                { "indexed": true, "internalType": "uint64", "name": "atBlockHeight", "type": "uint64" }], "name": "UpkeepCanceled", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" },
                { "indexed": true, "internalType": "bool", "name": "success", "type": "bool" },
                { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
                { "indexed": false, "internalType": "uint96", "name": "payment", "type": "uint96" },
                { "indexed": false, "internalType": "bytes", "name": "performData", "type": "bytes" }], "name": "UpkeepPerformed", "type": "event"
        },
        {
            "anonymous": false, "inputs": [
                { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" },
                { "indexed": false, "internalType": "uint32", "name": "executeGas", "type": "uint32" },
                { "indexed": false, "internalType": "address", "name": "admin", "type": "address" }], "name": "UpkeepRegistered", "type": "event"
        },
        {
            "inputs": [], "name": "FAST_GAS_FEED", "outputs": [
                { "internalType": "contract AggregatorV3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "LINK", "outputs": [
                { "internalType": "contract LinkTokenInterface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "LINK_ETH_FEED", "outputs": [
                { "internalType": "contract AggregatorV3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
        },
        { "inputs": [], "name": "acceptOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "keeper", "type": "address" }], "name": "acceptPayeeship", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" },
                { "internalType": "uint96", "name": "amount", "type": "uint96" }], "name": "addFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "cancelUpkeep", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" },
                { "internalType": "address", "name": "from", "type": "address" }], "name": "checkUpkeep", "outputs": [
                    { "internalType": "bytes", "name": "performData", "type": "bytes" },
                    { "internalType": "uint256", "name": "maxLinkPayment", "type": "uint256" },
                    { "internalType": "uint256", "name": "gasLimit", "type": "uint256" },
                    { "internalType": "uint256", "name": "adjustedGasWei", "type": "uint256" },
                    { "internalType": "uint256", "name": "linkEth", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [], "name": "getCanceledUpkeepList", "outputs": [
                { "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "getConfig", "outputs": [
                { "internalType": "uint32", "name": "paymentPremiumPPB", "type": "uint32" },
                { "internalType": "uint24", "name": "blockCountPerTurn", "type": "uint24" },
                { "internalType": "uint32", "name": "checkGasLimit", "type": "uint32" },
                { "internalType": "uint24", "name": "stalenessSeconds", "type": "uint24" },
                { "internalType": "uint16", "name": "gasCeilingMultiplier", "type": "uint16" },
                { "internalType": "uint256", "name": "fallbackGasPrice", "type": "uint256" },
                { "internalType": "uint256", "name": "fallbackLinkPrice", "type": "uint256" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "getFlatFee", "outputs": [
                { "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "query", "type": "address" }], "name": "getKeeperInfo", "outputs": [
                    { "internalType": "address", "name": "payee", "type": "address" },
                    { "internalType": "bool", "name": "active", "type": "bool" },
                    { "internalType": "uint96", "name": "balance", "type": "uint96" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "getKeeperList", "outputs": [
                { "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "gasLimit", "type": "uint256" }], "name": "getMaxPaymentForGas", "outputs": [
                    { "internalType": "uint96", "name": "maxPayment", "type": "uint96" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getMinBalanceForUpkeep", "outputs": [
                    { "internalType": "uint96", "name": "minBalance", "type": "uint96" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "getRegistrar", "outputs": [
                { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getUpkeep", "outputs": [
                    { "internalType": "address", "name": "target", "type": "address" },
                    { "internalType": "uint32", "name": "executeGas", "type": "uint32" },
                    { "internalType": "bytes", "name": "checkData", "type": "bytes" },
                    { "internalType": "uint96", "name": "balance", "type": "uint96" },
                    { "internalType": "address", "name": "lastKeeper", "type": "address" },
                    { "internalType": "address", "name": "admin", "type": "address" },
                    { "internalType": "uint64", "name": "maxValidBlocknumber", "type": "uint64" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [], "name": "getUpkeepCount", "outputs": [
                { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "sender", "type": "address" },
                { "internalType": "uint256", "name": "amount", "type": "uint256" },
                { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "onTokenTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [], "name": "owner", "outputs": [
                { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function"
        },
        { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [], "name": "paused", "outputs": [
                { "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" },
                { "internalType": "bytes", "name": "performData", "type": "bytes" }], "name": "performUpkeep", "outputs": [
                    { "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
        },
        { "inputs": [], "name": "recoverFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "address", "name": "target", "type": "address" },
                { "internalType": "uint32", "name": "gasLimit", "type": "uint32" },
                { "internalType": "address", "name": "admin", "type": "address" },
                { "internalType": "bytes", "name": "checkData", "type": "bytes" }], "name": "registerUpkeep", "outputs": [
                    { "internalType": "uint256", "name": "id", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint32", "name": "paymentPremiumPPB", "type": "uint32" },
                { "internalType": "uint32", "name": "flatFeeMicroLink", "type": "uint32" },
                { "internalType": "uint24", "name": "blockCountPerTurn", "type": "uint24" },
                { "internalType": "uint32", "name": "checkGasLimit", "type": "uint32" },
                { "internalType": "uint24", "name": "stalenessSeconds", "type": "uint24" },
                { "internalType": "uint16", "name": "gasCeilingMultiplier", "type": "uint16" },
                { "internalType": "uint256", "name": "fallbackGasPrice", "type": "uint256" },
                { "internalType": "uint256", "name": "fallbackLinkPrice", "type": "uint256" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address[]", "name": "keepers", "type": "address[]" },
                { "internalType": "address[]", "name": "payees", "type": "address[]" }], "name": "setKeepers", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "registrar", "type": "address" }], "name": "setRegistrar", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "to", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "keeper", "type": "address" },
                { "internalType": "address", "name": "proposed", "type": "address" }], "name": "transferPayeeship", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [], "name": "typeAndVersion", "outputs": [
                { "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function"
        },
        { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" },
                { "internalType": "address", "name": "to", "type": "address" }], "name": "withdrawFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "from", "type": "address" },
                { "internalType": "address", "name": "to", "type": "address" }], "name": "withdrawPayment", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        }]
       
export {
    PolygonVRFABI
}