const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");
const adminRoutes = require("./routes/adminRoutes");
const flatRoutes = require("./routes/flatRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const genderRoutes = require("./routes/genderRoutes");
const countryRoutes = require("./routes/countryRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const districtRoutes = require("./routes/districtRoutes");
const cartRoutes = require("./routes/cartRoutes");
const statusRoutes = require("./routes/statusRoutes");
const regionRoutes = require("./routes/regionRoutes");
const languageRoutes = require("./routes/languageRoutes");
const seatRoutes = require("./routes/seatRoutes");
const tickettypeRoutes = require("./routes/tickettypeRoutes");
const discountRoutes = require("./routes/discountRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const customercartRoutes = require("./routes/customercartRoutes");
const customeraddressRoutes = require("./routes/customeraddressRoutes");
const seat_typeRoutes = require("./routes/seat_typeRoutes");
const customer = require("./routes/customerRoutes");
const human_categoryRoutes = require("./routes/human_categoryRoutes");
const event_typeRoutes = require("./routes/event_typeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const venue_typeRoutes = require("./routes/venue_typeRoutes");
const venue_photoRoutes = require("./routes/venue_photoRoutes");
const venueRoutes = require("./routes/venueRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", adminRoutes);
app.use("/api", bookingRoutes),
app.use("/api", flatRoutes);
app.use("/api", sectorRoutes);
app.use("/api", genderRoutes);
app.use("/api", countryRoutes);
app.use("/api", ticketRoutes);
app.use("/api", deliveryRoutes);
app.use("/api", districtRoutes);
app.use("/api", cartRoutes);
app.use("/api", statusRoutes);
app.use("/api", regionRoutes);
app.use("/api", languageRoutes);
app.use("/api", seatRoutes);
app.use("/api", tickettypeRoutes);
app.use("/api", discountRoutes);
app.use("/api", paymentRoutes);
app.use("/api", customercartRoutes);
app.use("/api", customeraddressRoutes);
app.use("/api", customer);
app.use("/api", seat_typeRoutes);
app.use("/api", human_categoryRoutes);
app.use("/api", event_typeRoutes);
app.use("/api", eventRoutes);
app.use("/api", venue_typeRoutes);
app.use("/api", venue_photoRoutes);
app.use("/api", venueRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
