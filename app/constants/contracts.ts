type Contracts = {
  moonpinContract: string;
  moonboardContract: string;
};

export const contracts: { [chainID: number]: Contracts } = {
  
  22999: {
    moonpinContract: "0xB11011307e0F3c805387c10aa69F874244b1bec3",
    moonboardContract: "",
  },
  11155111: {
    moonpinContract: "0xF672B1669d18409005cFCE03DecAFb2d90881D8B",
    moonboardContract: "0xA0c9bcd5B36379E32fe23D6f05b873a69FbD1644",
  },

};
