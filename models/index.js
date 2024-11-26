const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Delivery = require("./delivery.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Language = require("./language.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Tickettype = require("./tickettype.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);
const Customercart = require("./customercart.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Seat_type = require("./seat_type.model")(sequelize, Sequelize);
const Human_category = require("./human_category.model")(sequelize, Sequelize);
const Event_type = require("./event_type.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Venue_type = require("./venue_type.model")(sequelize, Sequelize);
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const Customeraddress = require("./customeraddress.model")(
  sequelize,
  Sequelize
);
Customer.associate(sequelize.models);
Customercart.associate(sequelize.models);
Cart.associate(sequelize.models);
Ticket.associate(sequelize.models);
Booking.associate(sequelize.models);
Status.associate(sequelize.models);
Delivery.associate(sequelize.models);
Payment.associate(sequelize.models);
Discount.associate(sequelize.models);
Language.associate(sequelize.models);
Event.associate(sequelize.models);
Event_type.associate(sequelize.models);
Venue.associate(sequelize.models);
Seat.associate(sequelize.models);
Sector.associate(sequelize.models);
Seat_type.associate(sequelize.models);
Tickettype.associate(sequelize.models);
Region.associate(sequelize.models);
District.associate(sequelize.models);
Country.associate(sequelize.models);
Venue_type.associate(sequelize.models);
Customeraddress.associate(sequelize.models);
Flat.associate(sequelize.models);
Venue_photo.associate(sequelize.models);
Gender.associate(sequelize.models)
Human_category.associate(sequelize.models)
module.exports = {
  Admin,
  Flat,
  Sector,
  Gender,
  Booking,
  Country,
  Ticket,
  Delivery,
  District,
  Cart,
  Status,
  Region,
  Language,
  Seat,
  Tickettype,
  Discount,
  Payment,
  Customercart,
  Customeraddress,
  Customer,
  Seat_type,
  Human_category,
  Event_type,
  Event,
  Venue_type,
  Venue_photo,
  Venue,
  sequelize,
};
