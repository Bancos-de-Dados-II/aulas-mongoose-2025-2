import mongoose from "mongoose";
const {Schema} = mongoose;

const anotacaoSchema = new Schema({
    id: {
        type: UUID,
        default: () => crypto.randomUUID(),
        unique: true
    },
    titulo: {
        type: String,
        required: true
    },
    conteudo: String,
    tipo: {
        type: String,
        enum: ['pessoal', 'profissional', 'outros']
    },
    localizacao: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})