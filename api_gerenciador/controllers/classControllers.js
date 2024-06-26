const Class = require('../models/Class');

const getAllClasses = async (req, res) => {
    const classes = await Class.find();
    res.send(classes);
};


const createClass = async (req, res) => {
    try {
        const { name } = req.body;
    

        // Verifica se o campo `name` está presente
        if (!name) {
            return res.status(400).json({ error: 'O campo "name" é obrigatório.' });
        }

        // Cria uma nova instância da classe `Class`
        const newClass = new Class({ name });

        // Salva a nova classe no banco de dados
        await newClass.save();

    
        res.status(201).json(newClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a classe.' });
    }
};





const updateClass = async (req, res) => {
    const updatedClass = await Class.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!updatedClass) {
        return res.status(404).send({ error: 'Class not found' });
    }
    res.send(updatedClass);
};

const deleteClass = async (req, res) => {
    const deletedClass = await Class.findOneAndDelete({ _id: req.params.id });
    if (!deletedClass) {
        return res.status(404).send({ error: 'Class not found' });
    }
    res.send(deletedClass);
};

module.exports = { getAllClasses, createClass, updateClass, deleteClass };
