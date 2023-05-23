import { Schema, models, model } from "mongoose";

export interface IPedido {
  line_items: object;
  nome: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
  email: string;
  paid: boolean;
}

const PedidoSchema = new Schema(
  {
    line_items: Object,
    nome: String,
    cep: String,
    estado: String,
    cidade: String,
    bairro: String,
    rua: String,
    numero: String,
    complemento: String,
    email: String,
    paid: Boolean,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Pedido = models.Pedido || model<IPedido>("Pedido", PedidoSchema);

export default Pedido;
