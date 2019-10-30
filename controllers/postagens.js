const PostagemModel = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }
  
  //async getPorId (id)
  async create (postagemDTO){
    await new PostagemModel(postagemDTO).save();
  }

  async getPorId(id) {
    const postagem = await PostagemModel.find({_id: id});
    return postagem;
  }

  async update (id, postagemDTO){
    await PostagemModel.updateOne({_id: id}, postagemDTO);
  }

  async delete (id, postagemDTO){
    await PostagemModel.deleteOne({_id: id}, postagemDTO);
  }
}

module.exports = new Postagens();