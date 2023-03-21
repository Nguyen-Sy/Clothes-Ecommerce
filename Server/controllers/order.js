const { Order } = require("../models");

exports.create = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
exports.getAll = async (req, res) => {
    try {
        const list = await Order.find({}).populate("user");
        console.log(list)
        const newList = list.map((order) => {
            const {
                lineItem,
                user,
                _id,
                state,
                createdAt,
            } = order;
            const userId = user._id;
            const { name } = user
            return {
                state,
                id: _id,
                lineItem,
                createdAt,
                user: {
                    userId,
                    name
                },
            };
        });
        res.status(200).json(newList);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.getByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        console.log(userId)
        const userOrder = await Order.find({ user: userId });
        if (!userOrder)
            return res.json("User doesn't have any order");

        res.status(200).json(userOrder);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.update = async (req, res) => {
    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });

        res.status(200).json(updateOrder);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};