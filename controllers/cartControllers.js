const { Cart, Ticket, Customer, Status } = require("../models");
const { validateCart } = require("../validations/cartValidations");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCart = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        {
          model: Ticket,
          as: "ticket",
        },
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!cart) return res.status(404).send("Cart not found");
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    await cart.update(req.body);
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(400).send("Cart not found");
    await cart.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
