const panelData = require('./PanelModel')

module.exports.createPanel = async (req, res) => {
    try {
      const newPanel = req.body;
      console.log(newPanel)
      await panelData.create(newPanel)
      res.status(200).json({ panel: newPanel.title }); 
    } catch (error) { res.status(400).json({error:"400"}); }
  }