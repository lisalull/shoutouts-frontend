import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import {
  addShoutOut,
  deleteShoutOut,
  getShoutOutsByName,
} from "../services/ShoutOutService";
import AddShoutOutForm from "./AddShoutOutForm";
import "./ShoutOutsByName.css";
import ShoutOutsList from "./ShoutOutsList";

interface RouteParams {
  name: string;
}

const ShoutOutsByName = () => {
  const { name } = useParams<RouteParams>();
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    getShoutOutsByNameHandler(name);
  }, [name]);

  const getShoutOutsByNameHandler = (name: string): void => {
    getShoutOutsByName(name).then((response) => setShoutOuts(response));
  };

  const addShoutOutHandler = (shoutOut: ShoutOut): void => {
    addShoutOut(shoutOut).then(() => getShoutOutsByNameHandler(name));
  };

  const deleteShoutOutHandler = (id: string): void => {
    deleteShoutOut(id).then(() => {
      getShoutOutsByNameHandler(name);
    });
  };

  return (
    <div className="ShoutOutsByName">
      <h1>Shout outs for {}</h1>
      <Link to="/">Back to All Shoutouts</Link>
      <ShoutOutsList
        shoutOuts={shoutOuts}
        deleteShoutOutHandler={deleteShoutOutHandler}
      />
      <AddShoutOutForm
        addShoutOutHandler={addShoutOutHandler}
        recipient={name}
      />
    </div>
  );
};

export default ShoutOutsByName;
