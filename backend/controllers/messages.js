const MessagesSchema = require("../models/Messages");

//create a post
exports.newMessage = async (req, res) => {
  const newMessage = new MessagesSchema(req.body);
  try {
    const message = await newMessage.save();
    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await MessagesSchema.find({
      conversationId: req.params.conversationId,
    });
    return res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
