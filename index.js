import app from "./app";

const PORT = process.env.PORT || 9879;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
