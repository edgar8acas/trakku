import "reflect-metadata";
import { createOrmConnection } from "./helpers/createOrmConnection";
import { startServer } from "./startServer";
import api from "./router";

const PORT = process.env.PORT || 5000;
const app = startServer(api);
(async function setup() {
  await createOrmConnection();
})();

app.listen(PORT, () => console.log(`Listening from port ${PORT}`));
