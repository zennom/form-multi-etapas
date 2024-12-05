import { Usuario } from '../models/Usuario'
import { Request, Response } from 'express'

export const index = async (req: Request, res: Response) => {
    res.render('inicio')

}
export const etapa1 = async (req: Request, res: Response) => {
    res.render("etapa1");
}

export const etapa1Post = async (req: Request, res: Response) => {
    const { nome, email } = req.body;

    const form = await Usuario.create({
        nome,
        email
    });
  
    res.redirect(`/etapa2?id=${form.id}`);
}
export const etapa2 = async (req: Request, res: Response) => {
    const { id } = req.query;
    const form = await Usuario.findByPk(id as string);
    res.render("etapa2", { form });
}
export const etapa2Post = async (req: Request, res: Response) => {
    const { id, endereco, cidade } = req.body;
    await Usuario.update({ endereco, cidade }, { where: { id } });

    res.redirect(`/etapa3?id=${id}`);
}
export const etapa3 = async (req: Request, res: Response) => {
    const { id } = req.query;
    const form = await Usuario.findByPk(id as string);
    res.render("etapa3", { form });
}

export const submit = async (req: Request, res: Response) => {
    res.send("Formulário enviado com sucesso!");
}
