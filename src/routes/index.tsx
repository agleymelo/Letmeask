import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:room_id" component={Room} />
    </Switch>
  );
}
