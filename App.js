import React, { Component } from "react";
import { StyleSheet, Modal, View, Button } from "react-native";

import Janela from "./src/Janela";

export default class Ap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visivel: false,
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({
      visivel: true,
    });
  }
  sair(falso) {
    this.setState({
      visivel: falso,
    });
  }

  render() {
    // em <Janela> estamos renderizando dentro do arquivo Janela as propriedades
    //que vai ficar dentro do <Modal></Modal> e pasando algumas props como fechar=== this.props.fechar
    //oque retorna dentro do this.sair("") tem que ser um componente false,true,value....
    return (
      <View style={styles.container}>
        <Button type="button" onPress={this.entrar} title="Entrar" />
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.visivel}
        >
          <View
            style={{
              margin: 15,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Janela fechar={() => this.sair(false)} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDD",
  },
});
