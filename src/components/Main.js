import React, { Component } from "react";
import "./App.css";
import gym from "../anytime.png";
import gym2 from "../gold.jpg";
import gym3 from "../joyfit.png";
import gym4 from "../konami.jpg";
import gym5 from "../fastgym.png";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: ""
    };
  }

  render() {
    var today = new Date();
    const i = today.getMonth() + 1;
    console.log(today.getFullYear() + "/" + i + "/" + today.getDate());
    console.log(today.getMonth() + 1);

    return (
      <div id="content">
        <h1>Add ownership</h1>
        <form
          onSubmit={(event, parts) => {
            event.preventDefault();
            const name = this.productName.value;
            const price = window.web3.utils.toWei(
              this.productPrice.value.toString(),
              "Ether"
            );
            const day = this.productDay.value;
            this.props.createProduct(name, price, day);
          }}
        >
          <div className="form-group mr-sm-2">
            <p>
              <select
                id="productName"
                ref={select => {
                  this.productName = select;
                }}
                className="form-control"
              >
                <option value="Anytime Fitness">Anytime Fitness </option>
                <option value="Gold gym">Gold gym</option>
                <option value="JoyFit">JoyFit</option>
                <option value="Konami">Konami</option>
                <option value="Fastgym">Fastgym</option>
              </select>
            </p>
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={input => {
                this.productPrice = input;
              }}
              className="form-control"
              placeholder="Product Price"
              required
            />
          </div>

          <div className="form-group mr-sm-2">
            <select
              id="productDay"
              ref={input => {
                this.productDay = input;
              }}
              className="form-control"
            >
              <option value="January">January </option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>

        <p>&nbsp;</p>
        <h2>Buy ownership</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col">Month</th>
            </tr>
          </thead>
          <tbody id="productList">
            {this.props.products.map((product, key) => {
              let preview = "";
              // product.forEach(element => {

              if (product.name === "Anytime Fitness") {
                console.log("uu");
                preview = (
                  <div>
                    <img src={gym} width="60px" />
                  </div>
                );
              }
              if (product.name === "Gold gym") {
                preview = <img src={gym2} width="50px" />;
              }
              if (product.name === "JoyFit") {
                preview = <img src={gym3} width="40px" />;
              }
              if (product.name === "Konami") {
                preview = <img src={gym4} width="70px" />;
              }
              if (product.name === "Fastgym") {
                preview = <img src={gym5} width="60px" />;
              }
              // });

              return (
                <tr key={key}>
                  <th scope="row">{preview}</th>

                  <td>{product.name} </td>

                  <td>
                    {window.web3.utils.fromWei(
                      product.price.toString(),
                      "Ether"
                    )}{" "}
                    Eth
                  </td>
                  <td>{product.owner}</td>
                  <td>{product.day}</td>
                  <td>
                    {!product.purchased ? (
                      <button
                        name={product.id}
                        value={product.price}
                        onClick={event => {
                          this.props.purchaseProduct(
                            event.target.name,
                            event.target.value
                          );
                        }}
                      >
                        Buy
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
