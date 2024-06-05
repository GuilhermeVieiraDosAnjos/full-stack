const Annotations = require('../models/AnnotationData')

module.exports = {

  async read( req, res) {
    const priority = req.query;

    const priorityNotes = await Annotations.find(priority)

    return res.json(priorityNotes)
  },

  async update(req, res){
    const {id} = req.params;

    const PriorityChange = await Annotations.findOne({_id: id});

    if(PriorityChange.priority){
      PriorityChange.priority = false
    }else{
      PriorityChange.priority = true

    }

    await PriorityChange.save();

    return res.json(PriorityChange)
  }

}
