// src/models/Usuario.ts
import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface UsuarioInstance extends Model {
    id: number
    nome: string
    email: string
    endereco:string
    cidade: string
}

export const Usuario = sequelize.define<UsuarioInstance>("Usuario", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})