import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";
import { AdminRoom } from "../pages/AdminRoom";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:room_id" component={Room} />
      <Route path="/admin/rooms/:room_id" component={AdminRoom} />
    </Switch>
  );
}
