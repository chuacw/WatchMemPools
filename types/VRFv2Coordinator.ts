/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ConfigSet = ContractEventLog<{
  minimumRequestConfirmations: string;
  maxGasLimit: string;
  stalenessSeconds: string;
  gasAfterPaymentCalculation: string;
  fallbackWeiPerUnitLink: string;
  feeConfig: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: [string, string, string, string, string, string, string, string, string];
}>;
export type FundsRecovered = ContractEventLog<{
  to: string;
  amount: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferRequested = ContractEventLog<{
  from: string;
  to: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  from: string;
  to: string;
  0: string;
  1: string;
}>;
export type ProvingKeyDeregistered = ContractEventLog<{
  keyHash: string;
  oracle: string;
  0: string;
  1: string;
}>;
export type ProvingKeyRegistered = ContractEventLog<{
  keyHash: string;
  oracle: string;
  0: string;
  1: string;
}>;
export type RandomWordsFulfilled = ContractEventLog<{
  requestId: string;
  outputSeed: string;
  payment: string;
  success: boolean;
  0: string;
  1: string;
  2: string;
  3: boolean;
}>;
export type RandomWordsRequested = ContractEventLog<{
  keyHash: string;
  requestId: string;
  preSeed: string;
  subId: string;
  minimumRequestConfirmations: string;
  callbackGasLimit: string;
  numWords: string;
  sender: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
}>;
export type SubscriptionCanceled = ContractEventLog<{
  subId: string;
  to: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type SubscriptionConsumerAdded = ContractEventLog<{
  subId: string;
  consumer: string;
  0: string;
  1: string;
}>;
export type SubscriptionConsumerRemoved = ContractEventLog<{
  subId: string;
  consumer: string;
  0: string;
  1: string;
}>;
export type SubscriptionCreated = ContractEventLog<{
  subId: string;
  owner: string;
  0: string;
  1: string;
}>;
export type SubscriptionFunded = ContractEventLog<{
  subId: string;
  oldBalance: string;
  newBalance: string;
  0: string;
  1: string;
  2: string;
}>;
export type SubscriptionOwnerTransferRequested = ContractEventLog<{
  subId: string;
  from: string;
  to: string;
  0: string;
  1: string;
  2: string;
}>;
export type SubscriptionOwnerTransferred = ContractEventLog<{
  subId: string;
  from: string;
  to: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VRFv2Coordinator extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VRFv2Coordinator;
  clone(): VRFv2Coordinator;
  methods: {
    BLOCKHASH_STORE(): NonPayableTransactionObject<string>;

    LINK(): NonPayableTransactionObject<string>;

    LINK_ETH_FEED(): NonPayableTransactionObject<string>;

    MAX_CONSUMERS(): NonPayableTransactionObject<string>;

    MAX_NUM_WORDS(): NonPayableTransactionObject<string>;

    MAX_REQUEST_CONFIRMATIONS(): NonPayableTransactionObject<string>;

    acceptOwnership(): NonPayableTransactionObject<void>;

    acceptSubscriptionOwnerTransfer(
      subId: number | string | BN
    ): NonPayableTransactionObject<void>;

    addConsumer(
      subId: number | string | BN,
      consumer: string
    ): NonPayableTransactionObject<void>;

    cancelSubscription(
      subId: number | string | BN,
      to: string
    ): NonPayableTransactionObject<void>;

    createSubscription(): NonPayableTransactionObject<string>;

    deregisterProvingKey(
      publicProvingKey: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    fulfillRandomWords(
      proof: [
        (number | string | BN)[],
        (number | string | BN)[],
        number | string | BN,
        number | string | BN,
        number | string | BN,
        string,
        (number | string | BN)[],
        (number | string | BN)[],
        number | string | BN
      ],
      rc: [
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        string
      ]
    ): NonPayableTransactionObject<string>;

    getCommitment(
      requestId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getConfig(): NonPayableTransactionObject<{
      minimumRequestConfirmations: string;
      maxGasLimit: string;
      stalenessSeconds: string;
      gasAfterPaymentCalculation: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getCurrentSubId(): NonPayableTransactionObject<string>;

    getFallbackWeiPerUnitLink(): NonPayableTransactionObject<string>;

    getFeeConfig(): NonPayableTransactionObject<{
      fulfillmentFlatFeeLinkPPMTier1: string;
      fulfillmentFlatFeeLinkPPMTier2: string;
      fulfillmentFlatFeeLinkPPMTier3: string;
      fulfillmentFlatFeeLinkPPMTier4: string;
      fulfillmentFlatFeeLinkPPMTier5: string;
      reqsForTier2: string;
      reqsForTier3: string;
      reqsForTier4: string;
      reqsForTier5: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
    }>;

    getFeeTier(
      reqCount: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRequestConfig(): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string[];
    }>;

    getSubscription(subId: number | string | BN): NonPayableTransactionObject<{
      balance: string;
      reqCount: string;
      owner: string;
      consumers: string[];
      0: string;
      1: string;
      2: string;
      3: string[];
    }>;

    getTotalBalance(): NonPayableTransactionObject<string>;

    hashOfKey(
      publicKey: (number | string | BN)[]
    ): NonPayableTransactionObject<string>;

    onTokenTransfer(
      arg0: string,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    oracleWithdraw(
      recipient: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    ownerCancelSubscription(
      subId: number | string | BN
    ): NonPayableTransactionObject<void>;

    pendingRequestExists(
      subId: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    recoverFunds(to: string): NonPayableTransactionObject<void>;

    registerProvingKey(
      oracle: string,
      publicProvingKey: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    removeConsumer(
      subId: number | string | BN,
      consumer: string
    ): NonPayableTransactionObject<void>;

    requestRandomWords(
      keyHash: string | number[],
      subId: number | string | BN,
      requestConfirmations: number | string | BN,
      callbackGasLimit: number | string | BN,
      numWords: number | string | BN
    ): NonPayableTransactionObject<string>;

    requestSubscriptionOwnerTransfer(
      subId: number | string | BN,
      newOwner: string
    ): NonPayableTransactionObject<void>;

    setConfig(
      minimumRequestConfirmations: number | string | BN,
      maxGasLimit: number | string | BN,
      stalenessSeconds: number | string | BN,
      gasAfterPaymentCalculation: number | string | BN,
      fallbackWeiPerUnitLink: number | string | BN,
      feeConfig: [
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN,
        number | string | BN
      ]
    ): NonPayableTransactionObject<void>;

    transferOwnership(to: string): NonPayableTransactionObject<void>;

    typeAndVersion(): NonPayableTransactionObject<string>;
  };
  events: {
    ConfigSet(cb?: Callback<ConfigSet>): EventEmitter;
    ConfigSet(options?: EventOptions, cb?: Callback<ConfigSet>): EventEmitter;

    FundsRecovered(cb?: Callback<FundsRecovered>): EventEmitter;
    FundsRecovered(
      options?: EventOptions,
      cb?: Callback<FundsRecovered>
    ): EventEmitter;

    OwnershipTransferRequested(
      cb?: Callback<OwnershipTransferRequested>
    ): EventEmitter;
    OwnershipTransferRequested(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferRequested>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    ProvingKeyDeregistered(cb?: Callback<ProvingKeyDeregistered>): EventEmitter;
    ProvingKeyDeregistered(
      options?: EventOptions,
      cb?: Callback<ProvingKeyDeregistered>
    ): EventEmitter;

    ProvingKeyRegistered(cb?: Callback<ProvingKeyRegistered>): EventEmitter;
    ProvingKeyRegistered(
      options?: EventOptions,
      cb?: Callback<ProvingKeyRegistered>
    ): EventEmitter;

    RandomWordsFulfilled(cb?: Callback<RandomWordsFulfilled>): EventEmitter;
    RandomWordsFulfilled(
      options?: EventOptions,
      cb?: Callback<RandomWordsFulfilled>
    ): EventEmitter;

    RandomWordsRequested(cb?: Callback<RandomWordsRequested>): EventEmitter;
    RandomWordsRequested(
      options?: EventOptions,
      cb?: Callback<RandomWordsRequested>
    ): EventEmitter;

    SubscriptionCanceled(cb?: Callback<SubscriptionCanceled>): EventEmitter;
    SubscriptionCanceled(
      options?: EventOptions,
      cb?: Callback<SubscriptionCanceled>
    ): EventEmitter;

    SubscriptionConsumerAdded(
      cb?: Callback<SubscriptionConsumerAdded>
    ): EventEmitter;
    SubscriptionConsumerAdded(
      options?: EventOptions,
      cb?: Callback<SubscriptionConsumerAdded>
    ): EventEmitter;

    SubscriptionConsumerRemoved(
      cb?: Callback<SubscriptionConsumerRemoved>
    ): EventEmitter;
    SubscriptionConsumerRemoved(
      options?: EventOptions,
      cb?: Callback<SubscriptionConsumerRemoved>
    ): EventEmitter;

    SubscriptionCreated(cb?: Callback<SubscriptionCreated>): EventEmitter;
    SubscriptionCreated(
      options?: EventOptions,
      cb?: Callback<SubscriptionCreated>
    ): EventEmitter;

    SubscriptionFunded(cb?: Callback<SubscriptionFunded>): EventEmitter;
    SubscriptionFunded(
      options?: EventOptions,
      cb?: Callback<SubscriptionFunded>
    ): EventEmitter;

    SubscriptionOwnerTransferRequested(
      cb?: Callback<SubscriptionOwnerTransferRequested>
    ): EventEmitter;
    SubscriptionOwnerTransferRequested(
      options?: EventOptions,
      cb?: Callback<SubscriptionOwnerTransferRequested>
    ): EventEmitter;

    SubscriptionOwnerTransferred(
      cb?: Callback<SubscriptionOwnerTransferred>
    ): EventEmitter;
    SubscriptionOwnerTransferred(
      options?: EventOptions,
      cb?: Callback<SubscriptionOwnerTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ConfigSet", cb: Callback<ConfigSet>): void;
  once(
    event: "ConfigSet",
    options: EventOptions,
    cb: Callback<ConfigSet>
  ): void;

  once(event: "FundsRecovered", cb: Callback<FundsRecovered>): void;
  once(
    event: "FundsRecovered",
    options: EventOptions,
    cb: Callback<FundsRecovered>
  ): void;

  once(
    event: "OwnershipTransferRequested",
    cb: Callback<OwnershipTransferRequested>
  ): void;
  once(
    event: "OwnershipTransferRequested",
    options: EventOptions,
    cb: Callback<OwnershipTransferRequested>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(
    event: "ProvingKeyDeregistered",
    cb: Callback<ProvingKeyDeregistered>
  ): void;
  once(
    event: "ProvingKeyDeregistered",
    options: EventOptions,
    cb: Callback<ProvingKeyDeregistered>
  ): void;

  once(event: "ProvingKeyRegistered", cb: Callback<ProvingKeyRegistered>): void;
  once(
    event: "ProvingKeyRegistered",
    options: EventOptions,
    cb: Callback<ProvingKeyRegistered>
  ): void;

  once(event: "RandomWordsFulfilled", cb: Callback<RandomWordsFulfilled>): void;
  once(
    event: "RandomWordsFulfilled",
    options: EventOptions,
    cb: Callback<RandomWordsFulfilled>
  ): void;

  once(event: "RandomWordsRequested", cb: Callback<RandomWordsRequested>): void;
  once(
    event: "RandomWordsRequested",
    options: EventOptions,
    cb: Callback<RandomWordsRequested>
  ): void;

  once(event: "SubscriptionCanceled", cb: Callback<SubscriptionCanceled>): void;
  once(
    event: "SubscriptionCanceled",
    options: EventOptions,
    cb: Callback<SubscriptionCanceled>
  ): void;

  once(
    event: "SubscriptionConsumerAdded",
    cb: Callback<SubscriptionConsumerAdded>
  ): void;
  once(
    event: "SubscriptionConsumerAdded",
    options: EventOptions,
    cb: Callback<SubscriptionConsumerAdded>
  ): void;

  once(
    event: "SubscriptionConsumerRemoved",
    cb: Callback<SubscriptionConsumerRemoved>
  ): void;
  once(
    event: "SubscriptionConsumerRemoved",
    options: EventOptions,
    cb: Callback<SubscriptionConsumerRemoved>
  ): void;

  once(event: "SubscriptionCreated", cb: Callback<SubscriptionCreated>): void;
  once(
    event: "SubscriptionCreated",
    options: EventOptions,
    cb: Callback<SubscriptionCreated>
  ): void;

  once(event: "SubscriptionFunded", cb: Callback<SubscriptionFunded>): void;
  once(
    event: "SubscriptionFunded",
    options: EventOptions,
    cb: Callback<SubscriptionFunded>
  ): void;

  once(
    event: "SubscriptionOwnerTransferRequested",
    cb: Callback<SubscriptionOwnerTransferRequested>
  ): void;
  once(
    event: "SubscriptionOwnerTransferRequested",
    options: EventOptions,
    cb: Callback<SubscriptionOwnerTransferRequested>
  ): void;

  once(
    event: "SubscriptionOwnerTransferred",
    cb: Callback<SubscriptionOwnerTransferred>
  ): void;
  once(
    event: "SubscriptionOwnerTransferred",
    options: EventOptions,
    cb: Callback<SubscriptionOwnerTransferred>
  ): void;
}
