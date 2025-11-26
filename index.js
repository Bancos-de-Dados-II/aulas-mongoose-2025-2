import mongoose from "mongoose";
const {Schema} = mongoose;

conectar();
async function conectar(){
    await mongoose
        .connect('mongodb://localhost:27017/aula');
}

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
});

const Anotacoes = mongoose
    .model('Anotacoes', anotacaoSchema);