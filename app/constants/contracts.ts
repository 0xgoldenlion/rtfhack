type Contracts = {
  moonpinContract: string;
  moonboardContract: string;
};

export const contracts: { [chainID: number]: Contracts } = {
  
  22999: {
    moonpinContract: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    moonboardContract: "",
  },
  11155111: {
    moonpinContract: "0xF672B1669d18409005cFCE03DecAFb2d90881D8B",
    moonboardContract: "0xA0c9bcd5B36379E32fe23D6f05b873a69FbD1644",
  },

};
