const db = require("../models");
const Materi = db.materi;

exports.create = async (req, res) => {
    try {
        const data 
        = await Materi.create(req.body)
        res.json({
            message: "Materi Created Successfully.",
            data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

exports.getAll = async(req, res) => {
    try {
        const materi= await Materi.findAll()
        res.json({
            message: "Materi Retrieved Successfully.",
            data: materi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.massage,
            data:null,
        });
    }
};

exports.update = async (req, res) => {
    try {
      const id = req.params.id;
      
      const materi = await Materi.findByPk(id, { rejectOnEmpty: true });
      materi.update(req.body, {
        where: { id }
      });
      res.json({
        message: 'Materi Updated Successfully.',
        data: materi
      });
    } catch(error) {
      res.status(500).json({
        message: error.message || 'Some Error Occurred While Retrieving Materi',
        data: null
      });
    }
  };

exports.delete = async(req, res) => {
    const id = req.params.id
    try {
        const materi= await Materi.findByPk(id, { rejectOnEmpty: true })

        materi.destroy()

        res.json({
            message: "Materi Deleted Successfully."
        });
    } catch (error) {
        res.status(500),json({
            message: error.massage || "Some Error Occurred While Retrieving Materi",
            data:null,
        });
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id
    try {
        const materi= await Materi.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Materi Retrieved Successfully With id=${id}.`,
            data: materi,
        });
    } catch (error) {
        res.status(500),json({
            message: error.massage || "Some Error Occurred While Retrieving Materi",
            data:null,
        });
    }
};

exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const materi = await Materi.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
        message: `Materi Retrieved Successfully With categoryId=${id}.`,
        data: materi,
    });
}