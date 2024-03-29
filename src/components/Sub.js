import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import Navbar from "./Navbar";
import Main from "./Main";
import Detail from "../views/Detail";
import APP from "../views/APP";

class Sub extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    // console.log(web3);
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();

    const networkData = Marketplace.networks[networkId];
    console.log(Marketplace.abi);
    if (networkData) {
      const marketplace = new web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
      console.log(marketplace.address);
      for (let i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        // console.log(product);
        this.setState({
          products: [...this.state.products, product]
        });
      }
      this.setState({ loading: false });
      console.log(this.state.products);
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
    // console.log(this.state.account);
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      productCount: 0,
      products: [],
      loading: true
    };

    this.createProduct = this.createProduct.bind(this);
    this.purchaseProduct = this.purchaseProduct.bind(this);
  }

  createProduct(name, price, day) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .createProduct(name, price, day)
      .send({ from: this.state.account })
      .once("receipt", receipt => {
        this.setState({ loading: false });
      });
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .purchaseProduct(id)
      .send({ from: this.state.account, value: price })
      .once("receipt", receipt => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar account={this.state.account} />
          <div className="container-fluid mt-5">
            <div className="row">
              <Switch>
                <Route path="/w" component={Detail}></Route>
                <Route path="/w1" component={APP}></Route>
              </Switch>
              <main role="main" className="col-lg-12 d-flex">
                {this.state.loading ? (
                  <div id="loader" className="text-center">
                    <p className="text-center">Loading...</p>
                  </div>
                ) : (
                  <Main
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
                )}
              </main>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Sub;
