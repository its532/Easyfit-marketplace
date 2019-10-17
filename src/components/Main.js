import React, { Component } from "react";
import "./App.css";
import gym from "../anytime.png";
import gym2 from "../gold.jpg";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: ""
    };
  }

  //   captureFile = event => {
  //     event.preventDefault();
  //     // console.log(event.target.files[0])

  //     this.setState({
  //       imageData: event.target.files[0]
  //     });
  //     console.log(this.state.imageData);
  //   };

  render() {
    var today = new Date();
    const i = today.getMonth() + 1;
    console.log(today.getFullYear() + "/" + i + "/" + today.getDate());
    console.log(today.getMonth() + 1);
    // if (name === "Anytime Fitness") {
    //     preview = (
    //         <div>
    //             <img src={this.state.imageData} width="60px" />
    //         </div>
    //     )
    // }
    // const i = this.props.products
    // const imageData = this.state.imageData
    // let preview = "";
    // console.log(i.name)
    // if (i.name = 'Anytime Fitness') {

    //     preview = (
    //         <div>
    //             <img src={gym} width="60px" />
    //         </div>
    //     )

    // }
    // if (i.name = 'Gold gym') {

    //     preview = (
    //         <div>
    //             <img src={gym2} width="60px" />
    //         </div>
    //     )

    // }

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
                <option value="サンプル4">選択肢のサンプル4</option>
                <option value="サンプル5">選択肢のサンプル5</option>
              </select>
            </p>
            {/* <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productName = input }}
                            className="form-control"
                            placeholder="Product Name"
                            required /> */}
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
              <option value="Anytime Fitness">January </option>
              <option value="Gold gym">February</option>
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
          {/* <input type='file' onChange={this.captureFile}></input> */}
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>

        <p>&nbsp;</p>
        <h2>Buy ownership</h2>
        {/* {preview}
                <img src={gym2} alt="" width="60px"
                    ref={img => { this.imgi = img }} ></img>
                <img src={this.state.imageData} alt="" width="70px" /> */}

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
              // });

              return (
                <tr key={key}>
                  <th scope="row">{preview}</th>
                  {/* {product.id.toString()} */}

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
